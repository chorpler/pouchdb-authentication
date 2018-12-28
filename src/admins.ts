import { AuthError           } from './utils'       ;
import { PDB                 } from './utils'       ;
import { PouchDBUserDoc      } from './utils'       ;
import { PutUserOptions      } from './utils'       ;
import { BasicResponse       } from './utils'       ;
import { LoginOptions        } from './utils'       ;
import { CouchNodeMembership } from './utils'       ;
import { doFetch             } from './utils'       ;
import { getBasicAuthHeaders } from './utils'       ;
import { getBaseUrl          } from './utils'       ;
import { assign              } from 'pouchdb-utils' ;
import { toPromise           } from 'pouchdb-utils' ;


const getConfigUrl = function(db:PDB, nodeName?:string):string {
  return (nodeName ? '/_node/' + nodeName : '') + '/_config';
}

const getMembership = async function(opts:LoginOptions):Promise<CouchNodeMembership> {
  try {
    let db:PDB = this;
    let dbURL:string = getBaseUrl(db);
    let url:string = dbURL + '/_membership';
    let ajaxOpts:any = assign({
      method: 'GET',
      headers: getBasicAuthHeaders(db),
    }, (opts as any).ajax || {});
    let res:CouchNodeMembership = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const signUpAdmin = async function(username:string, password:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
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

    let membership:CouchNodeMembership
    let nodeName:string;
    try {
      membership = await db.getMembership(opts);
      // This is a CouchDB 2.x server
      nodeName = membership.all_nodes[0];
    } catch(err) {
      if(err.error && err.error === 'illegal_database_name') {
        throw err;
      } else {
        // This could be a CouchDB 1.x server
        nodeName = undefined;
      }
    }
    let configUrl:string = getConfigUrl(db, nodeName);
    let url:string = ((opts as any).configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
    let ajaxOpts:any = assign({
      method: 'PUT',
      processData: false,
      headers: getBasicAuthHeaders(db),
      body: '"' + password + '"',
    }, (opts as any).ajax || {});
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const deleteAdmin = async function(username:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    }
  
    let membership:CouchNodeMembership
    let nodeName:string;
    try {
      membership = await db.getMembership(opts);
      // This is a CouchDB 2.x server
      nodeName = membership.all_nodes[0];
    } catch(err) {
      if(err.error && err.error === 'illegal_database_name') {
        throw err;
      } else {
        // This could be a CouchDB 1.x server
        nodeName = undefined;
      }
    }
    let configUrl:string = getConfigUrl(db, nodeName);
    let url:string = ((opts as any).configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
    let ajaxOpts:any = assign({
      method: 'DELETE',
      processData: false,
      headers: getBasicAuthHeaders(db),
    }, (opts as any).ajax || {});

    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

export { getMembership, deleteAdmin, signUpAdmin };