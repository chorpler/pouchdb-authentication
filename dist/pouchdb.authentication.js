(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PouchAuthentication = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var PouchDB = require(9);

var pouchdbBinaryUtils = require(6);

var pouchdbFetch = require(13);

var pouchdbUtils = require(16);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var AuthError =
/** @class */
function (_super) {
  __extends(AuthError, _super); // public error?:string = "";
  // public 


  function AuthError(msg) {
    var arguments$1 = arguments;
    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments$1[_i];
    }

    var _this = _super.call(this, msg) || this;

    _this.status = 400;
    _this.name = "authentication_error"; // public message:string = "";

    _this.error = true;
    _this.taken = false;
    _this.reason = "";
    var self = _this;

    if (msg) {
      _this.message = msg;
    }

    if (typeof Error !== 'undefined' && typeof Error.captureStackTrace === 'function') {
      // Error.captureStackTrace(this, AuthError);
      // Error.captureStackTrace(this);
      Error.captureStackTrace(self, AuthError); // Error.captureStackTrace(self, self.constructor);
    }

    if (!_this.reason) {
      _this.reason = _this.message;
    }

    _this.toJSON = function () {
      // debuglog(`AuthError.toJSON() called`);
      var out = Object.assign({}, _this);
      out.message = _this.message + ""; // console.log(`AuthError.toJSON() called. Returning:`, out);

      return out;
    };

    _this.toJson = function () {
      return _this.toJSON();
    };

    return _this;
  }

  return AuthError;
}(Error); // import { URL as wURL           } from 'whatwg-url'           ;


var g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}; // var Cookie = tough.Cookie;
// const nodeFetch = fetch;

var nodeFetch = pouchdbFetch.fetch;
var nFetch = nodeFetch; // const cFetch:Fetch = fetchCookie(nodeFetch);

var mode = typeof window !== 'undefined' ? 'browser' : 'node';
var fet = typeof g['fetch'] === 'function' ? g['fetch'] : nFetch;

var debuglog = function debuglog() {
  var arguments$1 = arguments;
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments$1[_i];
  } // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }


  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function') {
    PouchDB.emit('debug', __spread(['authentication'], args));
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log.apply(console, __spread(args));
  }
};

var debugloggroup = function debugloggroup(label) {
  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupCollapsed === 'function') {
    console.groupCollapsed(label);
  }
};

var debugloggroupend = function debugloggroupend() {
  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupEnd === 'function') {
    console.groupEnd();
  }
};

var debuglogemph = function debuglogemph(msg) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }
  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true) {
    var es = "background-color:red; color:white;";

    if (typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function') {
      PouchDB.emit('debug', ['authentication', msg]);
    }

    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      if (g.chrome) {
        console.log("%c" + msg, es);
      } else {
        console.log(msg);
      }
    }
  }
};

var debugerr = function debugerr() {
  var arguments$1 = arguments;
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments$1[_i];
  }

  var e_1, _a; // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.error(...args);
  // }


  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  var errs,
      strError,
      jsonError = {};

  if (g && (g.pouchdbauthenticationplugindebug || typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function')) {
    errs = __spread(args);

    try {
      for (var errs_1 = __values(errs), errs_1_1 = errs_1.next(); !errs_1_1.done; errs_1_1 = errs_1.next()) {
        var err = errs_1_1.value;

        if (err instanceof AuthError) {
          jsonError = err.toJSON();
          strError = JSON.stringify(jsonError);
          break;
        } else if (err instanceof Error) {
          strError = JSON.stringify(err);
          jsonError = JSON.parse(strError);

          if (strError === '{}') {
            jsonError = {
              message: err.message || "unknown_error_message",
              name: err.name || "unknown_error_name",
              stack: err.stack || "unknown_error_stack"
            };
            strError = JSON.stringify(jsonError);
          } // else {
          // }


          break;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (errs_1_1 && !errs_1_1.done && (_a = errs_1.return)) {
          _a.call(errs_1);
        }
      } finally {
        if (e_1) {
          throw e_1.error;
        }
      }
    }
  }

  if (typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function') {
    PouchDB.emit('debug', __spread(['authentication', "ERROR"], args));
    PouchDB.emit('debug', ['authentication', "STRERROR", strError]);
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function' && typeof console.error === 'function') {
    var errcss = "font-weight: bold; background-color: rgba(255, 0, 0, 0.25);";

    if (errs[0]) {
      if (errs[0] instanceof AuthError) {
        console.log("%cPDBAUTH AUTHERROR:", errcss, jsonError);
        console.error(errs[0]);
      } else if (errs[0] instanceof Error) {
        console.log("%cPDBAUTH ERROR: ", errcss, jsonError);
        console.error(errs[0]);
      } else {
        console.error("%cPDBAUTH ERROR 1?: ", errcss, strError);
      }
    } else {
      console.error("%cPDBAUTH ERROR 2?: ", errcss, strError);
    }
  }
}; // let err = [...args] || [{}];


var getBaseUrl = function getBaseUrl(db) {
  // Use PouchDB.defaults' prefix, if any
  var fullName;
  var dbname = db.name; // let type:string = db.type();

  var prefix = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';

  if (prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }

  var uri = pouchdbUtils.parseUri(fullName); // Compute parent path for databases not hosted on domain root (see #215)

  var path = uri.path;
  var normalizedPath = path.endsWith('/') ? path.substr(0, -1) : path;
  var parentPath = normalizedPath.split('/').slice(0, -1).join('/');
  var portString = uri.port ? ":" + uri.port : '';
  var baseURL = uri.protocol + "://" + uri.host + portString + parentPath; // let baseURL:string = uri.protocol + '://' + uri.host + (uri.port ? ':' + uri.port : '') + parentPath;
  // console.log(`getBaseUrl(): Base URL is '${baseURL}'`);

  debuglog("getBaseUrl(): Base URL is '" + baseURL + "'");
  return baseURL;
};

var getDatabaseUrl = function getDatabaseUrl(db) {
  var fullName;
  var dbname = db.name; // let type:string = db.type();

  var prefix = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';

  if (prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }

  debuglog("getDatabaseUrl(): Database URL is '" + fullName + "'");
  return fullName;
};

var getRelativeComplexUrl = function getRelativeComplexUrl(db, url) {
  var dbBaseURL = getDatabaseUrl(db);
  var complexBaseUrl = makeBaseUrl(dbBaseURL, url);
  var dbname = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog("getRelativeComplexUrl(): Relative complex URL for database '" + dbname + "' and URL '" + url + "' is '" + complexBaseUrl + "'");
  return complexBaseUrl;
};

var getComplexBaseUrl = function getComplexBaseUrl(db, url) {
  var dbBaseURL = getDatabaseUrl(db);
  var complexBaseUrl = makeBaseUrl(dbBaseURL, url);
  var dbname = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog("getComplexBaseUrl(): Complex base URL for database '" + dbname + "' and URL '" + url + "' is '" + complexBaseUrl + "'");
  return complexBaseUrl;
};

var makeBaseUrl = function makeBaseUrl(baseURL, newURL) {
  // let newuri : ParsedURI = parseUri(newURL);
  // let puri   : ParsedURI = parseUri(baseURL);
  var outurl = "";
  baseURL = baseURL.slice(-1) === '/' ? baseURL.slice(0, -1) : baseURL;
  var baseuri = new URL(baseURL);
  var puri = new URL(newURL, baseURL);
  var relativePath = puri.pathname + puri.search; // let outurl:string = getURLWithoutSearchParams(baseURL);
  // outurl = outurl.slice(-1) === '/' ? outurl.slice(0,-1) : outurl;
  // let dir1:string = puri.directory + puri.file;

  var dir1 = baseuri.pathname;
  var dirs = dir1.split('/');
  var len = dirs.length;
  var last = len - 1;
  var count = dirs[last] === "" ? len - 2 : len - 1;

  for (var i = 0; i < count; i++) {
    outurl += "../";
  }

  var addedpath = relativePath.slice(0, 1) === '/' ? relativePath.slice(1) : relativePath;
  var newfile = addedpath;
  outurl += newfile;
  outurl = outurl.slice(0, 1) === '/' ? outurl.slice(1) : outurl;
  debuglog("makeBaseUrl(): Complicated base URL from '" + baseURL + "' and '" + newURL + "' is '" + outurl + "'");
  return outurl;
};

function getURLWithoutSearchParams(url) {
  var uri = pouchdbUtils.parseUri(url);
  var cleanURL = uri.protocol + "://" + uri.authority + uri.directory + uri.file;
  return cleanURL;
}

function getBasicAuthTokenFor(username, password) {
  var authString = username + ":" + password;
  var token = pouchdbBinaryUtils.btoa(decodeURIComponent(encodeURIComponent(authString)));
  return token;
}

function getBasicAuthStringFor(username, password) {
  var token = getBasicAuthTokenFor(username, password);
  var authString = "Basic " + token;
  return authString;
}

function getBasicAuthHeadersFor(username, password) {
  var authString = getBasicAuthStringFor(username, password);
  var headers = new pouchdbFetch.Headers();
  headers.set('Authorization', authString);
  return headers;
}

var getBasicAuthHeaders = function getBasicAuthHeaders(db) {
  var auth;

  if (!db) {
    return new pouchdbFetch.Headers();
  }

  if (db.__opts && db.__opts.auth) {
    auth = db.__opts.auth;
  } else {
    var uri = pouchdbUtils.parseUri(db.name);

    if (uri.user || uri.password) {
      auth = {
        username: uri.user,
        password: uri.password
      };
    }
  }

  if (!auth) {
    return new pouchdbFetch.Headers();
  }

  return getBasicAuthHeadersFor(auth.username, auth.password); // let str:string = auth.username + ':' + auth.password;
  // let token:string = btoa(decodeURIComponent(encodeURIComponent(str)));
  // let headers:Headers = new Headers();
  // headers.set('Authorization', 'Basic ' + token);
  // return headers;
};

function doFetch(db, url, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var e_2, _a, e_3, _b, dbname, groupLabel, full, newurl, baseURL, res, RESERVED_KEYS, RESERVED_KEYS_1, RESERVED_KEYS_1_1, key, fullURL, authString, headers, newHeaders, headers, headers_1, headers_1_1, entry, key, value, nFetchOpts, hdrs, jsonRes, ok, content, msg, status, err, err_1;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 8,, 9]);

          opts = pouchdbUtils.assign(opts || {});
          dbname = getDatabaseUrl(db);
          groupLabel = "doFetch called for DB '" + dbname + "' and URL '" + url + "' \u2026";
          debugloggroup(groupLabel); // debuglog(`doFetch(): Full DB is:`, db);
          // debuglog(`doFetch(): Called with url '${url}'`);

          debuglog("doFetch(): Called with opts:", opts);
          debugloggroupend();
          full = true;
          newurl = void 0;
          baseURL = void 0;
          res = void 0;
          RESERVED_KEYS = ['/_config', '/_users', '/_session', '/_active_tasks', '/_all_dbs', '/_dbs_info', '/_cluster_setup', '/_db_updates', '/_membership', '/_replicate', '/_scheduler', '/_node', '/_utils', '/_up', '/_uuids', '/favicon.ico'];

          try {
            // if(RESERVED_KEYS.indexOf(url) > -1) {
            //   baseURL = getBaseUrl(db);
            // } else {
            //   baseURL = db.name;
            // }
            for (RESERVED_KEYS_1 = __values(RESERVED_KEYS), RESERVED_KEYS_1_1 = RESERVED_KEYS_1.next(); !RESERVED_KEYS_1_1.done; RESERVED_KEYS_1_1 = RESERVED_KEYS_1.next()) {
              key = RESERVED_KEYS_1_1.value;

              if (url.includes(key)) {
                // if(url.startsWith(key)) {
                full = false;
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (RESERVED_KEYS_1_1 && !RESERVED_KEYS_1_1.done && (_a = RESERVED_KEYS_1.return)) {
                _a.call(RESERVED_KEYS_1);
              }
            } finally {
              if (e_2) {
                throw e_2.error;
              }
            }
          }

          if (full) {
            baseURL = db.name;
          } else {
            baseURL = url; // baseURL = getBaseUrl(db);
            // baseURL = getComplexBaseUrl(db, url);
          }

          fullURL = new URL(baseURL, dbname); // newurl = baseURL;

          newurl = fullURL.href; // if(url[0] === "/") {
          //   newurl = baseURL + url;
          // } else {
          //   newurl = baseURL + "/" + url;
          // }
          // if(url[0] === '/') {
          //   newurl = ".." + url;
          // }
          // let dbname:string = db.name;
          // newurl = url;
          // console.log(`doFetch(): DB is: `, db);

          if (opts.body && typeof opts.body !== 'string') {
            opts.body = JSON.stringify(opts.body); // opts.body = JSON.stringify(opts.body);
          }

          if (fullURL.username) {
            authString = getBasicAuthStringFor(fullURL.username, fullURL.password);
            headers = new pouchdbFetch.Headers(opts.headers);
            headers.set("Authorization", authString);
            opts.headers = headers;
            newurl = fullURL.origin + fullURL.pathname + fullURL.search;
          }

          if (!full) {
            return [3
            /*break*/
            , 2];
          } // let res:Response = await db.fetch(newurl, opts);


          debuglog("doFetch(): PouchDB.fetch'ing from url '" + url + "' with options:", opts);
          return [4
          /*yield*/
          , db.fetch(url, opts)];

        case 1:
          res = _c.sent();
          return [3
          /*break*/
          , 6];

        case 2:
          if (!(mode === 'node')) {
            return [3
            /*break*/
            , 4];
          }

          newHeaders = {};
          headers = opts && opts.headers && opts.headers.entries ? opts.headers.entries() : [];

          try {
            for (headers_1 = __values(headers), headers_1_1 = headers_1.next(); !headers_1_1.done; headers_1_1 = headers_1.next()) {
              entry = headers_1_1.value;
              key = entry[0];
              value = entry[1]; // newHeaders.push([key, value]);

              newHeaders[key] = value;
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (headers_1_1 && !headers_1_1.done && (_b = headers_1.return)) {
                _b.call(headers_1);
              }
            } finally {
              if (e_3) {
                throw e_3.error;
              }
            }
          }

          nFetchOpts = pouchdbUtils.assign({}, opts);
          hdrs = new pouchdbFetch.Headers(newHeaders); // let hdrs:Headers = new nHeaders(newHeaders);
          // nFetchOpts.headers = newHeaders;

          nFetchOpts.headers = hdrs; // res = await nFetch(newurl, opts);

          debuglog("doFetch(): Node-Fetch'ing from url '" + newurl + "' with options:", nFetchOpts);
          return [4
          /*yield*/
          , pouchdbFetch.fetch(newurl, nFetchOpts)];

        case 3:
          // res = await fet(newurl, nFetchOpts);
          res = _c.sent();
          return [3
          /*break*/
          , 6];

        case 4:
          debuglog("doFetch(): Global-Fetch'ing from url '" + newurl + "' with options:", opts);
          return [4
          /*yield*/
          , fet(newurl, opts)];

        case 5:
          res = _c.sent();
          _c.label = 6;

        case 6:
          if (fet !== nFetch) {
            debuglog("doFetch(): Response is: ", res);
          } else {
            jsonRes = {
              url: res.url,
              ok: res.ok,
              status: res.status,
              statusText: res.statusText
            };
            debuglog("doFetch(): Response is: ", jsonRes);
          }

          ok = res.ok;
          return [4
          /*yield*/
          , res.json()];

        case 7:
          content = _c.sent(); // if(ok) {
          //   callback(null, content);
          // } else {
          //   content.name = content.error;
          //   callback(content);
          // }
          // return res;

          if (ok) {
            return [2
            /*return*/
            , content];
          } else {
            msg = res && typeof res.statusText === 'string' ? res.statusText : "unknown_error";
            status = res && typeof res.status === 'number' ? res.status : 0;
            err = new AuthError(msg);
            err.status = status;

            if (content) {
              if (typeof content.error === 'string') {
                err.name = content.error;
                err.error = content.error;
              }

              if (typeof content.reason === 'string') {
                err.reason = content.reason;
              }
            } //  else if(msg === 'unknown_error') {
            //   err.name = msg;
            // }
            // content.name = content.error;


            throw err;
          }

          return [3
          /*break*/
          , 9];

        case 8:
          err_1 = _c.sent(); // console.log(`doFetch(): Fetch error:\n`, err);

          if (err_1 && err_1.name === 'unknown_error') {
            err_1.message = (err_1.message + ' ' || '') + 'Unknown error!  Did you remember to enable CORS?';
          }

          debuglog("doFetch(): Error during fetch!");
          debugerr(err_1); // callback(err);

          throw err_1;

        case 9:
          return [2
          /*return*/
          ];
      }
    });
  });
} // import { toPromise              } from 'pouchdb-utils' ;


var getConfigUrl = function getConfigUrl(db, nodeName) {
  return (nodeName ? '/_node/' + nodeName : '') + '/_config';
};

var getMembership = function getMembership(opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, url, ajaxOpts, res, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          db = this;
          options = opts != undefined ? opts : {};
          url = '/_membership';
          ajaxOpts = pouchdbUtils.assign({
            method: 'GET',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent(); // console.log(`getMembership(): DB membership is:\n`, res);

          return [2
          /*return*/
          , res];

        case 2:
          err_1 = _a.sent();
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var signUpAdmin = function signUpAdmin(username, password, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, err, membership, nodeName, err_2, configUrl, url, ajaxOpts, res, err_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 6,, 7]);

          debuglogemph("PouchDB.signUpAdmin(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          } else if (!password) {
            err = new AuthError('You must provide a password');
            throw err;
          }

          membership = void 0;
          nodeName = void 0;
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , db.getMembership(opts)];

        case 2:
          membership = _a.sent(); // This is a CouchDB 2.x server

          nodeName = membership.all_nodes[0];
          return [3
          /*break*/
          , 4];

        case 3:
          err_2 = _a.sent();

          if (err_2.error && err_2.error === 'illegal_database_name') {
            throw err_2;
          } else {
            // This could be a CouchDB 1.x server
            nodeName = undefined;
          }

          return [3
          /*break*/
          , 4];

        case 4:
          configUrl = getConfigUrl(db, nodeName);
          url = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
          ajaxOpts = pouchdbUtils.assign({
            method: 'PUT',
            processData: false,
            headers: getBasicAuthHeaders(db),
            // headers: headers,
            body: '"' + password + '"'
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 5:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 6:
          err_3 = _a.sent();
          throw err_3;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var deleteAdmin = function deleteAdmin(username, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, membership, nodeName, err_4, configUrl, url, headers, ajaxOpts, noAuthAjaxOpts, res, fetchErr_1, err_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 9,, 10]);

          debuglogemph("PouchDB.deleteAdmin(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          }

          membership = void 0;
          nodeName = void 0;
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , db.getMembership(opts)];

        case 2:
          membership = _a.sent(); // This is a CouchDB 2.x server

          nodeName = membership.all_nodes[0];
          return [3
          /*break*/
          , 4];

        case 3:
          err_4 = _a.sent();

          if (err_4.error && err_4.error === 'illegal_database_name') {
            throw err_4;
          } else {
            // This could be a CouchDB 1.x server
            nodeName = undefined;
          }

          return [3
          /*break*/
          , 4];

        case 4:
          configUrl = getConfigUrl(db, nodeName);
          url = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
          headers = getBasicAuthHeaders(db);
          ajaxOpts = pouchdbUtils.assign({
            method: 'DELETE',
            processData: false,
            headers: headers
          }, options.ajax || {});
          noAuthAjaxOpts = pouchdbUtils.assign({}, ajaxOpts);
          delete noAuthAjaxOpts.headers;
          res = void 0;
          _a.label = 5;

        case 5:
          _a.trys.push([5, 7,, 8]);

          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 6:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 7:
          fetchErr_1 = _a.sent();
          debuglogemph("deleteAdmin(): Error deleting administ");
          return [3
          /*break*/
          , 8];

        case 8:
          return [2
          /*return*/
          , res];

        case 9:
          err_5 = _a.sent();
          throw err_5;

        case 10:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var logIn = function logIn(username, password, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, err, url, headers, ajaxOpts, res, auth, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.logIn(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new Error("pouchdb-authentication plugin only works for the http/https adapter");
            throw err;
          }

          if (!username) {
            err = new Error("you must provide a username");
            throw err;
          } else if (!password) {
            err = new Error("you must provide a password");
            throw err;
          }

          url = '/_session';
          headers = getBasicAuthHeadersFor(username, password);
          headers.append('Content-Type', 'application/json');
          ajaxOpts = pouchdbUtils.assign({
            method: 'POST',
            // headers: assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
            headers: headers,
            body: {
              name: username,
              password: password
            }
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();

          if (db && db.__opts) {
            if (db.__opts.auth) {
              db.__opts.auth.username = username;
              db.__opts.auth.password = password;
            } else {
              auth = {
                username: username,
                password: password
              };
              db.__opts.auth = auth;
            }
          }

          return [2
          /*return*/
          , res];

        case 2:
          err_1 = _a.sent();
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var logOut = function logOut(opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, url, ajaxOpts, res, err_2, db, options, url, noAuthAjaxOpts, res, err_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 7]);

          debuglogemph("PouchDB.logOut(): Called");
          db = this;
          options = opts != undefined ? opts : {};
          url = '/_session';
          ajaxOpts = pouchdbUtils.assign({
            method: 'DELETE',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();

          if (db && db.__opts && db.__opts.auth) {
            delete db.__opts.auth;
          }

          return [2
          /*return*/
          , res];

        case 2:
          err_2 = _a.sent();
          _a.label = 3;

        case 3:
          _a.trys.push([3, 5,, 6]);

          debuglog("======> PouchDB.logOut(): Caught error trying to log out");
          debugerr(err_2);
          debuglog("======> PouchDB.logOut(): Retrying without authentication \u2026");
          db = this;
          options = opts != undefined ? opts : {};
          url = '/_session';
          noAuthAjaxOpts = pouchdbUtils.assign({
            method: 'DELETE'
          }, options.ajax || {});
          delete noAuthAjaxOpts.headers;
          return [4
          /*yield*/
          , doFetch(db, url, noAuthAjaxOpts)];

        case 4:
          res = _a.sent();

          if (db && db.__opts && db.__opts.auth) {
            delete db.__opts.auth;
          }

          debuglog("======> PouchDB.logOut(): Successfully logged out after retrying without authentication headers.");
          return [2
          /*return*/
          , res];

        case 5:
          err_3 = _a.sent();
          throw err_3;

        case 6:
          return [3
          /*break*/
          , 7];

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getSession = function getSession() {
  return __awaiter(this, void 0, Promise, function () {
    var db, url, ajaxOpts, res, err_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.getSession(): Called");
          db = this;
          url = '/_session';
          ajaxOpts = {
            method: 'GET',
            headers: getBasicAuthHeaders(db)
          };
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_4 = _a.sent();
          throw err_4;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getUsersDatabaseUrl = function getUsersDatabaseUrl() {
  var db = this;
  var userDBURL = getBaseUrl(db) + '/_users'; // console.log(`getUsersDatabaseUrl(): URL and DB is:\n`, userDBURL);
  // console.log(`getUsersDatabaseUrl(): DB is:`, db);

  return userDBURL;
};

var updateUser = function updateUser(db, user, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var id, options, reservedWords, key, err, url, ajaxOpts, res, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          id = user && typeof user._id === 'string' ? user._id : "UNKNOWN_USER";
          debuglogemph("PouchDB.updateUser(): Called for '" + id + "'");
          options = opts != undefined ? opts : {};
          reservedWords = ['_id', '_rev', 'name', 'type', 'roles', 'password', 'password_scheme', 'iterations', 'derived_key', 'salt'];

          if (opts.metadata) {
            for (key in opts.metadata) {
              if (opts.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
                err = new AuthError('cannot use reserved word in metadata: "' + key + '"');
                throw err;
              }
            }

            user = pouchdbUtils.assign(user, opts.metadata);
          }

          if (opts.roles) {
            user = pouchdbUtils.assign(user, {
              roles: opts.roles
            });
          }

          url = '/_users/' + encodeURIComponent(user._id);
          ajaxOpts = pouchdbUtils.assign({
            method: 'PUT',
            body: user,
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_1 = _a.sent();
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var signUp = function signUp(username, password, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, err, userId, user, res, err_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.signUp(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          } else if (!password) {
            err = new AuthError('You must provide a password');
            throw err;
          }

          userId = 'org.couchdb.user:' + username;
          user = {
            name: username,
            password: password,
            roles: [],
            type: 'user',
            _id: userId
          };
          return [4
          /*yield*/
          , updateUser(db, user, options)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_2 = _a.sent();
          throw err_2;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getUser = function getUser(username, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, url, ajaxOpts, res, err_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.getUser(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (!username) {
            err = new AuthError('you must provide a username');
            throw err;
          }

          url = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
          ajaxOpts = pouchdbUtils.assign({
            method: 'GET',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_3 = _a.sent();
          throw err_3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var putUser = function putUser(username, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, user, res, err_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          debuglogemph("PouchDB.putUser(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          }

          return [4
          /*yield*/
          , db.getUser(username, options)];

        case 1:
          user = _a.sent();
          return [4
          /*yield*/
          , updateUser(db, user, options)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_4 = _a.sent();
          throw err_4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var deleteUser = function deleteUser(username, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, user, url, ajaxOpts, res, err_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          debuglogemph("PouchDB.deleteUser(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          }

          return [4
          /*yield*/
          , db.getUser(username, options)];

        case 1:
          user = _a.sent();
          url = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
          ajaxOpts = pouchdbUtils.assign({
            method: 'DELETE',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_5 = _a.sent();
          throw err_5;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var changePassword = function changePassword(username, password, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db, options, err, err, err, user, url, ajaxOpts, res, err_6;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          debuglogemph("PouchDB.changePassword(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          } else if (!password) {
            err = new AuthError('You must provide a password');
            throw err;
          }

          return [4
          /*yield*/
          , db.getUser(username, options)];

        case 1:
          user = _a.sent();
          user.password = password;
          url = '/_users/' + encodeURIComponent(user._id);
          ajaxOpts = pouchdbUtils.assign({
            method: 'PUT',
            headers: getBasicAuthHeaders(db),
            body: user
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_6 = _a.sent();
          throw err_6;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var changeUsername = function changeUsername(oldUsername, newUsername, opts) {
  return __awaiter(this, void 0, Promise, function () {
    var db_1, options, USERNAME_PREFIX, fetch_1, updateUser_1, err, err, err, res, err, err_7, user, newUser, res, err_8, err_9;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 11,, 12]);

          debuglogemph("PouchDB.changeUsername(): Called for '" + oldUsername + "' => '" + newUsername + "'");
          db_1 = this;
          options = opts != undefined ? opts : {};
          USERNAME_PREFIX = 'org.couchdb.user:';

          fetch_1 = function fetch_1(url, opts) {
            return __awaiter(this, void 0, Promise, function () {
              var options_1, res, err_10;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2,, 3]);

                    options_1 = opts != undefined ? opts : {};
                    return [4
                    /*yield*/
                    , doFetch(db_1, url, options_1)];

                  case 1:
                    res = _a.sent();
                    return [2
                    /*return*/
                    , res];

                  case 2:
                    err_10 = _a.sent();
                    throw err_10;

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          updateUser_1 = function updateUser_1(user, opts) {
            return __awaiter(this, void 0, Promise, function () {
              var options_2, url, updateOpts, res, err_11;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2,, 3]);

                    options_2 = opts != undefined ? opts : {};
                    url = '/_users/' + encodeURIComponent(user._id);
                    updateOpts = pouchdbUtils.assign({
                      method: 'PUT',
                      headers: getBasicAuthHeaders(db_1),
                      body: user
                    }, options_2.ajax || {});
                    return [4
                    /*yield*/
                    , fetch_1(url, updateOpts)];

                  case 1:
                    res = _a.sent();
                    return [2
                    /*return*/
                    , res];

                  case 2:
                    err_11 = _a.sent();
                    throw err_11;

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          options.ajax = options.ajax || {};

          if (['http', 'https'].indexOf(db_1.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          }

          if (!newUsername) {
            err = new AuthError('You must provide a new username');
            throw err;
          }

          if (!oldUsername) {
            err = new AuthError('You must provide a username to rename');
            throw err;
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 10]);

          return [4
          /*yield*/
          , db_1.getUser(newUsername, options)];

        case 2:
          res = _a.sent();
          err = new AuthError('user already exists');
          err.taken = true;
          throw err;

        case 3:
          err_7 = _a.sent();
          _a.label = 4;

        case 4:
          _a.trys.push([4, 8,, 9]);

          return [4
          /*yield*/
          , db_1.getUser(oldUsername, options)];

        case 5:
          user = _a.sent();
          newUser = pouchdbUtils.clone(user);
          delete newUser._rev;
          newUser._id = USERNAME_PREFIX + newUsername;
          newUser.name = newUsername;
          newUser.roles = options.roles || user.roles || [];
          return [4
          /*yield*/
          , updateUser_1(newUser, options)];

        case 6:
          res = _a.sent();
          user._deleted = true;
          return [4
          /*yield*/
          , updateUser_1(user, options)];

        case 7:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 8:
          err_8 = _a.sent();
          throw err_8;

        case 9:
          return [3
          /*break*/
          , 10];

        case 10:
          return [3
          /*break*/
          , 12];

        case 11:
          err_9 = _a.sent();
          throw err_9;

        case 12:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var PouchDBAuthPlugin = {
  login: logIn,
  logIn: logIn,
  logout: logOut,
  logOut: logOut,
  getSession: getSession,
  getMembership: getMembership,
  signUpAdmin: signUpAdmin,
  deleteAdmin: deleteAdmin,
  getUsersDatabaseUrl: getUsersDatabaseUrl,
  signup: signUp,
  signUp: signUp,
  getUser: getUser,
  putUser: putUser,
  deleteUser: deleteUser,
  changePassword: changePassword,
  changeUsername: changeUsername
};
var plugin = PouchDBAuthPlugin; // let var plugin:any = {};
// plugin.login = logIn;
// plugin.logIn = logIn;
// plugin.logout = logOut;
// plugin.logOut = logOut;
// plugin.getSession = getSession;
// plugin.getMembership = getMembership;
// plugin.signUpAdmin = signUpAdmin;
// plugin.deleteAdmin = deleteAdmin;
// plugin.getUsersDatabaseUrl = getUsersDatabaseUrl;
// plugin.signup = signUp;
// plugin.signUp = signUp;
// plugin.getUser = getUser;
// plugin.putUser = putUser;
// plugin.deleteUser = deleteUser;
// plugin.changePassword = changePassword;
// plugin.changeUsername = changeUsername;
// export class PouchDBPlugin {
//   public login = logIn;
//   public logIn = logIn;
//   public logout = logOut;
//   public logOut = logOut;
//   public getSession = getSession;
//   public getMembership = getMembership;
//   public signUpAdmin = signUpAdmin;
//   public deleteAdmin = deleteAdmin;
//   public getUsersDatabaseUrl = getUsersDatabaseUrl;
//   public signup = signUp;
//   public signUp = signUp;
//   public getUser = getUser;
//   public putUser = putUser;
//   public deleteUser = deleteUser;
//   public changePassword = changePassword;
//   public changeUsername = changeUsername;
//   constructor() {
//   }
// }
// // let plugin:any = PouchDBPlugin;
// let plugin:PouchDBPlugin = new PouchDBPlugin();

if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(PouchDBAuthPlugin);
} // export default plugin;
// export plugin;
// export default PouchDBAuthPlugin;


exports.parseUri = pouchdbUtils.parseUri;
exports.default = plugin;
exports.getConfigUrl = getConfigUrl;
exports.getMembership = getMembership;
exports.deleteAdmin = deleteAdmin;
exports.signUpAdmin = signUpAdmin;
exports.logIn = logIn;
exports.logOut = logOut;
exports.getSession = getSession;
exports.getUsersDatabaseUrl = getUsersDatabaseUrl;
exports.signUp = signUp;
exports.getUser = getUser;
exports.putUser = putUser;
exports.deleteUser = deleteUser;
exports.changePassword = changePassword;
exports.changeUsername = changeUsername;
exports.mode = mode;
exports.fet = fet;
exports.nFetch = nFetch;
exports.debuglog = debuglog;
exports.debuglogemph = debuglogemph;
exports.debugloggroup = debugloggroup;
exports.debugloggroupend = debugloggroupend;
exports.debugerr = debugerr;
exports.AuthError = AuthError;
exports.doFetch = doFetch;
exports.getBasicAuthHeadersFor = getBasicAuthHeadersFor;
exports.getBasicAuthHeaders = getBasicAuthHeaders;
exports.getBaseUrl = getBaseUrl;
exports.getComplexBaseUrl = getComplexBaseUrl;
exports.getRelativeComplexUrl = getRelativeComplexUrl;
exports.makeBaseUrl = makeBaseUrl;
exports.getURLWithoutSearchParams = getURLWithoutSearchParams;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"13":13,"16":16,"6":6,"9":9}],2:[function(require,module,exports){
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;

    if (len) {
      var args = [];
      var i = -1;

      while (++i < len) {
        args[i] = arguments[i];
      }

      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}

},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var objectCreate = Object.create || objectCreatePolyfill;
var objectKeys = Object.keys || objectKeysPolyfill;
var bind = Function.prototype.bind || functionBindPolyfill;

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;
var hasDefineProperty;

try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', {
    value: 0
  });
  hasDefineProperty = o.x === 0;
} catch (err) {
  hasDefineProperty = false;
}

if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function get() {
      return defaultMaxListeners;
    },
    set: function set(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg) throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
} // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
}; // These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.


function emitNone(handler, isFn, self) {
  if (isFn) handler.call(self);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self);
    }
  }
}

function emitOne(handler, isFn, self, arg1) {
  if (isFn) handler.call(self, arg1);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1);
    }
  }
}

function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn) handler.call(self, arg1, arg2);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2);
    }
  }
}

function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn) handler.call(self, arg1, arg2, arg3);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2, arg3);
    }
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn) handler.apply(self, args);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].apply(self, args);
    }
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = type === 'error';
  events = this._events;
  if (events) doError = doError && events.error == null;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    if (arguments.length > 1) er = arguments[1];

    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }

    return false;
  }

  handler = events[type];
  if (!handler) return false;
  var isFn = typeof handler === 'function';
  len = arguments.length;

  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;

    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;

    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;

    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower

    default:
      args = new Array(len - 1);

      for (i = 1; i < len; i++) {
        args[i - 1] = arguments[i];
      }

      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = target._events;

  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    } // Check for listener leak


    if (!existing.warned) {
      m = $getMaxListeners(target);

      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' "' + String(type) + '" listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;

        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;

    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);

      case 1:
        return this.listener.call(this.target, arguments[0]);

      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);

      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);

      default:
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = this._events;
  if (!events) return this;
  list = events[type];
  if (!list) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = objectCreate(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else spliceOne(list, position);
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (!events) return this; // not listening for removeListener, no need to emit

  if (!events.removeListener) {
    if (arguments.length === 0) {
      this._events = objectCreate(null);
      this._eventsCount = 0;
    } else if (events[type]) {
      if (--this._eventsCount === 0) this._events = objectCreate(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = objectKeys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = objectCreate(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (!events) return [];
  var evlistener = events[type];
  if (!evlistener) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
}; // About 1.5x faster than the two-arg version of Array#splice().


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }

  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function F() {};

  F.prototype = proto;
  return new F();
}

function objectKeysPolyfill(obj) {
  var keys = [];

  for (var k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      keys.push(k);
    }
  }

  return k;
}

function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var Mutation = global.MutationObserver || global.WebKitMutationObserver;
var scheduleDrain;
{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });

    scheduleDrain = function scheduleDrain() {
      element.data = called = ++called % 2;
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;

    scheduleDrain = function scheduleDrain() {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function scheduleDrain() {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');

      scriptEl.onreadystatechange = function () {
        nextTick();
        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };

      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function scheduleDrain() {
      setTimeout(nextTick, 0);
    };
  }
}
var draining;
var queue = []; //named nextTick for less confusing stack traces

function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;

  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;

    while (++i < len) {
      oldQueue[i]();
    }

    len = queue.length;
  }

  draining = false;
}

module.exports = immediate;

function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
"use strict";

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var thisAtob = function thisAtob(str) {
  return atob(str);
};

var thisBtoa = function thisBtoa(str) {
  return btoa(str);
}; // Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).


function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};

  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }

    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();

    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }

    return builder.getBlob(properties.type);
  }
} // From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)


function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);

  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }

  return buf;
}

function binStringToBluffer(binString, type) {
  return createBlob([binaryStringToArrayBuffer(binString)], {
    type: type
  });
}

function b64ToBluffer(b64, type) {
  return binStringToBluffer(thisAtob(b64), type);
} //Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers


function arrayBufferToBinaryString(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;

  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return binary;
} // shim for browsers that don't support it


function readAsBinaryString(blob, callback) {
  var reader = new FileReader();
  var hasBinaryString = typeof reader.readAsBinaryString === 'function';

  reader.onloadend = function (e) {
    var result = e.target.result || '';

    if (hasBinaryString) {
      return callback(result);
    }

    callback(arrayBufferToBinaryString(result));
  };

  if (hasBinaryString) {
    reader.readAsBinaryString(blob);
  } else {
    reader.readAsArrayBuffer(blob);
  }
}

function blobToBinaryString(blobOrBuffer, callback) {
  readAsBinaryString(blobOrBuffer, function (bin) {
    callback(bin);
  });
}

function blobToBase64(blobOrBuffer, callback) {
  blobToBinaryString(blobOrBuffer, function (base64) {
    callback(thisBtoa(base64));
  });
} // simplified API. universal browser support is assumed


function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();

  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };

  reader.readAsArrayBuffer(blob);
} // this is not used in the browser


function typedBuffer() {}

exports.atob = thisAtob;
exports.btoa = thisBtoa;
exports.base64StringToBlobOrBuffer = b64ToBluffer;
exports.binaryStringToArrayBuffer = binaryStringToArrayBuffer;
exports.binaryStringToBlobOrBuffer = binStringToBluffer;
exports.blob = createBlob;
exports.blobOrBufferToBase64 = blobToBase64;
exports.blobOrBufferToBinaryString = blobToBinaryString;
exports.readAsArrayBuffer = readAsArrayBuffer;
exports.readAsBinaryString = readAsBinaryString;
exports.typedBuffer = typedBuffer;

},{}],7:[function(require,module,exports){
'use strict';

var pouchdbUtils = require(16);

var pouchdbErrors = require(8);

var pouchdbSelectorCore = require(14);

function evalFilter(input) {
  return pouchdbUtils.scopeEval('"use strict";\nreturn ' + input + ';', {});
}

function evalView(input) {
  var code = ['return function(doc) {', '  "use strict";', '  var emitted = false;', '  var emit = function (a, b) {', '    emitted = true;', '  };', '  var view = ' + input + ';', '  view(doc);', '  if (emitted) {', '    return true;', '  }', '};'].join('\n');
  return pouchdbUtils.scopeEval(code, {});
}

function validate(opts, callback) {
  if (opts.selector) {
    if (opts.filter && opts.filter !== '_selector') {
      var filterName = typeof opts.filter === 'string' ? opts.filter : 'function';
      return callback(new Error('selector invalid for filter "' + filterName + '"'));
    }
  }

  callback();
}

function normalize(opts) {
  if (opts.view && !opts.filter) {
    opts.filter = '_view';
  }

  if (opts.selector && !opts.filter) {
    opts.filter = '_selector';
  }

  if (opts.filter && typeof opts.filter === 'string') {
    if (opts.filter === '_view') {
      opts.view = pouchdbUtils.normalizeDdocFunctionName(opts.view);
    } else {
      opts.filter = pouchdbUtils.normalizeDdocFunctionName(opts.filter);
    }
  }
}

function shouldFilter(changesHandler, opts) {
  return opts.filter && typeof opts.filter === 'string' && !opts.doc_ids && !pouchdbUtils.isRemote(changesHandler.db);
}

function filter(changesHandler, opts) {
  var callback = opts.complete;

  if (opts.filter === '_view') {
    if (!opts.view || typeof opts.view !== 'string') {
      var err = pouchdbErrors.createError(pouchdbErrors.BAD_REQUEST, '`view` filter parameter not found or invalid.');
      return callback(err);
    } // fetch a view from a design doc, make it behave like a filter


    var viewName = pouchdbUtils.parseDdocFunctionName(opts.view);
    changesHandler.db.get('_design/' + viewName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(pouchdbErrors.generateErrorFromResponse(err));
      }

      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] && ddoc.views[viewName[1]].map;

      if (!mapFun) {
        return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC, ddoc.views ? 'missing json key: ' + viewName[1] : 'missing json key: views'));
      }

      opts.filter = evalView(mapFun);
      changesHandler.doChanges(opts);
    });
  } else if (opts.selector) {
    opts.filter = function (doc) {
      return pouchdbSelectorCore.matchesSelector(doc, opts.selector);
    };

    changesHandler.doChanges(opts);
  } else {
    // fetch a filter from a design doc
    var filterName = pouchdbUtils.parseDdocFunctionName(opts.filter);
    changesHandler.db.get('_design/' + filterName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(pouchdbErrors.generateErrorFromResponse(err));
      }

      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];

      if (!filterFun) {
        return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC, ddoc && ddoc.filters ? 'missing json key: ' + filterName[1] : 'missing json key: filters'));
      }

      opts.filter = evalFilter(filterFun);
      changesHandler.doChanges(opts);
    });
  }
}

function applyChangesFilterPlugin(PouchDB) {
  PouchDB._changesFilterPlugin = {
    validate: validate,
    normalize: normalize,
    shouldFilter: shouldFilter,
    filter: filter
  };
}

module.exports = applyChangesFilterPlugin;

},{"14":14,"16":16,"8":8}],8:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var inherits = _interopDefault(require(5));

inherits(PouchError, Error);

function PouchError(status, error, reason) {
  Error.call(this, reason);
  this.status = status;
  this.name = error;
  this.message = reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.

    /* jshint ignore:start */
    for (var p in error) {
      if (typeof error[p] !== 'function') {
        this[p] = error[p];
      }
    }
    /* jshint ignore:end */


    if (reason !== undefined) {
      this.reason = reason;
    }
  }

  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function generateErrorFromResponse(err) {
  if (_typeof(err) !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}

exports.UNAUTHORIZED = UNAUTHORIZED;
exports.MISSING_BULK_DOCS = MISSING_BULK_DOCS;
exports.MISSING_DOC = MISSING_DOC;
exports.REV_CONFLICT = REV_CONFLICT;
exports.INVALID_ID = INVALID_ID;
exports.MISSING_ID = MISSING_ID;
exports.RESERVED_ID = RESERVED_ID;
exports.NOT_OPEN = NOT_OPEN;
exports.UNKNOWN_ERROR = UNKNOWN_ERROR;
exports.BAD_ARG = BAD_ARG;
exports.INVALID_REQUEST = INVALID_REQUEST;
exports.QUERY_PARSE_ERROR = QUERY_PARSE_ERROR;
exports.DOC_VALIDATION = DOC_VALIDATION;
exports.BAD_REQUEST = BAD_REQUEST;
exports.NOT_AN_OBJECT = NOT_AN_OBJECT;
exports.DB_MISSING = DB_MISSING;
exports.WSQ_ERROR = WSQ_ERROR;
exports.LDB_ERROR = LDB_ERROR;
exports.FORBIDDEN = FORBIDDEN;
exports.INVALID_REV = INVALID_REV;
exports.FILE_EXISTS = FILE_EXISTS;
exports.MISSING_STUB = MISSING_STUB;
exports.IDB_ERROR = IDB_ERROR;
exports.INVALID_URL = INVALID_URL;
exports.createError = createError;
exports.generateErrorFromResponse = generateErrorFromResponse;

},{"5":5}],9:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var getArguments = _interopDefault(require(2));

var pouchdbUtils = require(16);

var pouchdbMerge = require(12);

var inherits = _interopDefault(require(5));

var events = require(3);

var pouchdbCollections = require(10);

var pouchdbErrors = require(11);

var pouchdbFetch = require(13);

var pouchChangesFilter = _interopDefault(require(7));

inherits(Changes, events.EventEmitter);

function tryCatchInChangeListener(self, change, pending, lastSeq) {
  // isolate try/catches to avoid V8 deoptimizations
  try {
    self.emit('change', change, pending, lastSeq);
  } catch (e) {
    pouchdbUtils.guardedConsole('error', 'Error in .on("change", function):', e);
  }
}

function Changes(db, opts, callback) {
  events.EventEmitter.call(this);
  var self = this;
  this.db = db;
  opts = opts ? pouchdbUtils.clone(opts) : {};
  var complete = opts.complete = pouchdbUtils.once(function (err, resp) {
    if (err) {
      if (pouchdbUtils.listenerCount(self, 'error') > 0) {
        self.emit('error', err);
      }
    } else {
      self.emit('complete', resp);
    }

    self.removeAllListeners();
    db.removeListener('destroyed', onDestroy);
  });

  if (callback) {
    self.on('complete', function (resp) {
      callback(null, resp);
    });
    self.on('error', callback);
  }

  function onDestroy() {
    self.cancel();
  }

  db.once('destroyed', onDestroy);

  opts.onChange = function (change, pending, lastSeq) {
    /* istanbul ignore if */
    if (self.isCancelled) {
      return;
    }

    tryCatchInChangeListener(self, change, pending, lastSeq);
  };

  var promise = new Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });
  self.once('cancel', function () {
    db.removeListener('destroyed', onDestroy);
    opts.complete(null, {
      status: 'cancelled'
    });
  });
  this.then = promise.then.bind(promise);
  this['catch'] = promise['catch'].bind(promise);
  this.then(function (result) {
    complete(null, result);
  }, complete);

  if (!db.taskqueue.isReady) {
    db.taskqueue.addTask(function (failed) {
      if (failed) {
        opts.complete(failed);
      } else if (self.isCancelled) {
        self.emit('cancel');
      } else {
        self.validateChanges(opts);
      }
    });
  } else {
    self.validateChanges(opts);
  }
}

Changes.prototype.cancel = function () {
  this.isCancelled = true;

  if (this.db.taskqueue.isReady) {
    this.emit('cancel');
  }
};

function processChange(doc, metadata, opts) {
  var changeList = [{
    rev: doc._rev
  }];

  if (opts.style === 'all_docs') {
    changeList = pouchdbMerge.collectLeaves(metadata.rev_tree).map(function (x) {
      return {
        rev: x.rev
      };
    });
  }

  var change = {
    id: metadata.id,
    changes: changeList,
    doc: doc
  };

  if (pouchdbMerge.isDeleted(metadata, doc._rev)) {
    change.deleted = true;
  }

  if (opts.conflicts) {
    change.doc._conflicts = pouchdbMerge.collectConflicts(metadata);

    if (!change.doc._conflicts.length) {
      delete change.doc._conflicts;
    }
  }

  return change;
}

Changes.prototype.validateChanges = function (opts) {
  var callback = opts.complete;
  var self = this;
  /* istanbul ignore else */

  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.validate(opts, function (err) {
      if (err) {
        return callback(err);
      }

      self.doChanges(opts);
    });
  } else {
    self.doChanges(opts);
  }
};

Changes.prototype.doChanges = function (opts) {
  var self = this;
  var callback = opts.complete;
  opts = pouchdbUtils.clone(opts);

  if ('live' in opts && !('continuous' in opts)) {
    opts.continuous = opts.live;
  }

  opts.processChange = processChange;

  if (opts.since === 'latest') {
    opts.since = 'now';
  }

  if (!opts.since) {
    opts.since = 0;
  }

  if (opts.since === 'now') {
    this.db.info().then(function (info) {
      /* istanbul ignore if */
      if (self.isCancelled) {
        callback(null, {
          status: 'cancelled'
        });
        return;
      }

      opts.since = info.update_seq;
      self.doChanges(opts);
    }, callback);
    return;
  }
  /* istanbul ignore else */


  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.normalize(opts);

    if (PouchDB._changesFilterPlugin.shouldFilter(this, opts)) {
      return PouchDB._changesFilterPlugin.filter(this, opts);
    }
  } else {
    ['doc_ids', 'filter', 'selector', 'view'].forEach(function (key) {
      if (key in opts) {
        pouchdbUtils.guardedConsole('warn', 'The "' + key + '" option was passed in to changes/replicate, ' + 'but pouchdb-changes-filter plugin is not installed, so it ' + 'was ignored. Please install the plugin to enable filtering.');
      }
    });
  }

  if (!('descending' in opts)) {
    opts.descending = false;
  } // 0 and 1 should return 1 document


  opts.limit = opts.limit === 0 ? 1 : opts.limit;
  opts.complete = callback;

  var newPromise = this.db._changes(opts);
  /* istanbul ignore else */


  if (newPromise && typeof newPromise.cancel === 'function') {
    var cancel = self.cancel;
    self.cancel = getArguments(function (args) {
      newPromise.cancel();
      cancel.apply(this, args);
    });
  }
};
/*
 * A generic pouch adapter
 */


function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error


function yankError(callback, docId) {
  return function (err, results) {
    if (err || results[0] && results[0].error) {
      err = err || results[0];
      err.docId = docId;
      callback(err);
    } else {
      callback(null, results.length ? results[0] : results);
    }
  };
} // clean docs given to us by the user


function cleanDocs(docs) {
  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];

    if (doc._deleted) {
      delete doc._attachments; // ignore atts for deleted docs
    } else if (doc._attachments) {
      // filter out extraneous keys from _attachments
      var atts = Object.keys(doc._attachments);

      for (var j = 0; j < atts.length; j++) {
        var att = atts[j];
        doc._attachments[att] = pouchdbUtils.pick(doc._attachments[att], ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
      }
    }
  }
} // compare two docs, first by _id then by _rev


function compareByIdThenRev(a, b) {
  var idCompare = compare(a._id, b._id);

  if (idCompare !== 0) {
    return idCompare;
  }

  var aStart = a._revisions ? a._revisions.start : 0;
  var bStart = b._revisions ? b._revisions.start : 0;
  return compare(aStart, bStart);
} // for every node in a revision tree computes its distance from the closest
// leaf


function computeHeight(revs) {
  var height = {};
  var edges = [];
  pouchdbMerge.traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
    var rev = pos + "-" + id;

    if (isLeaf) {
      height[rev] = 0;
    }

    if (prnt !== undefined) {
      edges.push({
        from: prnt,
        to: rev
      });
    }

    return rev;
  });
  edges.reverse();
  edges.forEach(function (edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

function allDocsKeysParse(opts) {
  var keys = 'limit' in opts ? opts.keys.slice(opts.skip, opts.limit + opts.skip) : opts.skip > 0 ? opts.keys.slice(opts.skip) : opts.keys;
  opts.keys = keys;
  opts.skip = 0;
  delete opts.limit;

  if (opts.descending) {
    keys.reverse();
    opts.descending = false;
  }
} // all compaction is done in a queue, to avoid attaching
// too many listeners at once


function doNextCompaction(self) {
  var task = self._compactionQueue[0];
  var opts = task.opts;
  var callback = task.callback;
  self.get('_local/compaction').catch(function () {
    return false;
  }).then(function (doc) {
    if (doc && doc.last_seq) {
      opts.last_seq = doc.last_seq;
    }

    self._compact(opts, function (err, res) {
      /* istanbul ignore if */
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }

      pouchdbUtils.nextTick(function () {
        self._compactionQueue.shift();

        if (self._compactionQueue.length) {
          doNextCompaction(self);
        }
      });
    });
  });
}

function attachmentNameError(name) {
  if (name.charAt(0) === '_') {
    return name + ' is not a valid attachment name, attachment ' + 'names cannot start with \'_\'';
  }

  return false;
}

inherits(AbstractPouchDB, events.EventEmitter);

function AbstractPouchDB() {
  events.EventEmitter.call(this); // re-bind prototyped methods

  for (var p in AbstractPouchDB.prototype) {
    if (typeof this[p] === 'function') {
      this[p] = this[p].bind(this);
    }
  }
}

AbstractPouchDB.prototype.post = pouchdbUtils.adapterFun('post', function (doc, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (_typeof(doc) !== 'object' || Array.isArray(doc)) {
    return callback(pouchdbErrors.createError(pouchdbErrors.NOT_AN_OBJECT));
  }

  this.bulkDocs({
    docs: [doc]
  }, opts, yankError(callback, doc._id));
});
AbstractPouchDB.prototype.put = pouchdbUtils.adapterFun('put', function (doc, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (_typeof(doc) !== 'object' || Array.isArray(doc)) {
    return cb(pouchdbErrors.createError(pouchdbErrors.NOT_AN_OBJECT));
  }

  pouchdbUtils.invalidIdError(doc._id);

  if (pouchdbMerge.isLocalId(doc._id) && typeof this._putLocal === 'function') {
    if (doc._deleted) {
      return this._removeLocal(doc, cb);
    } else {
      return this._putLocal(doc, cb);
    }
  }

  var self = this;

  if (opts.force && doc._rev) {
    transformForceOptionToNewEditsOption();
    putDoc(function (err) {
      var result = err ? null : {
        ok: true,
        id: doc._id,
        rev: doc._rev
      };
      cb(err, result);
    });
  } else {
    putDoc(cb);
  }

  function transformForceOptionToNewEditsOption() {
    var parts = doc._rev.split('-');

    var oldRevId = parts[1];
    var oldRevNum = parseInt(parts[0], 10);
    var newRevNum = oldRevNum + 1;
    var newRevId = pouchdbUtils.rev();
    doc._revisions = {
      start: newRevNum,
      ids: [newRevId, oldRevId]
    };
    doc._rev = newRevNum + '-' + newRevId;
    opts.new_edits = false;
  }

  function putDoc(next) {
    if (typeof self._put === 'function' && opts.new_edits !== false) {
      self._put(doc, opts, next);
    } else {
      self.bulkDocs({
        docs: [doc]
      }, opts, yankError(next, doc._id));
    }
  }
});
AbstractPouchDB.prototype.putAttachment = pouchdbUtils.adapterFun('putAttachment', function (docId, attachmentId, rev, blob, type) {
  var api = this;

  if (typeof type === 'function') {
    type = blob;
    blob = rev;
    rev = null;
  } // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267

  /* istanbul ignore if */


  if (typeof type === 'undefined') {
    type = blob;
    blob = rev;
    rev = null;
  }

  if (!type) {
    pouchdbUtils.guardedConsole('warn', 'Attachment', attachmentId, 'on document', docId, 'is missing content_type');
  }

  function createAttachment(doc) {
    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
    doc._attachments = doc._attachments || {};
    doc._attachments[attachmentId] = {
      content_type: type,
      data: blob,
      revpos: ++prevrevpos
    };
    return api.put(doc);
  }

  return api.get(docId).then(function (doc) {
    if (doc._rev !== rev) {
      throw pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT);
    }

    return createAttachment(doc);
  }, function (err) {
    // create new doc

    /* istanbul ignore else */
    if (err.reason === pouchdbErrors.MISSING_DOC.message) {
      return createAttachment({
        _id: docId
      });
    } else {
      throw err;
    }
  });
});
AbstractPouchDB.prototype.removeAttachment = pouchdbUtils.adapterFun('removeAttachment', function (docId, attachmentId, rev, callback) {
  var self = this;
  self.get(docId, function (err, obj) {
    /* istanbul ignore if */
    if (err) {
      callback(err);
      return;
    }

    if (obj._rev !== rev) {
      callback(pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT));
      return;
    }
    /* istanbul ignore if */


    if (!obj._attachments) {
      return callback();
    }

    delete obj._attachments[attachmentId];

    if (Object.keys(obj._attachments).length === 0) {
      delete obj._attachments;
    }

    self.put(obj, callback);
  });
});
AbstractPouchDB.prototype.remove = pouchdbUtils.adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
  var doc;

  if (typeof optsOrRev === 'string') {
    // id, rev, opts, callback style
    doc = {
      _id: docOrId,
      _rev: optsOrRev
    };

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
  } else {
    // doc, opts, callback style
    doc = docOrId;

    if (typeof optsOrRev === 'function') {
      callback = optsOrRev;
      opts = {};
    } else {
      callback = opts;
      opts = optsOrRev;
    }
  }

  opts = opts || {};
  opts.was_delete = true;
  var newDoc = {
    _id: doc._id,
    _rev: doc._rev || opts.rev
  };
  newDoc._deleted = true;

  if (pouchdbMerge.isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
    return this._removeLocal(doc, callback);
  }

  this.bulkDocs({
    docs: [newDoc]
  }, opts, yankError(callback, newDoc._id));
});
AbstractPouchDB.prototype.revsDiff = pouchdbUtils.adapterFun('revsDiff', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var ids = Object.keys(req);

  if (!ids.length) {
    return callback(null, {});
  }

  var count = 0;
  var missing = new pouchdbCollections.Map();

  function addToMissing(id, revId) {
    if (!missing.has(id)) {
      missing.set(id, {
        missing: []
      });
    }

    missing.get(id).missing.push(revId);
  }

  function processDoc(id, rev_tree) {
    // Is this fast enough? Maybe we should switch to a set simulated by a map
    var missingForId = req[id].slice(0);
    pouchdbMerge.traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;
      var idx = missingForId.indexOf(rev);

      if (idx === -1) {
        return;
      }

      missingForId.splice(idx, 1);
      /* istanbul ignore if */

      if (opts.status !== 'available') {
        addToMissing(id, rev);
      }
    }); // Traversing the tree is synchronous, so now `missingForId` contains
    // revisions that were not found in the tree

    missingForId.forEach(function (rev) {
      addToMissing(id, rev);
    });
  }

  ids.map(function (id) {
    this._getRevisionTree(id, function (err, rev_tree) {
      if (err && err.status === 404 && err.message === 'missing') {
        missing.set(id, {
          missing: req[id]
        });
      } else if (err) {
        /* istanbul ignore next */
        return callback(err);
      } else {
        processDoc(id, rev_tree);
      }

      if (++count === ids.length) {
        // convert LazyMap to object
        var missingObj = {};
        missing.forEach(function (value, key) {
          missingObj[key] = value;
        });
        return callback(null, missingObj);
      }
    });
  }, this);
}); // _bulk_get API for faster replication, as described in
// https://github.com/apache/couchdb-chttpd/pull/33
// At the "abstract" level, it will just run multiple get()s in
// parallel, because this isn't much of a performance cost
// for local databases (except the cost of multiple transactions, which is
// small). The http adapter overrides this in order
// to do a more efficient single HTTP request.

AbstractPouchDB.prototype.bulkGet = pouchdbUtils.adapterFun('bulkGet', function (opts, callback) {
  pouchdbUtils.bulkGetShim(this, opts, callback);
}); // compact one document and fire callback
// by compacting we mean removing all revisions which
// are further from the leaf in revision tree than max_height

AbstractPouchDB.prototype.compactDocument = pouchdbUtils.adapterFun('compactDocument', function (docId, maxHeight, callback) {
  var self = this;

  this._getRevisionTree(docId, function (err, revTree) {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    var height = computeHeight(revTree);
    var candidates = [];
    var revs = [];
    Object.keys(height).forEach(function (rev) {
      if (height[rev] > maxHeight) {
        candidates.push(rev);
      }
    });
    pouchdbMerge.traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;

      if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
        revs.push(rev);
      }
    });

    self._doCompaction(docId, revs, callback);
  });
}); // compact the whole database using single document
// compaction

AbstractPouchDB.prototype.compact = pouchdbUtils.adapterFun('compact', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  opts = opts || {};
  self._compactionQueue = self._compactionQueue || [];

  self._compactionQueue.push({
    opts: opts,
    callback: callback
  });

  if (self._compactionQueue.length === 1) {
    doNextCompaction(self);
  }
});

AbstractPouchDB.prototype._compact = function (opts, callback) {
  var self = this;
  var changesOpts = {
    return_docs: false,
    last_seq: opts.last_seq || 0
  };
  var promises = [];

  function onChange(row) {
    promises.push(self.compactDocument(row.id, 0));
  }

  function onComplete(resp) {
    var lastSeq = resp.last_seq;
    Promise.all(promises).then(function () {
      return pouchdbUtils.upsert(self, '_local/compaction', function deltaFunc(doc) {
        if (!doc.last_seq || doc.last_seq < lastSeq) {
          doc.last_seq = lastSeq;
          return doc;
        }

        return false; // somebody else got here first, don't update
      });
    }).then(function () {
      callback(null, {
        ok: true
      });
    }).catch(callback);
  }

  self.changes(changesOpts).on('change', onChange).on('complete', onComplete).on('error', callback);
};
/* Begin api wrappers. Specific functionality to storage belongs in the
   _[method] */


AbstractPouchDB.prototype.get = pouchdbUtils.adapterFun('get', function (id, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (typeof id !== 'string') {
    return cb(pouchdbErrors.createError(pouchdbErrors.INVALID_ID));
  }

  if (pouchdbMerge.isLocalId(id) && typeof this._getLocal === 'function') {
    return this._getLocal(id, cb);
  }

  var leaves = [],
      self = this;

  function finishOpenRevs() {
    var result = [];
    var count = leaves.length;
    /* istanbul ignore if */

    if (!count) {
      return cb(null, result);
    } // order with open_revs is unspecified


    leaves.forEach(function (leaf) {
      self.get(id, {
        rev: leaf,
        revs: opts.revs,
        latest: opts.latest,
        attachments: opts.attachments,
        binary: opts.binary
      }, function (err, doc) {
        if (!err) {
          // using latest=true can produce duplicates
          var existing;

          for (var i = 0, l = result.length; i < l; i++) {
            if (result[i].ok && result[i].ok._rev === doc._rev) {
              existing = true;
              break;
            }
          }

          if (!existing) {
            result.push({
              ok: doc
            });
          }
        } else {
          result.push({
            missing: leaf
          });
        }

        count--;

        if (!count) {
          cb(null, result);
        }
      });
    });
  }

  if (opts.open_revs) {
    if (opts.open_revs === "all") {
      this._getRevisionTree(id, function (err, rev_tree) {
        /* istanbul ignore if */
        if (err) {
          return cb(err);
        }

        leaves = pouchdbMerge.collectLeaves(rev_tree).map(function (leaf) {
          return leaf.rev;
        });
        finishOpenRevs();
      });
    } else {
      if (Array.isArray(opts.open_revs)) {
        leaves = opts.open_revs;

        for (var i = 0; i < leaves.length; i++) {
          var l = leaves[i]; // looks like it's the only thing couchdb checks

          if (!(typeof l === "string" && /^\d+-/.test(l))) {
            return cb(pouchdbErrors.createError(pouchdbErrors.INVALID_REV));
          }
        }

        finishOpenRevs();
      } else {
        return cb(pouchdbErrors.createError(pouchdbErrors.UNKNOWN_ERROR, 'function_clause'));
      }
    }

    return; // open_revs does not like other options
  }

  return this._get(id, opts, function (err, result) {
    if (err) {
      err.docId = id;
      return cb(err);
    }

    var doc = result.doc;
    var metadata = result.metadata;
    var ctx = result.ctx;

    if (opts.conflicts) {
      var conflicts = pouchdbMerge.collectConflicts(metadata);

      if (conflicts.length) {
        doc._conflicts = conflicts;
      }
    }

    if (pouchdbMerge.isDeleted(metadata, doc._rev)) {
      doc._deleted = true;
    }

    if (opts.revs || opts.revs_info) {
      var splittedRev = doc._rev.split('-');

      var revNo = parseInt(splittedRev[0], 10);
      var revHash = splittedRev[1];
      var paths = pouchdbMerge.rootToLeaf(metadata.rev_tree);
      var path = null;

      for (var i = 0; i < paths.length; i++) {
        var currentPath = paths[i];
        var hashIndex = currentPath.ids.map(function (x) {
          return x.id;
        }).indexOf(revHash);
        var hashFoundAtRevPos = hashIndex === revNo - 1;

        if (hashFoundAtRevPos || !path && hashIndex !== -1) {
          path = currentPath;
        }
      }

      var indexOfRev = path.ids.map(function (x) {
        return x.id;
      }).indexOf(doc._rev.split('-')[1]) + 1;
      var howMany = path.ids.length - indexOfRev;
      path.ids.splice(indexOfRev, howMany);
      path.ids.reverse();

      if (opts.revs) {
        doc._revisions = {
          start: path.pos + path.ids.length - 1,
          ids: path.ids.map(function (rev) {
            return rev.id;
          })
        };
      }

      if (opts.revs_info) {
        var pos = path.pos + path.ids.length;
        doc._revs_info = path.ids.map(function (rev) {
          pos--;
          return {
            rev: pos + '-' + rev.id,
            status: rev.opts.status
          };
        });
      }
    }

    if (opts.attachments && doc._attachments) {
      var attachments = doc._attachments;
      var count = Object.keys(attachments).length;

      if (count === 0) {
        return cb(null, doc);
      }

      Object.keys(attachments).forEach(function (key) {
        this._getAttachment(doc._id, key, attachments[key], {
          // Previously the revision handling was done in adapter.js
          // getAttachment, however since idb-next doesnt we need to
          // pass the rev through
          rev: doc._rev,
          binary: opts.binary,
          ctx: ctx
        }, function (err, data) {
          var att = doc._attachments[key];
          att.data = data;
          delete att.stub;
          delete att.length;

          if (! --count) {
            cb(null, doc);
          }
        });
      }, self);
    } else {
      if (doc._attachments) {
        for (var key in doc._attachments) {
          /* istanbul ignore else */
          if (doc._attachments.hasOwnProperty(key)) {
            doc._attachments[key].stub = true;
          }
        }
      }

      cb(null, doc);
    }
  });
}); // TODO: I dont like this, it forces an extra read for every
// attachment read and enforces a confusing api between
// adapter.js and the adapter implementation

AbstractPouchDB.prototype.getAttachment = pouchdbUtils.adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
  var self = this;

  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }

  this._get(docId, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
      opts.ctx = res.ctx;
      opts.binary = true;

      self._getAttachment(docId, attachmentId, res.doc._attachments[attachmentId], opts, callback);
    } else {
      return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC));
    }
  });
});
AbstractPouchDB.prototype.allDocs = pouchdbUtils.adapterFun('allDocs', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;

  if (opts.start_key) {
    opts.startkey = opts.start_key;
  }

  if (opts.end_key) {
    opts.endkey = opts.end_key;
  }

  if ('keys' in opts) {
    if (!Array.isArray(opts.keys)) {
      return callback(new TypeError('options.keys must be an array'));
    }

    var incompatibleOpt = ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
      return incompatibleOpt in opts;
    })[0];

    if (incompatibleOpt) {
      callback(pouchdbErrors.createError(pouchdbErrors.QUERY_PARSE_ERROR, 'Query parameter `' + incompatibleOpt + '` is not compatible with multi-get'));
      return;
    }

    if (!pouchdbUtils.isRemote(this)) {
      allDocsKeysParse(opts);

      if (opts.keys.length === 0) {
        return this._allDocs({
          limit: 0
        }, callback);
      }
    }
  }

  return this._allDocs(opts, callback);
});

AbstractPouchDB.prototype.changes = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {}; // By default set return_docs to false if the caller has opts.live = true,
  // this will prevent us from collecting the set of changes indefinitely
  // resulting in growing memory

  opts.return_docs = 'return_docs' in opts ? opts.return_docs : !opts.live;
  return new Changes(this, opts, callback);
};

AbstractPouchDB.prototype.close = pouchdbUtils.adapterFun('close', function (callback) {
  this._closed = true;
  this.emit('closed');
  return this._close(callback);
});
AbstractPouchDB.prototype.info = pouchdbUtils.adapterFun('info', function (callback) {
  var self = this;

  this._info(function (err, info) {
    if (err) {
      return callback(err);
    } // assume we know better than the adapter, unless it informs us


    info.db_name = info.db_name || self.name;
    info.auto_compaction = !!(self.auto_compaction && !pouchdbUtils.isRemote(self));
    info.adapter = self.adapter;
    callback(null, info);
  });
});
AbstractPouchDB.prototype.id = pouchdbUtils.adapterFun('id', function (callback) {
  return this._id(callback);
});
/* istanbul ignore next */

AbstractPouchDB.prototype.type = function () {
  return typeof this._type === 'function' ? this._type() : this.adapter;
};

AbstractPouchDB.prototype.bulkDocs = pouchdbUtils.adapterFun('bulkDocs', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {};

  if (Array.isArray(req)) {
    req = {
      docs: req
    };
  }

  if (!req || !req.docs || !Array.isArray(req.docs)) {
    return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_BULK_DOCS));
  }

  for (var i = 0; i < req.docs.length; ++i) {
    if (_typeof(req.docs[i]) !== 'object' || Array.isArray(req.docs[i])) {
      return callback(pouchdbErrors.createError(pouchdbErrors.NOT_AN_OBJECT));
    }
  }

  var attachmentError;
  req.docs.forEach(function (doc) {
    if (doc._attachments) {
      Object.keys(doc._attachments).forEach(function (name) {
        attachmentError = attachmentError || attachmentNameError(name);

        if (!doc._attachments[name].content_type) {
          pouchdbUtils.guardedConsole('warn', 'Attachment', name, 'on document', doc._id, 'is missing content_type');
        }
      });
    }
  });

  if (attachmentError) {
    return callback(pouchdbErrors.createError(pouchdbErrors.BAD_REQUEST, attachmentError));
  }

  if (!('new_edits' in opts)) {
    if ('new_edits' in req) {
      opts.new_edits = req.new_edits;
    } else {
      opts.new_edits = true;
    }
  }

  var adapter = this;

  if (!opts.new_edits && !pouchdbUtils.isRemote(adapter)) {
    // ensure revisions of the same doc are sorted, so that
    // the local adapter processes them correctly (#2935)
    req.docs.sort(compareByIdThenRev);
  }

  cleanDocs(req.docs); // in the case of conflicts, we want to return the _ids to the user
  // however, the underlying adapter may destroy the docs array, so
  // create a copy here

  var ids = req.docs.map(function (doc) {
    return doc._id;
  });
  return this._bulkDocs(req, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (!opts.new_edits) {
      // this is what couch does when new_edits is false
      res = res.filter(function (x) {
        return x.error;
      });
    } // add ids for error/conflict responses (not required for CouchDB)


    if (!pouchdbUtils.isRemote(adapter)) {
      for (var i = 0, l = res.length; i < l; i++) {
        res[i].id = res[i].id || ids[i];
      }
    }

    callback(null, res);
  });
});
AbstractPouchDB.prototype.registerDependentDatabase = pouchdbUtils.adapterFun('registerDependentDatabase', function (dependentDb, callback) {
  var depDB = new this.constructor(dependentDb, this.__opts);

  function diffFun(doc) {
    doc.dependentDbs = doc.dependentDbs || {};

    if (doc.dependentDbs[dependentDb]) {
      return false; // no update required
    }

    doc.dependentDbs[dependentDb] = true;
    return doc;
  }

  pouchdbUtils.upsert(this, '_local/_pouch_dependentDbs', diffFun).then(function () {
    callback(null, {
      db: depDB
    });
  }).catch(callback);
});
AbstractPouchDB.prototype.destroy = pouchdbUtils.adapterFun('destroy', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;

  function destroyDb() {
    // call destroy method of the particular adaptor
    self._destroy(opts, function (err, resp) {
      if (err) {
        return callback(err);
      }

      self._destroyed = true;
      self.emit('destroyed');
      callback(null, resp || {
        'ok': true
      });
    });
  }

  if (pouchdbUtils.isRemote(self)) {
    // no need to check for dependent DBs if it's a remote DB
    return destroyDb();
  }

  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
    if (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        return callback(err);
      } else {
        // no dependencies
        return destroyDb();
      }
    }

    var dependentDbs = localDoc.dependentDbs;
    var PouchDB = self.constructor;
    var deletedMap = Object.keys(dependentDbs).map(function (name) {
      // use_prefix is only false in the browser

      /* istanbul ignore next */
      var trueName = usePrefix ? name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
      return new PouchDB(trueName, self.__opts).destroy();
    });
    Promise.all(deletedMap).then(destroyDb, callback);
  });
});

function TaskQueue() {
  this.isReady = false;
  this.failed = false;
  this.queue = [];
}

TaskQueue.prototype.execute = function () {
  var fun;

  if (this.failed) {
    while (fun = this.queue.shift()) {
      fun(this.failed);
    }
  } else {
    while (fun = this.queue.shift()) {
      fun();
    }
  }
};

TaskQueue.prototype.fail = function (err) {
  this.failed = err;
  this.execute();
};

TaskQueue.prototype.ready = function (db) {
  this.isReady = true;
  this.db = db;
  this.execute();
};

TaskQueue.prototype.addTask = function (fun) {
  this.queue.push(fun);

  if (this.failed) {
    this.execute();
  }
};

function parseAdapter(name, opts) {
  var match = name.match(/([a-z-]*):\/\/(.*)/);

  if (match) {
    // the http adapter expects the fully qualified name
    return {
      name: /https?/.test(match[1]) ? match[1] + '://' + match[2] : match[2],
      adapter: match[1]
    };
  }

  var adapters = PouchDB.adapters;
  var preferredAdapters = PouchDB.preferredAdapters;
  var prefix = PouchDB.prefix;
  var adapterName = opts.adapter;

  if (!adapterName) {
    // automatically determine adapter
    for (var i = 0; i < preferredAdapters.length; ++i) {
      adapterName = preferredAdapters[i]; // check for browsers that have been upgraded from websql-only to websql+idb

      /* istanbul ignore if */

      if (adapterName === 'idb' && 'websql' in adapters && pouchdbUtils.hasLocalStorage() && localStorage['_pouch__websqldb_' + prefix + name]) {
        // log it, because this can be confusing during development
        pouchdbUtils.guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' + ' avoid data loss, because it was already opened with WebSQL.');
        continue; // keep using websql to avoid user data loss
      }

      break;
    }
  }

  var adapter = adapters[adapterName]; // if adapter is invalid, then an error will be thrown later

  var usePrefix = adapter && 'use_prefix' in adapter ? adapter.use_prefix : true;
  return {
    name: usePrefix ? prefix + name : name,
    adapter: adapterName
  };
} // OK, so here's the deal. Consider this code:
//     var db1 = new PouchDB('foo');
//     var db2 = new PouchDB('foo');
//     db1.destroy();
// ^ these two both need to emit 'destroyed' events,
// as well as the PouchDB constructor itself.
// So we have one db object (whichever one got destroy() called on it)
// responsible for emitting the initial event, which then gets emitted
// by the constructor, which then broadcasts it to any other dbs
// that may have been created with the same name.


function prepareForDestruction(self) {
  function onDestroyed(from_constructor) {
    self.removeListener('closed', onClosed);

    if (!from_constructor) {
      self.constructor.emit('destroyed', self.name);
    }
  }

  function onClosed() {
    self.removeListener('destroyed', onDestroyed);
    self.constructor.emit('unref', self);
  }

  self.once('destroyed', onDestroyed);
  self.once('closed', onClosed);
  self.constructor.emit('ref', self);
}

inherits(PouchDB, AbstractPouchDB);

function PouchDB(name, opts) {
  // In Node our test suite only tests this for PouchAlt unfortunately

  /* istanbul ignore if */
  if (!(this instanceof PouchDB)) {
    return new PouchDB(name, opts);
  }

  var self = this;
  opts = opts || {};

  if (name && _typeof(name) === 'object') {
    opts = name;
    name = opts.name;
    delete opts.name;
  }

  if (opts.deterministic_revs === undefined) {
    opts.deterministic_revs = true;
  }

  this.__opts = opts = pouchdbUtils.clone(opts);
  self.auto_compaction = opts.auto_compaction;
  self.prefix = PouchDB.prefix;

  if (typeof name !== 'string') {
    throw new Error('Missing/invalid DB name');
  }

  var prefixedName = (opts.prefix || '') + name;
  var backend = parseAdapter(prefixedName, opts);
  opts.name = backend.name;
  opts.adapter = opts.adapter || backend.adapter;
  self.name = name;
  self._adapter = opts.adapter;
  PouchDB.emit('debug', ['adapter', 'Picked adapter: ', opts.adapter]);

  if (!PouchDB.adapters[opts.adapter] || !PouchDB.adapters[opts.adapter].valid()) {
    throw new Error('Invalid Adapter: ' + opts.adapter);
  }

  AbstractPouchDB.call(self);
  self.taskqueue = new TaskQueue();
  self.adapter = opts.adapter;
  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
    if (err) {
      return self.taskqueue.fail(err);
    }

    prepareForDestruction(self);
    self.emit('created', self);
    PouchDB.emit('created', self.name);
    self.taskqueue.ready(self);
  });
}

PouchDB.adapters = {};
PouchDB.preferredAdapters = [];
PouchDB.prefix = '_pouch_';
var eventEmitter = new events.EventEmitter();

function setUpEventEmitter(Pouch) {
  Object.keys(events.EventEmitter.prototype).forEach(function (key) {
    if (typeof events.EventEmitter.prototype[key] === 'function') {
      Pouch[key] = eventEmitter[key].bind(eventEmitter);
    }
  }); // these are created in constructor.js, and allow us to notify each DB with
  // the same name that it was destroyed, via the constructor object

  var destructListeners = Pouch._destructionListeners = new pouchdbCollections.Map();
  Pouch.on('ref', function onConstructorRef(db) {
    if (!destructListeners.has(db.name)) {
      destructListeners.set(db.name, []);
    }

    destructListeners.get(db.name).push(db);
  });
  Pouch.on('unref', function onConstructorUnref(db) {
    if (!destructListeners.has(db.name)) {
      return;
    }

    var dbList = destructListeners.get(db.name);
    var pos = dbList.indexOf(db);

    if (pos < 0) {
      /* istanbul ignore next */
      return;
    }

    dbList.splice(pos, 1);

    if (dbList.length > 1) {
      /* istanbul ignore next */
      destructListeners.set(db.name, dbList);
    } else {
      destructListeners.delete(db.name);
    }
  });
  Pouch.on('destroyed', function onConstructorDestroyed(name) {
    if (!destructListeners.has(name)) {
      return;
    }

    var dbList = destructListeners.get(name);
    destructListeners.delete(name);
    dbList.forEach(function (db) {
      db.emit('destroyed', true);
    });
  });
}

setUpEventEmitter(PouchDB);

PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
  /* istanbul ignore else */
  if (obj.valid()) {
    PouchDB.adapters[id] = obj;

    if (addToPreferredAdapters) {
      PouchDB.preferredAdapters.push(id);
    }
  }
};

PouchDB.plugin = function (obj) {
  if (typeof obj === 'function') {
    // function style for plugins
    obj(PouchDB);
  } else if (_typeof(obj) !== 'object' || Object.keys(obj).length === 0) {
    throw new Error('Invalid plugin: got "' + obj + '", expected an object or a function');
  } else {
    Object.keys(obj).forEach(function (id) {
      // object style for plugins
      PouchDB.prototype[id] = obj[id];
    });
  }

  if (this.__defaults) {
    PouchDB.__defaults = pouchdbUtils.assign({}, this.__defaults);
  }

  return PouchDB;
};

PouchDB.defaults = function (defaultOpts) {
  function PouchAlt(name, opts) {
    if (!(this instanceof PouchAlt)) {
      return new PouchAlt(name, opts);
    }

    opts = opts || {};

    if (name && _typeof(name) === 'object') {
      opts = name;
      name = opts.name;
      delete opts.name;
    }

    opts = pouchdbUtils.assign({}, PouchAlt.__defaults, opts);
    PouchDB.call(this, name, opts);
  }

  inherits(PouchAlt, PouchDB);
  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
  Object.keys(PouchDB).forEach(function (key) {
    if (!(key in PouchAlt)) {
      PouchAlt[key] = PouchDB[key];
    }
  }); // make default options transitive
  // https://github.com/pouchdb/pouchdb/issues/5922

  PouchAlt.__defaults = pouchdbUtils.assign({}, this.__defaults, defaultOpts);
  return PouchAlt;
};

PouchDB.fetch = function (url, opts) {
  return pouchdbFetch.fetch(url, opts);
}; // managed automatically by set-version.js


var version = "7.0.0"; // TODO: remove from pouchdb-core (breaking)

PouchDB.plugin(pouchChangesFilter);
PouchDB.version = version;
module.exports = PouchDB;

},{"10":10,"11":11,"12":12,"13":13,"16":16,"2":2,"3":3,"5":5,"7":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function mangle(key) {
  return '$' + key;
}

function unmangle(key) {
  return key.substring(1);
}

function Map$1() {
  this._store = {};
}

Map$1.prototype.get = function (key) {
  var mangled = mangle(key);
  return this._store[mangled];
};

Map$1.prototype.set = function (key, value) {
  var mangled = mangle(key);
  this._store[mangled] = value;
  return true;
};

Map$1.prototype.has = function (key) {
  var mangled = mangle(key);
  return mangled in this._store;
};

Map$1.prototype.delete = function (key) {
  var mangled = mangle(key);
  var res = mangled in this._store;
  delete this._store[mangled];
  return res;
};

Map$1.prototype.forEach = function (cb) {
  var keys = Object.keys(this._store);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var value = this._store[key];
    key = unmangle(key);
    cb(value, key);
  }
};

Object.defineProperty(Map$1.prototype, 'size', {
  get: function get() {
    return Object.keys(this._store).length;
  }
});

function Set$1(array) {
  this._store = new Map$1(); // init with an array

  if (array && Array.isArray(array)) {
    for (var i = 0, len = array.length; i < len; i++) {
      this.add(array[i]);
    }
  }
}

Set$1.prototype.add = function (key) {
  return this._store.set(key, true);
};

Set$1.prototype.has = function (key) {
  return this._store.has(key);
};

Set$1.prototype.forEach = function (cb) {
  this._store.forEach(function (value, key) {
    cb(key);
  });
};

Object.defineProperty(Set$1.prototype, 'size', {
  get: function get() {
    return this._store.size;
  }
});
/* global Map,Set,Symbol */
// Based on https://kangax.github.io/compat-table/es6/ we can sniff out
// incomplete Map/Set implementations which would otherwise cause our tests to fail.
// Notably they fail in IE11 and iOS 8.4, which this prevents.

function supportsMapAndSet() {
  if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
    return false;
  }

  var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
  return prop && 'get' in prop && Map[Symbol.species] === Map;
} // based on https://github.com/montagejs/collections


{
  if (supportsMapAndSet()) {
    // prefer built-in Map/Set
    exports.Set = Set;
    exports.Map = Map;
  } else {
    // fall back to our polyfill
    exports.Set = Set$1;
    exports.Map = Map$1;
  }
}

},{}],11:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"5":5,"8":8}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
}); // We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html

function winningRev(metadata) {
  var winningId;
  var winningPos;
  var winningDeleted;
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var tree = node.ids;
    var branches = tree[2];
    var pos = node.pos;

    if (branches.length) {
      // non-leaf
      for (var i = 0, len = branches.length; i < len; i++) {
        toVisit.push({
          pos: pos + 1,
          ids: branches[i]
        });
      }

      continue;
    }

    var deleted = !!tree[1].deleted;
    var id = tree[0]; // sort by deleted, then pos, then id

    if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
      winningId = id;
      winningPos = pos;
      winningDeleted = deleted;
    }
  }

  return winningPos + '-' + winningId;
} // Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node


function traverseRevTree(revs, callback) {
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var branches = tree[2];
    var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        ctx: newCtx
      });
    }
  }
}

function sortByPos(a, b) {
  return a.pos - b.pos;
}

function collectLeaves(revs) {
  var leaves = [];
  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.push({
        rev: pos + "-" + id,
        pos: pos,
        opts: opts
      });
    }
  });
  leaves.sort(sortByPos).reverse();

  for (var i = 0, len = leaves.length; i < len; i++) {
    delete leaves[i].pos;
  }

  return leaves;
} // returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision


function collectConflicts(metadata) {
  var win = winningRev(metadata);
  var leaves = collectLeaves(metadata.rev_tree);
  var conflicts = [];

  for (var i = 0, len = leaves.length; i < len; i++) {
    var leaf = leaves[i];

    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  }

  return conflicts;
} // compact a tree by marking its non-leafs as missing,
// and return a list of revs to delete


function compactTree(metadata) {
  var revs = [];
  traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
    if (opts.status === 'available' && !isLeaf) {
      revs.push(pos + '-' + revHash);
      opts.status = 'missing';
    }
  });
  return revs;
} // build up a list of all the paths to the leafs in this revision tree


function rootToLeaf(revs) {
  var paths = [];
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      opts: opts
    });

    if (isLeaf) {
      paths.push({
        pos: pos + 1 - history.length,
        ids: history
      });
    }

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        history: history
      });
    }
  }

  return paths.reverse();
} // for a better overview of what this is doing, read:


function sortByPos$1(a, b) {
  return a.pos - b.pos;
} // classic binary search


function binarySearch(arr, item, comparator) {
  var low = 0;
  var high = arr.length;
  var mid;

  while (low < high) {
    mid = low + high >>> 1;

    if (comparator(arr[mid], item) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
} // assuming the arr is sorted, insert the item in the proper place


function insertSorted(arr, item, comparator) {
  var idx = binarySearch(arr, item, comparator);
  arr.splice(idx, 0, item);
} // Turn a path as a flat array into a tree with a single branch.
// If any should be stemmed from the beginning of the array, that's passed
// in as the second argument


function pathToTree(path, numStemmed) {
  var root;
  var leaf;

  for (var i = numStemmed, len = path.length; i < len; i++) {
    var node = path[i];
    var currentLeaf = [node.id, node.opts, []];

    if (leaf) {
      leaf[2].push(currentLeaf);
      leaf = currentLeaf;
    } else {
      root = leaf = currentLeaf;
    }
  }

  return root;
} // compare the IDs of two trees


function compareTree(a, b) {
  return a[0] < b[0] ? -1 : 1;
} // Merge two trees together
// The roots of tree1 and tree2 must be the same revision


function mergeTree(in_tree1, in_tree2) {
  var queue = [{
    tree1: in_tree1,
    tree2: in_tree2
  }];
  var conflicts = false;

  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status = tree1[1].status === 'available' || tree2[1].status === 'available' ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;

      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({
            tree1: tree1[2][j],
            tree2: tree2[2][i]
          });
          merged = true;
        }
      }

      if (!merged) {
        conflicts = 'new_branch';
        insertSorted(tree1[2], tree2[2][i], compareTree);
      }
    }
  }

  return {
    conflicts: conflicts,
    tree: in_tree1
  };
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res;

  if (!tree.length) {
    return {
      tree: [path],
      conflicts: 'new_leaf'
    };
  }

  for (var i = 0, len = tree.length; i < len; i++) {
    var branch = tree[i];

    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({
        pos: branch.pos,
        ids: res.tree
      });
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we
      // want to merge.  If the keys match we return the longer path with the
      // other merged After stemming we dont want to expand the trees
      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;
      var candidateParents = [];
      var trees = [];
      trees.push({
        ids: t1.ids,
        diff: diff,
        parent: null,
        parentIdx: null
      });

      while (trees.length > 0) {
        var item = trees.pop();

        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }

          continue;
        }

        var elements = item.ids[2];

        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
          trees.push({
            ids: elements[j],
            diff: item.diff - 1,
            parent: item.ids,
            parentIdx: j
          });
        }
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({
          pos: t1.pos,
          ids: t1.ids
        });
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  } // We didnt find


  if (!merged) {
    restree.push(path);
  }

  restree.sort(sortByPos$1);
  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
} // To ensure we dont grow the revision tree infinitely, we stem old revisions


function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths
  var paths = rootToLeaf(tree);
  var stemmedRevs;
  var result;

  for (var i = 0, len = paths.length; i < len; i++) {
    // Then for each path, we cut off the start of the path based on the
    // `depth` to stem to, and generate a new set of flat trees
    var path = paths[i];
    var stemmed = path.ids;
    var node;

    if (stemmed.length > depth) {
      // only do the stemming work if we actually need to stem
      if (!stemmedRevs) {
        stemmedRevs = {}; // avoid allocating this object unnecessarily
      }

      var numStemmed = stemmed.length - depth;
      node = {
        pos: path.pos + numStemmed,
        ids: pathToTree(stemmed, numStemmed)
      };

      for (var s = 0; s < numStemmed; s++) {
        var rev = path.pos + s + '-' + stemmed[s].id;
        stemmedRevs[rev] = true;
      }
    } else {
      // no need to actually stem
      node = {
        pos: path.pos,
        ids: pathToTree(stemmed, 0)
      };
    } // Then we remerge all those flat trees together, ensuring that we dont
    // connect trees that would go beyond the depth limit


    if (result) {
      result = doMerge(result, node, true).tree;
    } else {
      result = [node];
    }
  } // this is memory-heavy per Chrome profiler, avoid unless we actually stemmed


  if (stemmedRevs) {
    traverseRevTree(result, function (isLeaf, pos, revHash) {
      // some revisions may have been removed in a branch but not in another
      delete stemmedRevs[pos + '-' + revHash];
    });
  }

  return {
    tree: result,
    revs: stemmedRevs ? Object.keys(stemmedRevs) : []
  };
}

function merge(tree, path, depth) {
  var newTree = doMerge(tree, path);
  var stemmed = stem(newTree.tree, depth);
  return {
    tree: stemmed.tree,
    stemmedRevs: stemmed.revs,
    conflicts: newTree.conflicts
  };
} // return true if a rev exists in the rev tree, false otherwise


function revExists(revs, rev) {
  var toVisit = revs.slice();
  var splitRev = rev.split('-');
  var targetPos = parseInt(splitRev[0], 10);
  var targetId = splitRev[1];
  var node;

  while (node = toVisit.pop()) {
    if (node.pos === targetPos && node.ids[0] === targetId) {
      return true;
    }

    var branches = node.ids[2];

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: node.pos + 1,
        ids: branches[i]
      });
    }
  }

  return false;
}

function getTrees(node) {
  return node.ids;
} // check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision


function isDeleted(metadata, rev) {
  if (!rev) {
    rev = winningRev(metadata);
  }

  var id = rev.substring(rev.indexOf('-') + 1);
  var toVisit = metadata.rev_tree.map(getTrees);
  var tree;

  while (tree = toVisit.pop()) {
    if (tree[0] === id) {
      return !!tree[1].deleted;
    }

    toVisit = toVisit.concat(tree[2]);
  }
}

function isLocalId(id) {
  return /^_local/.test(id);
} // returns the current leaf node for a given revision


function latest(rev, metadata) {
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      pos: pos,
      opts: opts
    });

    if (isLeaf) {
      for (var i = 0, len = history.length; i < len; i++) {
        var historyNode = history[i];
        var historyRev = historyNode.pos + '-' + historyNode.id;

        if (historyRev === rev) {
          // return the rev of this leaf
          return pos + '-' + id;
        }
      }
    }

    for (var j = 0, l = branches.length; j < l; j++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[j],
        history: history
      });
    }
  }
  /* istanbul ignore next */


  throw new Error('Unable to resolve latest revision for id ' + metadata.id + ', rev ' + rev);
}

exports.collectConflicts = collectConflicts;
exports.collectLeaves = collectLeaves;
exports.compactTree = compactTree;
exports.isDeleted = isDeleted;
exports.isLocalId = isLocalId;
exports.merge = merge;
exports.revExists = revExists;
exports.rootToLeaf = rootToLeaf;
exports.traverseRevTree = traverseRevTree;
exports.winningRev = winningRev;
exports.latest = latest;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
}); // AbortController was introduced quite a while after fetch and
// isnt required for PouchDB to function so polyfill if needed

var a = typeof AbortController !== 'undefined' ? AbortController : function () {
  return {
    abort: function abort() {}
  };
};
var f = fetch;
var h = Headers;
exports.fetch = f;
exports.Headers = h;
exports.AbortController = a;

},{}],14:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var pouchdbUtils = require(16);

var pouchdbCollate = require(15); // this would just be "return doc[field]", but fields
// can be "deep" due to dot notation


function getFieldFromDoc(doc, parsedField) {
  var value = doc;

  for (var i = 0, len = parsedField.length; i < len; i++) {
    var key = parsedField[i];
    value = value[key];

    if (!value) {
      break;
    }
  }

  return value;
}

function setFieldInDoc(doc, parsedField, value) {
  for (var i = 0, len = parsedField.length; i < len - 1; i++) {
    var elem = parsedField[i];
    doc = doc[elem] = {};
  }

  doc[parsedField[len - 1]] = value;
}

function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Converts a string in dot notation to an array of its components, with backslash escaping


function parseField(fieldName) {
  // fields may be deep (e.g. "foo.bar.baz"), so parse
  var fields = [];
  var current = '';

  for (var i = 0, len = fieldName.length; i < len; i++) {
    var ch = fieldName[i];

    if (ch === '.') {
      if (i > 0 && fieldName[i - 1] === '\\') {
        // escaped delimiter
        current = current.substring(0, current.length - 1) + '.';
      } else {
        // not escaped, so delimiter
        fields.push(current);
        current = '';
      }
    } else {
      // normal character
      current += ch;
    }
  }

  fields.push(current);
  return fields;
}

var combinationFields = ['$or', '$nor', '$not'];

function isCombinationalField(field) {
  return combinationFields.indexOf(field) > -1;
}

function getKey(obj) {
  return Object.keys(obj)[0];
}

function getValue(obj) {
  return obj[getKey(obj)];
} // flatten an array of selectors joined by an $and operator


function mergeAndedSelectors(selectors) {
  // sort to ensure that e.g. if the user specified
  // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
  // just {$gt: 'b'}
  var res = {};
  selectors.forEach(function (selector) {
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];

      if (_typeof(matcher) !== 'object') {
        matcher = {
          $eq: matcher
        };
      }

      if (isCombinationalField(field)) {
        if (matcher instanceof Array) {
          res[field] = matcher.map(function (m) {
            return mergeAndedSelectors([m]);
          });
        } else {
          res[field] = mergeAndedSelectors([matcher]);
        }
      } else {
        var fieldMatchers = res[field] = res[field] || {};
        Object.keys(matcher).forEach(function (operator) {
          var value = matcher[operator];

          if (operator === '$gt' || operator === '$gte') {
            return mergeGtGte(operator, value, fieldMatchers);
          } else if (operator === '$lt' || operator === '$lte') {
            return mergeLtLte(operator, value, fieldMatchers);
          } else if (operator === '$ne') {
            return mergeNe(value, fieldMatchers);
          } else if (operator === '$eq') {
            return mergeEq(value, fieldMatchers);
          }

          fieldMatchers[operator] = value;
        });
      }
    });
  });
  return res;
} // collapse logically equivalent gt/gte values


function mergeGtGte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$gte !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gte) {
        // more specificity
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value >= fieldMatchers.$gte) {
        // more specificity
        delete fieldMatchers.$gte;
        fieldMatchers.$gt = value;
      }
    }
  } else if (typeof fieldMatchers.$gt !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gt) {
        // more specificity
        delete fieldMatchers.$gt;
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value > fieldMatchers.$gt) {
        // more specificity
        fieldMatchers.$gt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // collapse logically equivalent lt/lte values


function mergeLtLte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$lte !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lte) {
        // more specificity
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value <= fieldMatchers.$lte) {
        // more specificity
        delete fieldMatchers.$lte;
        fieldMatchers.$lt = value;
      }
    }
  } else if (typeof fieldMatchers.$lt !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lt) {
        // more specificity
        delete fieldMatchers.$lt;
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value < fieldMatchers.$lt) {
        // more specificity
        fieldMatchers.$lt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // combine $ne values into one array


function mergeNe(value, fieldMatchers) {
  if ('$ne' in fieldMatchers) {
    // there are many things this could "not" be
    fieldMatchers.$ne.push(value);
  } else {
    // doesn't exist yet
    fieldMatchers.$ne = [value];
  }
} // add $eq into the mix


function mergeEq(value, fieldMatchers) {
  // these all have less specificity than the $eq
  // TODO: check for user errors here
  delete fieldMatchers.$gt;
  delete fieldMatchers.$gte;
  delete fieldMatchers.$lt;
  delete fieldMatchers.$lte;
  delete fieldMatchers.$ne;
  fieldMatchers.$eq = value;
} //
// normalize the selector
//


function massageSelector(input) {
  var result = pouchdbUtils.clone(input);
  var wasAnded = false;

  if ('$and' in result) {
    result = mergeAndedSelectors(result['$and']);
    wasAnded = true;
  }

  ['$or', '$nor'].forEach(function (orOrNor) {
    if (orOrNor in result) {
      // message each individual selector
      // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
      result[orOrNor].forEach(function (subSelector) {
        var fields = Object.keys(subSelector);

        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = subSelector[field];

          if (_typeof(matcher) !== 'object' || matcher === null) {
            subSelector[field] = {
              $eq: matcher
            };
          }
        }
      });
    }
  });

  if ('$not' in result) {
    //This feels a little like forcing, but it will work for now,
    //I would like to come back to this and make the merging of selectors a little more generic
    result['$not'] = mergeAndedSelectors([result['$not']]);
  }

  var fields = Object.keys(result);

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var matcher = result[field];

    if (_typeof(matcher) !== 'object' || matcher === null) {
      matcher = {
        $eq: matcher
      };
    } else if ('$ne' in matcher && !wasAnded) {
      // I put these in an array, since there may be more than one
      // but in the "mergeAnded" operation, I already take care of that
      matcher.$ne = [matcher.$ne];
    }

    result[field] = matcher;
  }

  return result;
} // create a comparator based on the sort object


function createFieldSorter(sort) {
  function getFieldValuesAsArray(doc) {
    return sort.map(function (sorting) {
      var fieldName = getKey(sorting);
      var parsedField = parseField(fieldName);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      return docFieldValue;
    });
  }

  return function (aRow, bRow) {
    var aFieldValues = getFieldValuesAsArray(aRow.doc);
    var bFieldValues = getFieldValuesAsArray(bRow.doc);
    var collation = pouchdbCollate.collate(aFieldValues, bFieldValues);

    if (collation !== 0) {
      return collation;
    } // this is what mango seems to do


    return compare(aRow.doc._id, bRow.doc._id);
  };
}

function filterInMemoryFields(rows, requestDef, inMemoryFields) {
  rows = rows.filter(function (row) {
    return rowFilter(row.doc, requestDef.selector, inMemoryFields);
  });

  if (requestDef.sort) {
    // in-memory sort
    var fieldSorter = createFieldSorter(requestDef.sort);
    rows = rows.sort(fieldSorter);

    if (typeof requestDef.sort[0] !== 'string' && getValue(requestDef.sort[0]) === 'desc') {
      rows = rows.reverse();
    }
  }

  if ('limit' in requestDef || 'skip' in requestDef) {
    // have to do the limit in-memory
    var skip = requestDef.skip || 0;
    var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
    rows = rows.slice(skip, limit);
  }

  return rows;
}

function rowFilter(doc, selector, inMemoryFields) {
  return inMemoryFields.every(function (field) {
    var matcher = selector[field];
    var parsedField = parseField(field);
    var docFieldValue = getFieldFromDoc(doc, parsedField);

    if (isCombinationalField(field)) {
      return matchCominationalSelector(field, matcher, doc);
    }

    return matchSelector(matcher, doc, parsedField, docFieldValue);
  });
}

function matchSelector(matcher, doc, parsedField, docFieldValue) {
  if (!matcher) {
    // no filtering necessary; this field is just needed for sorting
    return true;
  }

  return Object.keys(matcher).every(function (userOperator) {
    var userValue = matcher[userOperator];
    return match(userOperator, doc, userValue, parsedField, docFieldValue);
  });
}

function matchCominationalSelector(field, matcher, doc) {
  if (field === '$or') {
    return matcher.some(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });
  }

  if (field === '$not') {
    return !rowFilter(doc, matcher, Object.keys(matcher));
  } //`$nor`


  return !matcher.find(function (orMatchers) {
    return rowFilter(doc, orMatchers, Object.keys(orMatchers));
  });
}

function match(userOperator, doc, userValue, parsedField, docFieldValue) {
  if (!matchers[userOperator]) {
    throw new Error('unknown operator "' + userOperator + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' + '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
  }

  return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
}

function fieldExists(docFieldValue) {
  return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function fieldIsNotUndefined(docFieldValue) {
  return typeof docFieldValue !== 'undefined';
}

function modField(docFieldValue, userValue) {
  var divisor = userValue[0];
  var mod = userValue[1];

  if (divisor === 0) {
    throw new Error('Bad divisor, cannot divide by zero');
  }

  if (parseInt(divisor, 10) !== divisor) {
    throw new Error('Divisor is not an integer');
  }

  if (parseInt(mod, 10) !== mod) {
    throw new Error('Modulus is not an integer');
  }

  if (parseInt(docFieldValue, 10) !== docFieldValue) {
    return false;
  }

  return docFieldValue % divisor === mod;
}

function arrayContainsValue(docFieldValue, userValue) {
  return userValue.some(function (val) {
    if (docFieldValue instanceof Array) {
      return docFieldValue.indexOf(val) > -1;
    }

    return docFieldValue === val;
  });
}

function arrayContainsAllValues(docFieldValue, userValue) {
  return userValue.every(function (val) {
    return docFieldValue.indexOf(val) > -1;
  });
}

function arraySize(docFieldValue, userValue) {
  return docFieldValue.length === userValue;
}

function regexMatch(docFieldValue, userValue) {
  var re = new RegExp(userValue);
  return re.test(docFieldValue);
}

function typeMatch(docFieldValue, userValue) {
  switch (userValue) {
    case 'null':
      return docFieldValue === null;

    case 'boolean':
      return typeof docFieldValue === 'boolean';

    case 'number':
      return typeof docFieldValue === 'number';

    case 'string':
      return typeof docFieldValue === 'string';

    case 'array':
      return docFieldValue instanceof Array;

    case 'object':
      return {}.toString.call(docFieldValue) === '[object Object]';
  }

  throw new Error(userValue + ' not supported as a type.' + 'Please use one of object, string, array, number, boolean or null.');
}

var matchers = {
  '$elemMatch': function $elemMatch(doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    if (docFieldValue.length === 0) {
      return false;
    }

    if (_typeof(docFieldValue[0]) === 'object') {
      return docFieldValue.some(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.some(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$allMatch': function $allMatch(doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }
    /* istanbul ignore next */


    if (docFieldValue.length === 0) {
      return false;
    }

    if (_typeof(docFieldValue[0]) === 'object') {
      return docFieldValue.every(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.every(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$eq': function $eq(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) === 0;
  },
  '$gte': function $gte(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) >= 0;
  },
  '$gt': function $gt(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) > 0;
  },
  '$lte': function $lte(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) <= 0;
  },
  '$lt': function $lt(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) < 0;
  },
  '$exists': function $exists(doc, userValue, parsedField, docFieldValue) {
    //a field that is null is still considered to exist
    if (userValue) {
      return fieldIsNotUndefined(docFieldValue);
    }

    return !fieldIsNotUndefined(docFieldValue);
  },
  '$mod': function $mod(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
  },
  '$ne': function $ne(doc, userValue, parsedField, docFieldValue) {
    return userValue.every(function (neValue) {
      return pouchdbCollate.collate(docFieldValue, neValue) !== 0;
    });
  },
  '$in': function $in(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
  },
  '$nin': function $nin(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
  },
  '$size': function $size(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
  },
  '$all': function $all(doc, userValue, parsedField, docFieldValue) {
    return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
  },
  '$regex': function $regex(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
  },
  '$type': function $type(doc, userValue, parsedField, docFieldValue) {
    return typeMatch(docFieldValue, userValue);
  }
}; // return true if the given doc matches the supplied selector

function matchesSelector(doc, selector) {
  /* istanbul ignore if */
  if (_typeof(selector) !== 'object') {
    // match the CouchDB error message
    throw new Error('Selector error: expected a JSON object');
  }

  selector = massageSelector(selector);
  var row = {
    'doc': doc
  };
  var rowsMatched = filterInMemoryFields([row], {
    'selector': selector
  }, Object.keys(selector));
  return rowsMatched && rowsMatched.length === 1;
}

exports.massageSelector = massageSelector;
exports.matchesSelector = matchesSelector;
exports.filterInMemoryFields = filterInMemoryFields;
exports.createFieldSorter = createFieldSorter;
exports.rowFilter = rowFilter;
exports.isCombinationalField = isCombinationalField;
exports.getKey = getKey;
exports.getValue = getValue;
exports.getFieldFromDoc = getFieldFromDoc;
exports.setFieldInDoc = setFieldInDoc;
exports.compare = compare;
exports.parseField = parseField;

},{"15":15,"16":16}],15:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  /* istanbul ignore next */

  while (padding.length < targetLength) {
    padding += padWith;
  }

  return padding;
}

function padLeft(str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
}

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE

var MAGNITUDE_DIGITS = 3; // ditto

var SEP = ''; // set to '_' for easier debugging 

function collate(a, b) {
  if (a === b) {
    return 0;
  }

  a = normalizeKey(a);
  b = normalizeKey(b);
  var ai = collationIndex(a);
  var bi = collationIndex(b);

  if (ai - bi !== 0) {
    return ai - bi;
  }

  switch (_typeof(a)) {
    case 'number':
      return a - b;

    case 'boolean':
      return a < b ? -1 : 1;

    case 'string':
      return stringCollate(a, b);
  }

  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
} // couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.


function normalizeKey(key) {
  switch (_typeof(key)) {
    case 'undefined':
      return null;

    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }

      return key;

    case 'object':
      var origKey = key;

      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);

        for (var i = 0; i < len; i++) {
          key[i] = normalizeKey(origKey[i]);
        }
        /* istanbul ignore next */

      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) {
        // generic object
        key = {};

        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];

            if (typeof val !== 'undefined') {
              key[k] = normalizeKey(val);
            }
          }
        }
      }

  }

  return key;
}

function indexify(key) {
  if (key !== null) {
    switch (_typeof(key)) {
      case 'boolean':
        return key ? 1 : 0;

      case 'number':
        return numToIndexableString(key);

      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2

        /* eslint-disable no-control-regex */
        return key.replace(/\u0002/g, "\x02\x02").replace(/\u0001/g, "\x01\x02").replace(/\u0000/g, "\x01\x01");

      /* eslint-enable no-control-regex */

      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';

        if (isArray) {
          while (++i < len) {
            result += toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += toIndexableString(objKey) + toIndexableString(key[objKey]);
          }
        }

        return result;
    }
  }

  return '';
} // convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.


function toIndexableString(key) {
  var zero = "\0";
  key = normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
}

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';

  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    /* istanbul ignore next */

    if (neg) {
      magnitude = -magnitude;
    }

    i += MAGNITUDE_DIGITS;

    while (true) {
      var ch = str[i];

      if (ch === "\0") {
        break;
      } else {
        numAsString += ch;
      }

      i++;
    }

    numAsString = numAsString.split('.');

    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      /* istanbul ignore next */
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    /* istanbul ignore next */


    if (neg) {
      num = num - 10;
    }
    /* istanbul ignore next */


    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }

  return {
    num: num,
    length: i - originalIdx
  };
} // move up the stack while parsing
// this function moved outside of parseIndexableString for performance


function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];

    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }

    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;

    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) {
      // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

function parseIndexableString(str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects

  var i = 0;
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

  while (true) {
    var collationIndex = str[i++];

    if (collationIndex === "\0") {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }

    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;

      case '2':
        stack.push(str[i] === '1');
        i++;
        break;

      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;

      case '4':
        var parsedStr = '';
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

        while (true) {
          var ch = str[i];

          if (ch === "\0") {
            break;
          }

          parsedStr += ch;
          i++;
        } // perform the reverse of the order-preserving replacement
        // algorithm (see above)

        /* eslint-disable no-control-regex */


        parsedStr = parsedStr.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "\x01").replace(/\u0002\u0002/g, "\x02");
        /* eslint-enable no-control-regex */

        stack.push(parsedStr);
        break;

      case '5':
        var arrayElement = {
          element: [],
          index: stack.length
        };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;

      case '6':
        var objElement = {
          element: {},
          index: stack.length
        };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;

      /* istanbul ignore next */

      default:
        throw new Error('bad collationIndex or unexpectedly reached end of input: ' + collationIndex);
    }
  }
}

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);

  for (var i = 0; i < len; i++) {
    var sort = collate(a[i], b[i]);

    if (sort !== 0) {
      return sort;
    }
  }

  return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
}

function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return a === b ? 0 : a > b ? 1 : -1;
}

function objectCollate(a, b) {
  var ak = Object.keys(a),
      bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);

  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = collate(ak[i], bk[i]);

    if (sort !== 0) {
      return sort;
    } // if the keys are equal sort the values


    sort = collate(a[ak[i]], b[bk[i]]);

    if (sort !== 0) {
      return sort;
    }
  }

  return ak.length === bk.length ? 0 : ak.length > bk.length ? 1 : -1;
} // The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null


function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(_typeof(x)); //false if -1 otherwise true, but fast!!!!1

  if (~idx) {
    if (x === null) {
      return 1;
    }

    if (Array.isArray(x)) {
      return 5;
    }

    return idx < 3 ? idx + 2 : idx + 3;
  }
  /* istanbul ignore next */


  if (Array.isArray(x)) {
    return 5;
  }
} // conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse


function numToIndexableString(num) {
  if (num === 0) {
    return '1';
  } // convert number to exponential format for easier and
  // more succinct string sorting


  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);
  var neg = num < 0;
  var result = neg ? '0' : '2'; // first sort by magnitude
  // it's easier if all magnitudes are positive

  var magForComparison = (neg ? -magnitude : magnitude) - MIN_MAGNITUDE;
  var magString = padLeft(magForComparison.toString(), '0', MAGNITUDE_DIGITS);
  result += SEP + magString; // then sort by the factor

  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)

  /* istanbul ignore next */

  if (neg) {
    // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20); // strip zeros from the end

  factorStr = factorStr.replace(/\.?0+$/, '');
  result += SEP + factorStr;
  return result;
}

exports.collate = collate;
exports.normalizeKey = normalizeKey;
exports.toIndexableString = toIndexableString;
exports.parseIndexableString = parseIndexableString;

},{}],16:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var getArguments = _interopDefault(require(2));

var pouchdbCollections = require(17);

var immediate = _interopDefault(require(4));

var events = require(3);

var inherits = _interopDefault(require(5));

var pouchdbErrors = require(18);

var uuidV4 = _interopDefault(require(21));

var pouchdbMd5 = require(19);

var pouchdbUtils = require(16);

function isBinaryObject(object) {
  return typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer || typeof Blob !== 'undefined' && object instanceof Blob;
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  } // IE10-11 slice() polyfill


  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }

  var size = object.size;
  var type = object.type; // Blob

  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  } // PhantomJS slice() replacement


  return object.webkitSlice(0, size, type);
} // most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js


var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */

  if (proto === null) {
    // not sure when this happens, but I guess it can
    return true;
  }

  var Ctor = proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || _typeof(object) !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];

    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }

    return newObject;
  } // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates


  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};

  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);

      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }

  return newObject;
}

function once(fun) {
  var called = false;
  return getArguments(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return getArguments(function (args) {
    // Clone arguments
    args = clone(args);
    var self = this; // if the last argument is a function, assume its a callback

    var usedCB = typeof args[args.length - 1] === 'function' ? args.pop() : false;
    var promise = new Promise(function (fulfill, reject) {
      var resp;

      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        }); // create a callback for this invocation
        // apply the function in the orig context

        args.push(callback);
        resp = func.apply(self, args);

        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    }); // if there is a callback, call it back

    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }

    return promise;
  });
}

function logApiCall(self, name, args) {
  /* istanbul ignore if */
  if (self.constructor.listeners('debug').length) {
    var logArgs = ['api', self.name, name];

    for (var i = 0; i < args.length - 1; i++) {
      logArgs.push(args[i]);
    }

    self.constructor.emit('debug', logArgs); // override the callback itself to log the response

    var origCallback = args[args.length - 1];

    args[args.length - 1] = function (err, res) {
      var responseArgs = ['api', self.name, name];
      responseArgs = responseArgs.concat(err ? ['error', err] : ['success', res]);
      self.constructor.emit('debug', responseArgs);
      origCallback(err, res);
    };
  }
}

function adapterFun(name, callback) {
  return toPromise(getArguments(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }

    if (this._destroyed) {
      return Promise.reject(new Error('database is destroyed'));
    }

    var self = this;
    logApiCall(self, name, args);

    if (!this.taskqueue.isReady) {
      return new Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }

    return callback.apply(this, args);
  }));
} // like underscore/lodash _.pick()


function pick(obj, arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];

    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }

  return res;
} // Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.


var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
} // shim for P/CouchDB adapters that don't directly implement _bulk_get


function bulkGet(db, opts, callback) {
  var requests = opts.docs; // consolidate into one request per doc if possible

  var requestsById = new pouchdbCollections.Map();
  requests.forEach(function (request) {
    if (requestsById.has(request.id)) {
      requestsById.get(request.id).push(request);
    } else {
      requestsById.set(request.id, [request]);
    }
  });
  var numDocs = requestsById.size;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {
      results: results
    });
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {
      id: id,
      docs: docs
    };
    checkDone();
  }

  var allRequests = [];
  requestsById.forEach(function (value, key) {
    allRequests.push(key);
  });
  var i = 0;

  function nextBatch() {
    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById.get(docId); // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.

      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      }); // remove falsey / undefined revisions

      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs; // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request

        formatResult = formatResultForOpenRevsGet;
      } // globally-supplied options


      ['revs', 'attachments', 'binary', 'ajax', 'latest'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */

        if (err) {
          result = [{
            error: err
          }];
        } else {
          result = formatResult(res);
        }

        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();
}

var hasLocal;

try {
  localStorage.setItem('_pouch_check_localstorage', 1);
  hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
} catch (e) {
  hasLocal = false;
}

function hasLocalStorage() {
  return hasLocal;
} // Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We


inherits(Changes, events.EventEmitter);
/* istanbul ignore next */

function attachBrowserEvents(self) {
  if (hasLocalStorage()) {
    addEventListener("storage", function (e) {
      self.emit(e.key);
    });
  }
}

function Changes() {
  events.EventEmitter.call(this);
  this._listeners = {};
  attachBrowserEvents(this);
}

Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }

  var self = this;
  var inprogress = false;

  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }

    if (inprogress) {
      inprogress = 'waiting';
      return;
    }

    inprogress = true;
    var changesOpts = pick(opts, ['style', 'include_docs', 'attachments', 'conflicts', 'filter', 'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs']);
    /* istanbul ignore next */

    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        immediate(eventFunction);
      }

      inprogress = false;
    }).on('error', onError);
  }

  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }

  events.EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);
  delete this._listeners[id];
};
/* istanbul ignore next */


Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (hasLocalStorage()) {
    localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined' && typeof console[method] === 'function') {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes

  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);

  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  } // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout


  if (max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two

    max = maxTimeout;
  }

  var ratio = Math.random();
  var range = max - min;
  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;

  if (!min) {
    max = 2000;
  }

  return randomNumber(min, max);
} // designed to give info to browser users, who are disturbed
// when they see http errors in the console


function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

var assign;
{
  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    // lite Object.assign polyfill based on
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    assign = function assign(target) {
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  }
}
var assign$1 = assign;

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return pouchdbErrors.createError(pouchdbErrors.BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;
  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (_typeof(filterReturn) === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }

    return true;
  };
}

function flatten(arrs) {
  var res = [];

  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }

  return res;
} // shim for Function.prototype.name,
// for browsers that don't support it like IE

/* istanbul ignore next */


function f() {}

var hasName = f.name;
var res; // We dont run coverage in IE

/* istanbul ignore else */

if (hasName) {
  res = function res(fun) {
    return fun.name;
  };
} else {
  res = function res(fun) {
    var match = fun.toString().match(/^\s*function\s*(?:(\S+)\s*)?\(/);

    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  };
}

var res$1 = res; // Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case

function invalidIdError(id) {
  var err;

  if (!id) {
    err = pouchdbErrors.createError(pouchdbErrors.MISSING_ID);
  } else if (typeof id !== 'string') {
    err = pouchdbErrors.createError(pouchdbErrors.INVALID_ID);
  } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
    err = pouchdbErrors.createError(pouchdbErrors.RESERVED_ID);
  }

  if (err) {
    throw err;
  }
} // Checks if a PouchDB object is "remote" or not. This is


function isRemote(db) {
  if (typeof db._remote === 'boolean') {
    return db._remote;
  }
  /* istanbul ignore next */


  if (typeof db.type === 'function') {
    guardedConsole('warn', 'db.type() is deprecated and will be removed in ' + 'a future version of PouchDB');
    return db.type() === 'http';
  }
  /* istanbul ignore next */


  return false;
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) : events.EventEmitter.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }

  var parts = s.split('/');

  if (parts.length === 2) {
    return parts;
  }

  if (parts.length === 1) {
    return [s, s];
  }

  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
} // originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License


var keys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName = "queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g; // use the "loose" parser

/* eslint maxlen: 0, no-useless-escape: 0 */

var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });
  return uri;
} // Based on https://github.com/alexdavid/scope-eval v0.0.3
// (source: https://unpkg.com/scope-eval@0.0.3/scope_eval.js)
// This is basically just a wrapper around new Function()


function scopeEval(source, scope) {
  var keys = [];
  var values = [];

  for (var key in scope) {
    if (scope.hasOwnProperty(key)) {
      keys.push(key);
      values.push(scope[key]);
    }
  }

  keys.push(source);
  return Function.apply(null, keys).apply(null, values);
} // this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all


function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }

        doc = {};
      } // the user might change the _rev, so save it for posterity


      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({
          updated: false,
          rev: docRev
        });
      } // users aren't allowed to modify these values,
      // so reset them here


      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }

    return upsert(db, doc._id, diffFun);
  });
}

function rev(doc, deterministic_revs) {
  var clonedDoc = pouchdbUtils.clone(doc);

  if (!deterministic_revs) {
    return uuidV4.v4().replace(/-/g, '').toLowerCase();
  }

  delete clonedDoc._rev_tree;
  return pouchdbMd5.stringMd5(JSON.stringify(clonedDoc));
}

var uuid = uuidV4.v4;
exports.adapterFun = adapterFun;
exports.assign = assign$1;
exports.bulkGetShim = bulkGet;
exports.changesHandler = Changes;
exports.clone = clone;
exports.defaultBackOff = defaultBackOff;
exports.explainError = explainError;
exports.filterChange = filterChange;
exports.flatten = flatten;
exports.functionName = res$1;
exports.guardedConsole = guardedConsole;
exports.hasLocalStorage = hasLocalStorage;
exports.invalidIdError = invalidIdError;
exports.isRemote = isRemote;
exports.listenerCount = listenerCount;
exports.nextTick = immediate;
exports.normalizeDdocFunctionName = normalizeDesignDocFunctionName;
exports.once = once;
exports.parseDdocFunctionName = parseDesignDocFunctionName;
exports.parseUri = parseUri;
exports.pick = pick;
exports.rev = rev;
exports.scopeEval = scopeEval;
exports.toPromise = toPromise;
exports.upsert = upsert;
exports.uuid = uuid;

},{"16":16,"17":17,"18":18,"19":19,"2":2,"21":21,"3":3,"4":4,"5":5}],17:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"10":10}],18:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"5":5,"8":8}],19:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var pouchdbBinaryUtils = require(6);

var Md5 = _interopDefault(require(20));

var setImmediateShim = global.setImmediate || global.setTimeout;
var MD5_CHUNK_SIZE = 32768;

function rawToBase64(raw) {
  return pouchdbBinaryUtils.btoa(raw);
}

function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  }

  return blob.slice(start, end);
}

function appendBlob(buffer, blob, start, end, callback) {
  if (start > 0 || end < blob.size) {
    // only slice blob if we really need to
    blob = sliceBlob(blob, start, end);
  }

  pouchdbBinaryUtils.readAsArrayBuffer(blob, function (arrayBuffer) {
    buffer.append(arrayBuffer);
    callback();
  });
}

function appendString(buffer, string, start, end, callback) {
  if (start > 0 || end < string.length) {
    // only create a substring if we really need to
    string = string.substring(start, end);
  }

  buffer.appendBinary(string);
  callback();
}

function binaryMd5(data, callback) {
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.size;
  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new Md5() : new Md5.ArrayBuffer();
  var append = inputIsString ? appendString : appendBlob;

  function next() {
    setImmediateShim(loadNextChunk);
  }

  function done() {
    var raw = buffer.end(true);
    var base64 = rawToBase64(raw);
    callback(base64);
    buffer.destroy();
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    currentChunk++;

    if (currentChunk < chunks) {
      append(buffer, data, start, end, next);
    } else {
      append(buffer, data, start, end, done);
    }
  }

  loadNextChunk();
}

function stringMd5(string) {
  return Md5.hash(string);
}

exports.binaryMd5 = binaryMd5;
exports.stringMd5 = stringMd5;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"20":20,"6":6}],20:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // Node/CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Browser globals (with support for web workers)
    var glob;

    try {
      glob = window;
    } catch (e) {
      glob = self;
    }

    glob.SparkMD5 = factory();
  }
})(function (undefined) {
  'use strict';
  /*
   * Fastest md5 implementation around (JKM md5).
   * Credits: Joseph Myers
   *
   * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
   * @see http://jsperf.com/md5-shootout/7
   */

  /* this function is much faster,
    so if possible we use it. Some IEs
    are the only ones I know of that
    need the idiotic second function,
    generated by an if clause.  */

  var add32 = function add32(a, b) {
    return a + b & 0xFFFFFFFF;
  },
      hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }

  function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];
    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }

  function md5blk(s) {
    var md5blks = [],
        i;
    /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }

    return md5blks;
  }

  function md5blk_array(a) {
    var md5blks = [],
        i;
    /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }

    return md5blks;
  }

  function md51(s) {
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }

    s = s.substring(i - 64);
    length = s.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(state, tail);

      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    } // Beware that the final length might not fit in 32 bits so we take care of that


    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }

  function md51_array(a) {
    var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    } // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
    // containing the last element of the parent array if the sub array specified starts
    // beyond the length of the parent array - weird.
    // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue


    a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
    length = a.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(state, tail);

      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    } // Beware that the final length might not fit in 32 bits so we take care of that


    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }

  function rhex(n) {
    var s = '',
        j;

    for (j = 0; j < 4; j += 1) {
      s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
    }

    return s;
  }

  function hex(x) {
    var i;

    for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }

    return x.join('');
  } // In some cases the fast add32 function cannot be used..


  if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function add32(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
          msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    };
  } // ---------------------------------------------------

  /**
   * ArrayBuffer slice polyfill.
   *
   * @see https://github.com/ttaubert/node-arraybuffer-slice
   */


  if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    (function () {
      function clamp(val, length) {
        val = val | 0 || 0;

        if (val < 0) {
          return Math.max(val + length, 0);
        }

        return Math.min(val, length);
      }

      ArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength,
            begin = clamp(from, length),
            end = length,
            num,
            target,
            targetArray,
            sourceArray;

        if (to !== undefined) {
          end = clamp(to, length);
        }

        if (begin > end) {
          return new ArrayBuffer(0);
        }

        num = end - begin;
        target = new ArrayBuffer(num);
        targetArray = new Uint8Array(target);
        sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);
        return target;
      };
    })();
  } // ---------------------------------------------------

  /**
   * Helpers.
   */


  function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }

    return str;
  }

  function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;

    for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }

    return returnUInt8Array ? arr : buff;
  }

  function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }

  function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);
    result.set(new Uint8Array(first));
    result.set(new Uint8Array(second), first.byteLength);
    return returnUInt8Array ? result : result.buffer;
  }

  function hexToBinaryString(hex) {
    var bytes = [],
        length = hex.length,
        x;

    for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }

    return String.fromCharCode.apply(String, bytes);
  } // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation.
   *
   * Use this class to perform an incremental md5, otherwise use the
   * static methods instead.
   */


  function SparkMD5() {
    // call reset to init the instance
    this.reset();
  }
  /**
   * Appends a string.
   * A conversion will be applied if an utf8 string is detected.
   *
   * @param {String} str The string to be appended
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.append = function (str) {
    // Converts the string to utf8 bytes if necessary
    // Then append as binary
    this.appendBinary(toUtf8(str));
    return this;
  };
  /**
   * Appends a binary string.
   *
   * @param {String} contents The binary string to be appended
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.appendBinary = function (contents) {
    this._buff += contents;
    this._length += contents.length;
    var length = this._buff.length,
        i;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }

    this._buff = this._buff.substring(i - 64);
    return this;
  };
  /**
   * Finishes the incremental computation, reseting the internal state and
   * returning the result.
   *
   * @param {Boolean} raw True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        i,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
    }

    this._finish(tail, length);

    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();
    return ret;
  };
  /**
   * Resets the internal state of the computation.
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.reset = function () {
    this._buff = '';
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  /**
   * Gets the internal state of the computation.
   *
   * @return {Object} The state
   */


  SparkMD5.prototype.getState = function () {
    return {
      buff: this._buff,
      length: this._length,
      hash: this._hash
    };
  };
  /**
   * Gets the internal state of the computation.
   *
   * @param {Object} state The state
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.setState = function (state) {
    this._buff = state.buff;
    this._length = state.length;
    this._hash = state.hash;
    return this;
  };
  /**
   * Releases memory used by the incremental buffer and other additional
   * resources. If you plan to use the instance again, use reset instead.
   */


  SparkMD5.prototype.destroy = function () {
    delete this._hash;
    delete this._buff;
    delete this._length;
  };
  /**
   * Finish the final calculation based on the tail.
   *
   * @param {Array}  tail   The tail (will be modified)
   * @param {Number} length The length of the remaining buffer
   */


  SparkMD5.prototype._finish = function (tail, length) {
    var i = length,
        tmp,
        lo,
        hi;
    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(this._hash, tail);

      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    } // Do the final computation based on the tail and length
    // Beware that the final length may not fit in 32 bits so we take care of that


    tmp = this._length * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(this._hash, tail);
  };
  /**
   * Performs the md5 hash on a string.
   * A conversion will be applied if utf8 string is detected.
   *
   * @param {String}  str The string
   * @param {Boolean} raw True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.hash = function (str, raw) {
    // Converts the string to utf8 bytes if necessary
    // Then compute it using the binary function
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };
  /**
   * Performs the md5 hash on a binary string.
   *
   * @param {String}  content The binary string
   * @param {Boolean} raw     True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.hashBinary = function (content, raw) {
    var hash = md51(content),
        ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  }; // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation for array buffers.
   *
   * Use this class to perform an incremental md5 ONLY for array buffers.
   */


  SparkMD5.ArrayBuffer = function () {
    // call reset to init the instance
    this.reset();
  };
  /**
   * Appends an array buffer.
   *
   * @param {ArrayBuffer} arr The array to be appended
   *
   * @return {SparkMD5.ArrayBuffer} The instance itself
   */


  SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
        length = buff.length,
        i;
    this._length += arr.byteLength;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }

    this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
    return this;
  };
  /**
   * Finishes the incremental computation, reseting the internal state and
   * returning the result.
   *
   * @param {Boolean} raw True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << (i % 4 << 3);
    }

    this._finish(tail, length);

    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();
    return ret;
  };
  /**
   * Resets the internal state of the computation.
   *
   * @return {SparkMD5.ArrayBuffer} The instance itself
   */


  SparkMD5.ArrayBuffer.prototype.reset = function () {
    this._buff = new Uint8Array(0);
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  /**
   * Gets the internal state of the computation.
   *
   * @return {Object} The state
   */


  SparkMD5.ArrayBuffer.prototype.getState = function () {
    var state = SparkMD5.prototype.getState.call(this); // Convert buffer to a string

    state.buff = arrayBuffer2Utf8Str(state.buff);
    return state;
  };
  /**
   * Gets the internal state of the computation.
   *
   * @param {Object} state The state
   *
   * @return {SparkMD5.ArrayBuffer} The instance itself
   */


  SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    // Convert string to buffer
    state.buff = utf8Str2ArrayBuffer(state.buff, true);
    return SparkMD5.prototype.setState.call(this, state);
  };

  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
  /**
   * Performs the md5 hash on an array buffer.
   *
   * @param {ArrayBuffer} arr The array buffer
   * @param {Boolean}     raw True to get the raw string, false to get the hex one
   *
   * @return {String} The result
   */

  SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  };

  return SparkMD5;
});

},{}],21:[function(require,module,exports){
"use strict";

var v1 = require(24);

var v4 = require(25);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

},{"24":24,"25":25}],22:[function(require,module,exports){
"use strict";

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],23:[function(require,module,exports){
"use strict";

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && msCrypto.getRandomValues.bind(msCrypto);

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],24:[function(require,module,exports){
"use strict";

var rng = require(23);

var bytesToUuid = require(22); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html


var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/broofa/node-uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = rng();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"22":22,"23":23}],25:[function(require,module,exports){
"use strict";

var rng = require(23);

var bytesToUuid = require(22);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"22":22,"23":23}]},{},[1])(1)
});