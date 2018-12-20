'use strict';

import inherits from 'inherits';
import { btoa } from 'pouchdb-binary-utils';
import { Headers } from "pouchdb-fetch";
import { assign, parseUri } from "pouchdb-utils";

function getBaseUrl(db) {
  // Use PouchDB.defaults' prefix, if any
  let fullName;
  if (db.__opts && db.__opts.prefix) {
    var prefix = db.__opts.prefix;
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + db.name;
  } else {
    fullName = db.name;
  }

  var uri = parseUri(fullName);

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
    var uri = parseUri(db.name);
    if (uri.user || uri.password) {
      auth = {
        username: uri.user,
        password: uri.password,
      };
    }
  }

  if (!auth) {
    return new Headers();
  }

  var str = auth.username + ':' + auth.password;
  var token = btoa(decodeURIComponent(encodeURIComponent(str)));

  var headers = new Headers();
  headers.set('Authorization', 'Basic ' + token);

  return headers;
}

function doFetch(db, url, opts, callback) {
  opts = assign(opts || {});
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

export {
  AuthError,
  doFetch,
  getBasicAuthHeaders,
  getBaseUrl,
};
