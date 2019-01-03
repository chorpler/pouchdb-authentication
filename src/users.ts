import { AuthError           } from './utils'       ;
import { PDB                 } from './utils'       ;
import { PouchDBUserDoc      } from './utils'       ;
import { PutUserOptions      } from './utils'       ;
import { BasicResponse       } from './utils'       ;
import { LoginOptions        } from './utils'       ;
import { doFetch             } from './utils'       ;
import { getBasicAuthHeaders } from './utils'       ;
import { getBaseUrl          } from './utils'       ;
import { assign              } from 'pouchdb-utils' ;
import { clone               } from 'pouchdb-utils' ;
import { toPromise           } from 'pouchdb-utils' ;

import * as PouchDB from 'pouchdb-core';

const getUsersDatabaseUrl = function():string {
  let db:PDB = this;
  let userDBURL:string = getBaseUrl(db) + '/_users';
  // console.log(`getUsersDatabaseUrl(): URL and DB is:\n`, userDBURL);
  console.log(`getUsersDatabaseUrl(): DB is:`, db);
  return userDBURL;
};

const updateUser = async function(db:PDB, user:PouchDBUserDoc, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    let options:any = opts != undefined ? opts : {};
    let reservedWords:string[] = [
      '_id',
      '_rev',
      'name',
      'type',
      'roles',
      'password',
      'password_scheme',
      'iterations',
      'derived_key',
      'salt',
    ];
  
    if(opts.metadata) {
      for(let key in opts.metadata) {
        if(opts.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
          let err:AuthError = new AuthError('cannot use reserved word in metadata: "' + key + '"');
          throw err;
        }
      }
      user = assign(user, opts.metadata);
    }
  
    if(opts.roles) {
      user = assign(user, {roles: opts.roles});
    }
  
    let url:string = '/_users/' + encodeURIComponent(user._id);
    let ajaxOpts:any = assign({
      method: 'PUT',
      body: user,
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
  
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const signUp = async function (username:string, password:string, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if (!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    } else if (!password) {
      let err:AuthError = new AuthError('You must provide a password');
      throw err;
    }
  
    let userId:string = 'org.couchdb.user:' + username;
    let user:PouchDBUserDoc = {
      name: username,
      password: password,
      roles: [],
      type: 'user',
      _id: userId,
    };
  
    let res:BasicResponse = await updateUser(db, user, options);
    return res;
  } catch(err) {
    throw err;
  }
};

const getUser = async function(username:string, opts:LoginOptions):Promise<PouchDBUserDoc> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(!username) {
      let err:AuthError = new AuthError('you must provide a username');
      throw err;
    }
  
    let url:string = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
    let ajaxOpts:any = assign({
      method: 'GET',
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
  
    let res:PouchDBUserDoc = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const putUser = async function (username:string, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    }
  
    let user:PouchDBUserDoc = await db.getUser(username, options);
    let res:BasicResponse = await updateUser(db, user, options);
    return res;
  } catch(err) {
    throw err;
  }
};

const deleteUser = async function(username:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if (['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    }
  
    let user:PouchDBUserDoc = await db.getUser(username, options);
    let url:string = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
    let ajaxOpts:any = assign({
      method: 'DELETE',
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const changePassword = async function(username:string, password:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    } else if(!password) {
      let err:AuthError = new AuthError('You must provide a password');
      throw err;
    }

    let user:PouchDBUserDoc = await db.getUser(username, options);
    user.password = password;
    let url:string = '/_users/' + encodeURIComponent(user._id);
    let ajaxOpts:any = assign({
      method: 'PUT',
      headers: getBasicAuthHeaders(db),
      body: user,
    }, options.ajax || {});
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const changeUsername = async function(oldUsername:string, newUsername:string, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    let USERNAME_PREFIX:string = 'org.couchdb.user:';
    const fetch = async function(url:string, opts:LoginOptions):Promise<BasicResponse> {
      try {
        let options:any = opts != undefined ? opts : {};
        let res:BasicResponse = await doFetch(db, url, options);
        return res; 
      } catch(err) {
        throw err;
      }
    };
    const updateUser = async function(user:PouchDBUserDoc, opts:LoginOptions):Promise<BasicResponse> {
      try {
        let options:any = opts != undefined ? opts : {};
        let url:string = '/_users/' + encodeURIComponent(user._id);
        let updateOpts:any = assign({
          method: 'PUT',
          headers: getBasicAuthHeaders(db),
          body: user,
        }, options.ajax || {});
    
        let res:BasicResponse = await fetch(url, updateOpts);
        return res;
      } catch(err) {
        throw err;
      }
    };
    options.ajax = options.ajax || {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    }
    if(!newUsername) {
      let err:AuthError = new AuthError('You must provide a new username');
      throw err;
    }
    if(!oldUsername) {
      let err:AuthError = new AuthError('You must provide a username to rename');
      throw err;
    }
    try {
      let res:PouchDBUserDoc = await db.getUser(newUsername, options);
      let err:AuthError = new AuthError('user already exists');
      err.taken = true;
      throw err;
    } catch(err) {
      try {
        let user:PouchDBUserDoc = await db.getUser(oldUsername, options);
        let newUser:PouchDBUserDoc = clone(user);
        delete newUser._rev;
        newUser._id = USERNAME_PREFIX + newUsername;
        newUser.name = newUsername;
        newUser.roles = options.roles || user.roles || [];
        let res:BasicResponse = await updateUser(newUser, options);
        user._deleted = true;
        res = await updateUser(user, options);
        return res;
      } catch(err) {
        throw err;
      }
    }
  } catch(err) {
    throw err;
  }
};

export {
  getUsersDatabaseUrl,
  signUp,
  getUser,
  putUser,
  deleteUser,
  changePassword,
  changeUsername,
};
