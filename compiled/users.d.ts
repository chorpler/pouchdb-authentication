/// <reference types="pouchdb-core" />
import { PouchDBUserDoc } from './utils';
import { PutUserOptions } from './utils';
declare const getUsersDatabaseUrl: () => string;
declare const signUp: (username: string, password: string, opts: PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
declare const getUser: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDBUserDoc>;
declare const putUser: (username: string, opts: PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
declare const deleteUser: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
declare const changePassword: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
declare const changeUsername: (oldUsername: string, newUsername: string, opts: PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
export { getUsersDatabaseUrl, signUp, getUser, putUser, deleteUser, changePassword, changeUsername, };
