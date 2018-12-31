"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pouchdb_binary_utils_1 = require("pouchdb-binary-utils");
var pouchdb_fetch_1 = require("pouchdb-fetch");
var pouchdb_utils_1 = require("pouchdb-utils");
var getBaseUrl = function (db) {
    // Use PouchDB.defaults' prefix, if any
    var fullName;
    if (db && db.prefix && ['http', 'https'].indexOf(db.type()) === -1) {
        var prefix = db.prefix;
        fullName = prefix + (prefix.endsWith('/') ? '' : '/') + db.name;
    }
    else {
        fullName = db.name;
    }
    var uri = pouchdb_utils_1.parseUri(fullName);
    // Compute parent path for databases not hosted on domain root (see #215)
    var path = uri.path;
    var normalizedPath = path.endsWith('/') ? path.substr(0, -1) : path;
    var parentPath = normalizedPath.split('/').slice(0, -1).join('/');
    var baseURL = uri.protocol + '://' +
        uri.host +
        (uri.port ? ':' + uri.port : '') +
        parentPath;
    console.log("getBaseUrl(): Base URL is '" + baseURL + "'");
    return baseURL;
};
exports.getBaseUrl = getBaseUrl;
function getBasicAuthHeaders(db) {
    var auth;
    if (db.__opts && db.__opts.auth) {
        auth = db.__opts.auth;
    }
    else {
        var uri = pouchdb_utils_1.parseUri(db.name);
        if (uri.user || uri.password) {
            auth = {
                username: uri.user,
                password: uri.password,
            };
        }
    }
    if (!auth) {
        return new pouchdb_fetch_1.Headers();
    }
    var str = auth.username + ':' + auth.password;
    var token = pouchdb_binary_utils_1.btoa(decodeURIComponent(encodeURIComponent(str)));
    var headers = new pouchdb_fetch_1.Headers();
    headers.set('Authorization', 'Basic ' + token);
    return headers;
}
exports.getBasicAuthHeaders = getBasicAuthHeaders;
function doFetch(db, url, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var newurl, baseURL, RESERVED_KEYS, res, ok, content, text, errText, finalErrorText, err, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    opts = pouchdb_utils_1.assign(opts || {});
                    newurl = void 0;
                    baseURL = void 0;
                    RESERVED_KEYS = [
                        '/_session',
                        '/_active_tasks',
                        '/_all_dbs',
                        '/_dbs_info',
                        '/_cluster_setup',
                        '/_db_updates',
                        '/_membership',
                        '/_replicate',
                        '/_scheduler',
                        '/_node',
                        '/_utils',
                        '/_up',
                        '/_uuids',
                        '/favicon.ico',
                    ];
                    if (RESERVED_KEYS.indexOf(url) > -1) {
                        baseURL = getBaseUrl(db);
                    }
                    else {
                        baseURL = db.name;
                    }
                    if (url[0] === "/") {
                        newurl = baseURL + url;
                    }
                    else {
                        newurl = baseURL + "/" + url;
                    }
                    // if(url[0] === '/') {
                    //   newurl = ".." + url;
                    // }
                    console.log("doFetch(): DB is: ", db);
                    console.log("doFetch(): URL is: ", url);
                    console.log("doFetch(): opts is: ", opts);
                    if (opts.body && typeof opts.body !== 'string') {
                        opts.body = JSON.stringify(opts.body);
                    }
                    return [4 /*yield*/, pouchdb_fetch_1.fetch(newurl, opts)];
                case 1:
                    res = _a.sent();
                    ok = res.ok;
                    return [4 /*yield*/, res.json()];
                case 2:
                    content = _a.sent();
                    // if(ok) {
                    //   callback(null, content);
                    // } else {
                    //   content.name = content.error;
                    //   callback(content);
                    // }
                    // return res;
                    if (ok) {
                        return [2 /*return*/, content];
                    }
                    else {
                        text = "fetch result not ok";
                        errText = content && typeof content.error === 'string' ? content.error : content && typeof content.message === 'string' ? content.message : typeof content === 'string' ? content : "unknown_error";
                        finalErrorText = text + ": '" + errText + "'";
                        err = new Error(finalErrorText);
                        throw err;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    if (err_1 && err_1.name === 'unknown_error') {
                        err_1.message = (err_1.message + ' ' || '') +
                            'Unknown error!  Did you remember to enable CORS?';
                    }
                    // callback(err);
                    throw err_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.doFetch = doFetch;
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError(msg) {
        var _this = _super.call(this, msg) || this;
        _this.status = 400;
        _this.name = "authentication_error";
        _this.message = "";
        _this.error = true;
        _this.taken = false;
        if (msg) {
            _this.message = msg;
        }
        Error.captureStackTrace(_this);
        return _this;
    }
    return AuthError;
}(Error));
exports.AuthError = AuthError;
//# sourceMappingURL=utils.js.map