/// <reference types="pouchdb-core" />
import { CouchNodeMembership } from './utils';
declare const getMembership: (opts: PouchDB.Core.Options) => Promise<CouchNodeMembership>;
declare const signUpAdmin: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
declare const deleteAdmin: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
export { getMembership, deleteAdmin, signUpAdmin };
