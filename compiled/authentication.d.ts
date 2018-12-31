/// <reference types="pouchdb-core" />
import { LoginResponse } from './utils';
import { SessionResponse } from './utils';
declare const logIn: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<LoginResponse>;
declare const logOut: (opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
declare const getSession: () => Promise<SessionResponse>;
export { logIn, logOut, getSession };
