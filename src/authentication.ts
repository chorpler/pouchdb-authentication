import { AuthError           } from './utils'       ;
import { PDB                 } from './utils'       ;
import { LoginOptions        } from './utils'       ;
import { LoginResponse       } from './utils'       ;
import { BasicResponse       } from './utils'       ;
import { SessionResponse     } from './utils'       ;
import { doFetch             } from './utils'       ;
import { getBasicAuthHeaders } from './utils'       ;
import { assign, toPromise   } from 'pouchdb-utils' ;
import { Headers             } from 'pouchdb-fetch' ;

const logIn = async function(username:string, password:string, opts:LoginOptions):Promise<LoginResponse> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      // return callback(new AuthError('this plugin only works for the http/https adapter'));
      let err:Error = new Error("pouchdb-authentication plugin only works for the http/https adapter");
      throw err;
    }
  
    if(!username) {
      // return callback(new AuthError('you must provide a username'));
      let err:Error = new Error("you must provide a username");
      throw err;
    } else if (!password) {
      // return callback(new AuthError('you must provide a password'));
      let err:Error = new Error("you must provide a password");
      throw err;
    }
  
    let url:string = '/_session';
    let headers:Headers = getBasicAuthHeaders(db);
    headers.append('Content-Type', 'application/json');
    let ajaxOpts:any = assign({
      method: 'POST',
      // headers: assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
      headers: headers,
      body: {name: username, password: password},
    }, options.ajax || {});

    let res:LoginResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const logOut = async function (opts:LoginOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    let url:string = '/_session';
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

const getSession = async function ():Promise<SessionResponse> {
  try {
    let db:PDB = this;
    let url:string = '/_session';
    let ajaxOpts:any = {
      method: 'GET',
      headers: getBasicAuthHeaders(db),
    };
    let res:SessionResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

export { logIn, logOut, getSession };
