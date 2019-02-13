import   * as PouchDB      from "pouchdb-core"          ;
import { btoa             } from "pouchdb-binary-utils" ;
import { Headers          } from "pouchdb-fetch"        ;
import { fetch as pFetch  } from "pouchdb-fetch"        ;
import { fetch as wFetch, } from "whatwg-fetch"         ;
import { assign, parseUri } from "pouchdb-utils"        ;

const StaticPouch:any = PouchDB;

interface ParsedURI {
  anchor     : string;
  authority  : string;
  directory  : string;
  file       : string;
  host       : string;
  password  ?: string;
  path       : string;
  port       : string;
  protocol   : string;
  query     ?: string;
  queryKey  ?: any   ;
  relative   : string;
  source     : string;
  user      ?: string;
  userInfo  ?: string;
}

interface AuthHeader {
  username?:string;
  password?:string;
}

interface PDBOpts {
  adapter?:string;
  skip_setup?:boolean;
  auth?:AuthHeader;
  prefix?:string;
  deterministic_revs?:boolean;
  name?:string;
}

interface UserContext {
  name: string;
  roles?: string[];
}

interface User extends UserContext {
}

interface PouchDBUserDoc extends User {
  _id?:string;
  _rev?:string;
  [propName:string]:any;
}

interface LoginResponse extends PouchDB.Core.BasicResponse, UserContext {
}

interface SessionResponse extends PouchDB.Core.BasicResponse {
  info: {
    authenticated: string;
    authentication_db: string;
    authentication_handlers: string[];
  };
  userCtx: UserContext;
}

interface PutUserOptions extends PouchDB.Core.Options {
  metadata?: any;
  roles?: string[];
}

interface CouchNodeMembership {
  all_nodes:string[];
  cluster_nodes:string[];
}

interface Database<Content extends {} = {}> extends PouchDB.Static {
    /**
     * Log in an existing user.
     * Throws an error if the user doesn't exist yet, the password is wrong, the HTTP server is unreachable, or a meteor struck your computer.
     */
  logIn(username: string, password: string, options?: PouchDB.Core.Options): Promise<LoginResponse>;

  /**
   * Logs out whichever user is currently logged in.
   * If nobody's logged in, it does nothing and just returns `{"ok" : true}`.
   */
  logOut(): Promise<PouchDB.Core.BasicResponse>;

  /**
   * Returns information about the CouchDB node membership of the server for the current database.
   */
  getMembership(options?:LoginOptions):Promise<CouchNodeMembership>;

  /**
   * Returns information about the current session.
   * In other words, this tells you which user is currently logged in.
   */
  getSession(): Promise<SessionResponse>;

  /**
   * Sign up a new user who doesn't exist yet.
   * Throws an error if the user already exists or if the username is invalid, or if some network error occurred.
   * CouchDB has some limitations on user names (e.g. they cannot contain the character `:`).
   */
  signUp(username: string, password: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

  /**
   * Returns the user document associated with a username.
   * (CouchDB, in a pleasing show of consistency, stores users as JSON documents in the special `_users` database.)
   * This is the primary way to get metadata about a user.
   */
  getUser(username: string, options?: PouchDB.Core.Options):Promise<PouchDB.Core.Document<Content & User> & PouchDB.Core.GetMeta>;
  // getUser(username: string, options?: PouchDB.Core.Options):Promise<PouchDBUserDoc>;

  /**
   * Update the metadata of a user.
   */
  putUser(username: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

  /**
   * Delete a user.
   */
  deleteUser(username: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Set new `password` for user `username`.
   */
  changePassword(username: string, password: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Renames `oldUsername` to `newUsername`.
   */
  changeUsername(oldUsername: string, newUsername: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Sign up a new admin.
   */
  signUpAdmin(username: string, password: string, options?: PutUserOptions): Promise<string>;

  /**
   * Delete an admin.
   */
  deleteAdmin(username: string, options?: PouchDB.Core.Options): Promise<string>;
}

type PouchDatabase = Database<any>;

interface PDB extends PouchDatabase {
  __opts:PDBOpts;
  prefix?:string;
  type():string;
}

declare const window:any;

const debuglog = function(...args) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }
  if(window && window.PouchDB && typeof window.PouchDB.emit === 'function') {
    window.PouchDB.emit('debug', ['authentication', ...args]);
  }
  if(window && window.pouchdbauthenticationplugindebug === true) {
    console.log(...args);
  }
}

const debugloggroup = function(label) {
  if(window && window.pouchdbauthenticationplugindebug === true) {
    console.groupCollapsed(label);
  }
}

const debugloggroupend = function() {
  if(window && window.pouchdbauthenticationplugindebug === true) {
    console.groupEnd();
  }
}

const debuglogemph = function(msg) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }
  const es:string = "background-color:red; color:white;";
  if(window && window.PouchDB && typeof window.PouchDB.emit === 'function') {
    window.PouchDB.emit('debug', ['authentication', msg]);
  }
  if(window && window.pouchdbauthenticationplugindebug === true) {
    if(window.chrome) {
      console.log("%c" + msg, es);
    } else {
      console.log(msg);
    }
  }
}

const debugerr = function(...args) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.error(...args);
  // }
  let errs, strError, jsonError = {};
  if(window && (window.pouchdbauthenticationplugindebug || (window.PouchDB && typeof window.PouchDB.emit === 'function'))) {
    errs = [...args];
    for(let err of errs) {
      if(err instanceof AuthError) {
        jsonError = err.toJSON();
        strError = JSON.stringify(jsonError);
        break;
      } else if(err instanceof Error) {
        strError = JSON.stringify(err);
        jsonError = JSON.parse(strError);
        if(strError === '{}') {
          jsonError = {
            message: err.message || "unknown_error_message",
            name: err.name || "unknown_error_name",
            stack: err.stack || "unknown_error_stack",
          };
          strError = JSON.stringify(jsonError);
        }
        // else {

        // }
        break;
      }
    }
  }
  if(window && window.PouchDB && typeof window.PouchDB.emit === 'function') {
    window.PouchDB.emit('debug', ['authentication', "ERROR", ...args]);
    window.PouchDB.emit('debug', ['authentication', "STRERROR", strError]);
  }
  if(window && window.pouchdbauthenticationplugindebug === true) {
    const errcss:string = "font-weight: bold; background-color: rgba(255, 0, 0, 0.25);";
    if(errs[0]) {
      if(errs[0] instanceof AuthError) {
        console.log("%cPDBAUTH AUTHERROR:", errcss, jsonError);
        console.error(errs[0]);
      } else if(errs[0] instanceof Error) {
        console.log("%cPDBAUTH ERROR: ", errcss, jsonError);
        console.error(errs[0]);
      } else {
        console.error("%cPDBAUTH ERROR 1?: ", errcss, strError);
      }
    } else {
      console.error("%cPDBAUTH ERROR 2?: ", errcss, strError);
    }
  }
}
  // let err = [...args] || [{}];

const getBaseUrl = function(db:PDB):string {
  // Use PouchDB.defaults' prefix, if any
  let fullName:string;
  let dbname:string = db.name;
  // let type:string = db.type();
  let prefix:string = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
  if(prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }

  let uri:ParsedURI = parseUri(fullName);

  // Compute parent path for databases not hosted on domain root (see #215)
  let path:string = uri.path;
  let normalizedPath:string = path.endsWith('/') ? path.substr(0, -1) : path;
  let parentPath:string = normalizedPath.split('/').slice(0, -1).join('/');
  let portString:string = uri.port ? `:${uri.port}` : '';
  let baseURL:string = `${uri.protocol}://${uri.host}${portString}${parentPath}`;
  // let baseURL:string = uri.protocol + '://' + uri.host + (uri.port ? ':' + uri.port : '') + parentPath;
  
  // console.log(`getBaseUrl(): Base URL is '${baseURL}'`);
  debuglog(`getBaseUrl(): Base URL is '${baseURL}'`);
  return baseURL;
}

const getDatabaseUrl = function(db:PDB):string {
  let fullName:string;
  let dbname:string = db.name;
  // let type:string = db.type();
  let prefix:string = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
  if(prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }
  debuglog(`getDatabaseUrl(): Database URL is '${fullName}'`);
  return fullName;
}

const getRelativeComplexUrl = function(db:PDB, url:string):string {
  let dbBaseURL:string = getDatabaseUrl(db);
  let complexBaseUrl:string = makeBaseUrl(dbBaseURL, url);
  let dbname:string = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog(`getRelativeComplexUrl(): Relative complex URL for database '${dbname}' and URL '${url}' is '${complexBaseUrl}'`);
  return complexBaseUrl;
}

const getComplexBaseUrl = function(db:PDB, url:string):string {
  let dbBaseURL:string = getDatabaseUrl(db);
  let complexBaseUrl:string = makeBaseUrl(dbBaseURL, url);
  let dbname:string = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog(`getComplexBaseUrl(): Complex base URL for database '${dbname}' and URL '${url}' is '${complexBaseUrl}'`);
  return complexBaseUrl;
}

const makeBaseUrl = function(baseURL:string, newURL:string):string {
  // let newuri : ParsedURI = parseUri(newURL);
  // let puri   : ParsedURI = parseUri(baseURL);
  let outurl:string = "";
  baseURL = baseURL.slice(-1) === '/' ? baseURL.slice(0,-1) : baseURL;
  let baseuri:URL = new URL(baseURL);
  let puri:URL = new URL(newURL, baseURL);
  let relativePath:string = puri.pathname + puri.search;
  // let outurl:string = getURLWithoutSearchParams(baseURL);
  // outurl = outurl.slice(-1) === '/' ? outurl.slice(0,-1) : outurl;
  // let dir1:string = puri.directory + puri.file;
  let dir1:string = baseuri.pathname;
  let dirs:string[] = dir1.split('/');
  let len   : number = dirs.length;
  let last  : number = len - 1;
  let count : number = dirs[last] === "" ? len - 2 : len - 1;
  for (let i = 0; i < count; i++) {
    outurl += "../";
  }
  let addedpath:string = relativePath.slice(0,1) === '/' ? relativePath.slice(1) : relativePath;
  let newfile:string = addedpath;
  outurl += newfile;
  outurl = outurl.slice(0,1) === '/' ? outurl.slice(1) : outurl;
  debuglog(`makeBaseUrl(): Complicated base URL from '${baseURL}' and '${newURL}' is '${outurl}'`);
  return outurl;
}

const getURLWithoutSearchParams = function(url:string):string {
  let uri:ParsedURI = parseUri(url);
  let cleanURL:string = uri.protocol + "://" + uri.authority + uri.directory + uri.file;
  return cleanURL;
}

function getBasicAuthHeadersFor(username:string, password:string):Headers {
  let authString:string = username + ":" + password;
  let token:string = btoa(decodeURIComponent(encodeURIComponent(authString)));
  let headers:Headers = new Headers();
  headers.set('Authorization', 'Basic ' + token);
  return headers;
}

function getBasicAuthHeaders(db?:PDB):Headers {
  let auth:AuthHeader;
  if(!db) {
    return new Headers();
  }
  if(db.__opts && db.__opts.auth) {
    auth = db.__opts.auth;
  } else {
    let uri:any = parseUri(db.name);
    if(uri.user || uri.password) {
      auth = {
        username: uri.user,
        password: uri.password,
      };
    }
  }

  if(!auth) {
    return new Headers();
  }

  return getBasicAuthHeadersFor(auth.username, auth.password);
  // let str:string = auth.username + ':' + auth.password;
  // let token:string = btoa(decodeURIComponent(encodeURIComponent(str)));

  // let headers:Headers = new Headers();
  // headers.set('Authorization', 'Basic ' + token);

  // return headers;
}

async function doFetch(db:PDB, url:string, opts:any):Promise<any> {
  try {
    opts = assign(opts || {});
    // let dbname = db && typeof db.fetch === 'function' 
    let dbname:string = getDatabaseUrl(db);
    let groupLabel:string = `doFetch called for DB '${dbname}' and URL '${url}' …`;
    debugloggroup(groupLabel);
    debuglog(`doFetch(): Full DB is:`, db);
    // debuglog(`doFetch(): Called with url '${url}'`);
    debuglog(`doFetch(): Called with opts:`, opts);
    debugloggroupend();
    let full:boolean = true;
    let newurl:string;
    let baseURL:string;
    let res:Response;
    let RESERVED_KEYS:string[] = [
      '/_users',
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

    // if(RESERVED_KEYS.indexOf(url) > -1) {
    //   baseURL = getBaseUrl(db);
    // } else {
    //   baseURL = db.name;
    // }
    for(let key of RESERVED_KEYS) {
      if(url.includes(key)) {
      // if(url.startsWith(key)) {
        full = false;
      }
    }
    if(full) {
      baseURL = db.name;
    } else {
      // baseURL = getBaseUrl(db);
      baseURL = getComplexBaseUrl(db, url);
    }
    newurl = baseURL;

    // if(url[0] === "/") {
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
    
    if(opts.body && typeof opts.body !== 'string') {
      opts.body = JSON.stringify(opts.body);
    }
    
    // console.log(`doFetch(): DB is '${dbname}'`);
    // console.log(`doFetch(): URL is: `, url);
    // console.log(`doFetch(): opts is: `, opts);
    if(full) {
      // let res:Response = await db.fetch(newurl, opts);
      debuglog(`doFetch(): Fetching from url '${url}' via PouchDB.fetch() with options:`, opts);
      res = await db.fetch(url, opts);
    } else {
      debuglog(`doFetch(): Fetching from url '${newurl}' with options:`, opts);
      // res = await fetch(newurl, opts);
      // res = await wFetch(newurl, opts);
      // res = await pFetch(newurl, opts);
      res = await db.fetch(newurl, opts);
    }
    debuglog(`doFetch(): Response is: `, res);
    // let res:Response = await db.fetch(newurl, opts);
    // let res:Response = await StaticPouch.fetch(newurl, opts);
    let ok:boolean = res.ok;
    // console.log(`doFetch(): Fetch result:\n`, res);
    let content:any = await res.json();
    // if(ok) {
    //   callback(null, content);
    // } else {
    //   content.name = content.error;
    //   callback(content);
    // }
    // return res;
    if(ok) {
      return content;
    } else {
      // let text:string = "fetch result not ok";
      // let errText:string = content && typeof content.error === 'string' ? content.error : content && typeof content.message === 'string' ? content.message : typeof content === 'string' ? content : "unknown_error";
      // let finalErrorText:string =  `${text}: '${errText}'`;
      // let err:Error = new Error(finalErrorText);
      // let err:Error = new Error(errText);
      // throw err;
      let msg:string = res && typeof res.statusText === 'string' ? res.statusText : "unknown_error";
      let status:number = res && typeof res.status === 'number' ? res.status : 0;
      let err:AuthError = new AuthError(msg);
      err.status = status;
      if(content) {
        if(typeof content.error === 'string') {
          err.name = content.error;
          err.error = content.error;
        }
        if(typeof content.reason === 'string') {
          err.reason = content.reason;
        }
      }
      //  else if(msg === 'unknown_error') {
      //   err.name = msg;
      // }
      // content.name = content.error;
      throw err;
    }
  } catch(err) {
    // console.log(`doFetch(): Fetch error:\n`, err);
    if(err && err.name === 'unknown_error') {
      err.message = (err.message + ' ' || '') +
          'Unknown error!  Did you remember to enable CORS?';
    }
    debuglog(`doFetch(): Error during fetch!`);
    debugerr(err);
    // callback(err);
    throw err;
  }
}

class AuthError extends Error {
  public status:number = 400;
  public name:string = "authentication_error";
  // public message:string = "";
  public error:string|boolean = true;
  public taken:boolean = false;
  public reason?:string = "";
  public toJSON:Function;
  public toJson:Function;
  // public error?:string = "";
  // public 
  constructor(msg:string, ...params) {
    super(msg);
    let self = this;

    if(msg) {
      this.message = msg;
    }
    if(typeof Error !== 'undefined' && typeof Error.captureStackTrace === 'function') {
      // Error.captureStackTrace(this, AuthError);
      // Error.captureStackTrace(this);
      Error.captureStackTrace(self, AuthError);
      // Error.captureStackTrace(self, self.constructor);
    }
    if(!this.reason) {
      this.reason = this.message;
    }
    this.toJSON = () => {
      // debuglog(`AuthError.toJSON() called`);
      let out:any = Object.assign({}, this);
      out.message = this.message + "";
      // console.log(`AuthError.toJSON() called. Returning:`, out);
      return out;
    };
    this.toJson = () => {
      return this.toJSON();
    };
    return this;
  }
}

// function AuthError(message:string):void {
//   this.status = 400;
//   this.name = 'authentication_error';
//   this.message = message;
//   this.error = true;
//   try {
//     Error.captureStackTrace(this, AuthError);
//   } catch (e) {}
// }

// inherits(AuthError, Error);
type LoginOptions = PouchDB.Core.Options;
type BasicResponse = PouchDB.Core.BasicResponse;
export {
  debuglog,
  debuglogemph,
  debugloggroup,
  debugloggroupend,
  debugerr,
  AuthError,
  doFetch,
  getBasicAuthHeadersFor,
  getBasicAuthHeaders,
  getBaseUrl,
  AuthHeader,
  PDBOpts,
  UserContext,
  User,
  PDB,
  PouchDBUserDoc,
  LoginOptions,
  LoginResponse,
  BasicResponse,
  SessionResponse,
  PutUserOptions,
  CouchNodeMembership,
  parseUri,
  getComplexBaseUrl,
  getRelativeComplexUrl,
  makeBaseUrl,
  getURLWithoutSearchParams,
};
