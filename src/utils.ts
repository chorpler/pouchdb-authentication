import   * as PouchDB      from "pouchdb-core"          ;
// import PouchDB from 'pouchdb-core';
import { btoa             } from "pouchdb-binary-utils" ;
import { Headers,         } from "pouchdb-fetch"        ;
// import { fetch,           } from "pouchdb-core"         ;
import { fetch as wFetch, } from "whatwg-fetch"         ;
import { assign, parseUri } from "pouchdb-utils"        ;

const StaticPouch:any = PouchDB;

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
  logIn(username: string, password: string,
        options?: PouchDB.Core.Options): Promise<LoginResponse>;

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
  signUp(username: string, password: string,
        options?: PutUserOptions): Promise<PouchDB.Core.Response>;

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
  deleteUser(username: string,
            options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Set new `password` for user `username`.
   */
  changePassword(username: string, password: string,
                options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Renames `oldUsername` to `newUsername`.
   */
  changeUsername(oldUsername: string, newUsername: string,
                options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Sign up a new admin.
   */
  signUpAdmin(username: string, password: string,
              options?: PutUserOptions): Promise<string>;

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
  if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationdebug) {
    window.PouchDB.emit('debug', ['authentication', ...args]);
    console.log("PDBAUTH: ", ...args);
  }
}

const getBaseUrl = function(db:PDB):string {
  // Use PouchDB.defaults' prefix, if any
  let fullName:string;
  let dbname:string = db.name;
  // let type:string = db.type();
  let prefix:string = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
  if(prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + db.name;
  } else {
    fullName = db.name;
  }

  let uri:any = parseUri(fullName);

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
        full = false;
      }
    }
    if(full) {
      baseURL = db.name;
    } else {
      baseURL = getBaseUrl(db);
    }

    if(url[0] === "/") {
      newurl = baseURL + url;
    } else {
      newurl = baseURL + "/" + url;
    }
    // if(url[0] === '/') {
    //   newurl = ".." + url;
    // }

    let dbname:string = db.name;
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
      res = await db.fetch(url, opts);
    } else {
      res = await fetch(newurl, opts);
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
      content.name = content.error;
      throw content;
    }
  } catch(err) {
    // console.log(`doFetch(): Fetch error:\n`, err);
    if(err && err.name === 'unknown_error') {
      err.message = (err.message + ' ' || '') +
          'Unknown error!  Did you remember to enable CORS?';
    }
    // callback(err);
    throw err;
  }
}

class AuthError extends Error {
  public status:number = 400;
  public name:string = "authentication_error";
  public message:string = "";
  public error:boolean = true;
  public taken:boolean = false;
  constructor(msg?:string) {
    super(msg);
    if(msg) {
      this.message = msg;
    }
    Error.captureStackTrace(this);
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
};
