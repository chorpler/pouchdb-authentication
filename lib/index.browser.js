'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var inherits = _interopDefault(require('inherits'));
var pouchdbBinaryUtils = require('pouchdb-binary-utils');
var pouchdbFetch = require('pouchdb-fetch');
var pouchdbUtils = require('pouchdb-utils');

function getBaseUrl(db) {
  // Use PouchDB.defaults' prefix, if any
  var fullName;
  if (db.__opts && db.__opts.prefix) {
    var prefix = db.__opts.prefix;
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + db.name;
  } else {
    fullName = db.name;
  }

  var uri = pouchdbUtils.parseUri(fullName);

  // Compute parent path for databases not hosted on domain root (see #215)
  var path = uri.path;
  var normalizedPath = path.endsWith('/') ? path.substr(0, -1) : path;
  var parentPath = normalizedPath.split('/').slice(0, -1).join('/');

  return uri.protocol + '://' +
      uri.host +
      (uri.port ? ':' + uri.port : '') +
      parentPath;
}

function getBasicAuthHeaders(db) {
  var auth;

  if (db.__opts && db.__opts.auth) {
    auth = db.__opts.auth;
  } else {
    var uri = pouchdbUtils.parseUri(db.name);
    if (uri.user || uri.password) {
      auth = {
        username: uri.user,
        password: uri.password,
      };
    }
  }

  if (!auth) {
    return new pouchdbFetch.Headers();
  }

  var str = auth.username + ':' + auth.password;
  var token = pouchdbBinaryUtils.btoa(decodeURIComponent(encodeURIComponent(str)));

  var headers = new pouchdbFetch.Headers();
  headers.set('Authorization', 'Basic ' + token);

  return headers;
}

function doFetch(db, url, opts, callback) {
  opts = pouchdbUtils.assign(opts || {});
  var newurl = url;
  if (url[0] === '/') {
    newurl = ".." + url;
  }
  
  if (opts.body && typeof opts.body !== 'string') {
    opts.body = JSON.stringify(opts.body);
  }

  db.fetch(newurl, opts).then(function (res) {
    var ok = res.ok;
    return res.json().then(function (content) {
      if (ok) {
        callback(null, content);
      } else {
        content.name = content.error;
        callback(content);
      }
    });
  }).catch(function (err) {
    if (err && err.name === 'unknown_error') {
      err.message = (err.message + ' ' || '') +
          'Unknown error!  Did you remember to enable CORS?';
    }
    callback(err);
  });
}

function AuthError(message) {
  this.status = 400;
  this.name = 'authentication_error';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, AuthError);
  } catch (e) {}
}

inherits(AuthError, Error);

function getConfigUrl(db, nodeName) {
  return (nodeName ? '/_node/' + nodeName : '') + '/_config';
}

var getMembership = pouchdbUtils.toPromise(function (opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }

  var url = '/_membership';
  var ajaxOpts = pouchdbUtils.assign({
    method: 'GET',
    headers: getBasicAuthHeaders(db),
  }, opts.ajax || {});

  return doFetch(db, url, ajaxOpts, callback);
});

var signUpAdmin = pouchdbUtils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? (typeof password === 'undefined' ?
      username : password) : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
      'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  } else if (!password) {
    return callback(new AuthError('You must provide a password'));
  }

  db.getMembership(opts, function (error, membership) {
    var nodeName;
    if (error) {
      if (error.error !== 'illegal_database_name') {
        return callback(error);
      } else {
        // Some couchdb-1.x-like server
        nodeName = undefined;
      }
    } else {
      // Some couchdb-2.x-like server
      nodeName = membership.all_nodes[0];
    }

    var configUrl = getConfigUrl(db, nodeName);
    var url = (opts.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
    var ajaxOpts = pouchdbUtils.assign({
      method: 'PUT',
      processData: false,
      headers: getBasicAuthHeaders(db),
      body: '"' + password + '"',
    }, opts.ajax || {});

    return doFetch(db, url, ajaxOpts, callback);
  });
});

var deleteAdmin = pouchdbUtils.toPromise(function (username, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? username : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
      'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  }

  db.getMembership(opts, function (error, membership) {
    var nodeName;
    if (error) {
      if (error.error !== 'illegal_database_name') {
        return callback(error);
      } else {
        // Some couchdb-1.x-like server
        nodeName = undefined;
      }
    } else {
      // Some couchdb-2.x-like server
      nodeName = membership.all_nodes[0];
    }

    var configUrl = getConfigUrl(db, nodeName);
    var url = (opts.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
    var ajaxOpts = pouchdbUtils.assign({
      method: 'DELETE',
      processData: false,
      headers: getBasicAuthHeaders(db),
    }, opts.ajax || {});

    return doFetch(db, url, ajaxOpts, callback);
  });
});

var logIn = pouchdbUtils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('this plugin only works for the http/https adapter'));
  }

  if (!username) {
    return callback(new AuthError('you must provide a username'));
  } else if (!password) {
    return callback(new AuthError('you must provide a password'));
  }

  var url = '/_session';
  var ajaxOpts = pouchdbUtils.assign({
    method: 'POST',
    headers: pouchdbUtils.assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
    body: {name: username, password: password},
  }, opts.ajax || {});

  return doFetch(db, url, ajaxOpts, callback);
});

var logOut = pouchdbUtils.toPromise(function (opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }

  var url = '/_session';
  var ajaxOpts = pouchdbUtils.assign({
    method: 'DELETE',
    headers: getBasicAuthHeaders(db),
  }, opts.ajax || {});

  return doFetch(db, url, ajaxOpts, callback);
});

var getSession = pouchdbUtils.toPromise(function (opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }

  var url = '/_session';
  var ajaxOpts = pouchdbUtils.assign({
    method: 'GET',
    headers: getBasicAuthHeaders(db),
  }, opts.ajax || {});

  return doFetch(db, url, ajaxOpts, callback);
});

// function getBaseUrl(db) {
//   // Use PouchDB.defaults' prefix, if any
//   let fullName;
//   if (db.__opts && db.__opts.prefix) {
//     var prefix = db.__opts.prefix;
//     fullName = prefix + (prefix.endsWith('/') ? '' : '/') + db.name;
//   } else {
//     fullName = db.name;
//   }

//   var uri = parseUri(fullName);

//   // Compute parent path for databases not hosted on domain root (see #215)
//   var path = uri.path;
//   var normalizedPath = path.endsWith('/') ? path.substr(0, -1) : path;
//   var parentPath = normalizedPath.split('/').slice(0, -1).join('/');

//   return uri.protocol + '://' +
//       uri.host +
//       (uri.port ? ':' + uri.port : '') +
//       parentPath;
// }

var getUsersDatabaseUrl = function () {
  var db = this;
  return getBaseUrl(db) + '/_users';
};

function updateUser(db, user, opts, callback) {
  var reservedWords = [
    '_id',
    '_rev',
    'name',
    'type',
    'roles',
    'password',
    'password_scheme',
    'iterations',
    'derived_key',
    'salt' ];

  if (opts.metadata) {
    for (var key in opts.metadata) {
      if (opts.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
        return callback(new AuthError('cannot use reserved word in metadata: "' + key + '"'));
      }
    }
    user = pouchdbUtils.assign(user, opts.metadata);
  }

  if (opts.roles) {
    user = pouchdbUtils.assign(user, {roles: opts.roles});
  }

  var url = '/_users/' + encodeURIComponent(user._id);
  var ajaxOpts = pouchdbUtils.assign({
    method: 'PUT',
    body: user,
    headers: getBasicAuthHeaders(db),
  }, opts.ajax || {});

  doFetch(db, url, ajaxOpts, callback);
}

var signUp = pouchdbUtils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? (typeof password === 'undefined' ?
        username : password) : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
        'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  } else if (!password) {
    return callback(new AuthError('You must provide a password'));
  }

  var userId = 'org.couchdb.user:' + username;
  var user = {
    name: username,
    password: password,
    roles: [],
    type: 'user',
    _id: userId,
  };

  updateUser(db, user, opts, callback);
});

var getUser = pouchdbUtils.toPromise(function (username, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? username : opts;
    opts = {};
  }
  if (!username) {
    return callback(new AuthError('you must provide a username'));
  }

  var url = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
  var ajaxOpts = pouchdbUtils.assign({
    method: 'GET',
    headers: getBasicAuthHeaders(db),
  }, opts.ajax || {});

  doFetch(db, url, ajaxOpts, callback);
});

var putUser = pouchdbUtils.toPromise(function (username, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? username : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
        'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  }

  db.getUser(username, opts, function (error, user) {
    if (error) {
      return callback(error);
    }

    updateUser(db, user, opts, callback);
  });
});

var deleteUser = pouchdbUtils.toPromise(function (username, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? username : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
        'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  }

  db.getUser(username, opts, function (error, user) {
    if (error) {
      return callback(error);
    }

    var url = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
    var ajaxOpts = pouchdbUtils.assign({
      method: 'DELETE',
      headers: getBasicAuthHeaders(db),
    }, opts.ajax || {});

    doFetch(db, url, ajaxOpts, callback);
  });
});

var changePassword = pouchdbUtils.toPromise(function (username, password, opts, callback) {
  var db = this;
  if (typeof callback === 'undefined') {
    callback = typeof opts === 'undefined' ? (typeof password === 'undefined' ?
        username : password) : opts;
    opts = {};
  }
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
        'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  } else if (!username) {
    return callback(new AuthError('You must provide a username'));
  } else if (!password) {
    return callback(new AuthError('You must provide a password'));
  }

  db.getUser(username, opts, function (error, user) {
    if (error) {
      return callback(error);
    }

    user.password = password;

    var url = '/_users/' + encodeURIComponent(user._id);
    var ajaxOpts = pouchdbUtils.assign({
      method: 'PUT',
      headers: getBasicAuthHeaders(db),
      body: user,
    }, opts.ajax || {});

    doFetch(db, url, ajaxOpts, callback);
  });
});

var changeUsername = pouchdbUtils.toPromise(function (oldUsername, newUsername, opts, callback) {
  var db = this;
  var USERNAME_PREFIX = 'org.couchdb.user:';
  var fetch = function (url, opts) {
    return new Promise(function (resolve, reject) {
      doFetch(db, url, opts, function (err, res) {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
    });
  };
  var updateUser = function (user, opts) {
    var url = '/_users/' + encodeURIComponent(user._id);
    var updateOpts = pouchdbUtils.assign({
      method: 'PUT',
      headers: getBasicAuthHeaders(db),
      body: user,
    }, opts.ajax);

    return fetch(url, updateOpts);
  };
  if (typeof callback === 'undefined') {
    callback = opts;
    opts = {};
  }
  opts.ajax = opts.ajax || {};
  if (['http', 'https'].indexOf(db.type()) === -1) {
    return callback(new AuthError('This plugin only works for the http/https adapter. ' +
        'So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));
  }
  if (!newUsername) {
    return callback(new AuthError('You must provide a new username'));
  }
  if (!oldUsername) {
    return callback(new AuthError('You must provide a username to rename'));
  }

  db.getUser(newUsername, opts)
      .then(function () {
        var error = new AuthError('user already exists');
        error.taken = true;
        throw error;
      }, function () {
        return db.getUser(oldUsername, opts);
      })
      .then(function (user) {
        var newUser = pouchdbUtils.clone(user);
        delete newUser._rev;
        newUser._id = USERNAME_PREFIX + newUsername;
        newUser.name = newUsername;
        newUser.roles = opts.roles || user.roles || {};
        return updateUser(newUser, opts).then(function () {
          user._deleted = true;
          return updateUser(user, opts);
        });
      }).then(function (res) {
    callback(null, res);
  }).catch(callback);
});

var plugin = {};

plugin.login = logIn;
plugin.logIn = logIn;
plugin.logout = logOut;
plugin.logOut = logOut;
plugin.getSession = getSession;

plugin.getMembership = getMembership;
plugin.signUpAdmin = signUpAdmin;
plugin.deleteAdmin = deleteAdmin;

plugin.getUsersDatabaseUrl = getUsersDatabaseUrl;
plugin.signup = signUp;
plugin.signUp = signUp;
plugin.getUser = getUser;
plugin.putUser = putUser;
plugin.deleteUser = deleteUser;
plugin.changePassword = changePassword;
plugin.changeUsername = changeUsername;

if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(plugin);
}

module.exports = plugin;
