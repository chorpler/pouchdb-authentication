/// <reference types="pouchdb-core" />
export declare class PouchDBPlugin {
    login: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<import("./utils").LoginResponse>;
    logIn: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<import("./utils").LoginResponse>;
    logout: (opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    logOut: (opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    getSession: () => Promise<import("./utils").SessionResponse>;
    getMembership: (opts: PouchDB.Core.Options) => Promise<import("./utils").CouchNodeMembership>;
    signUpAdmin: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    deleteAdmin: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    getUsersDatabaseUrl: () => string;
    signup: (username: string, password: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    signUp: (username: string, password: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    getUser: (username: string, opts: PouchDB.Core.Options) => Promise<import("./utils").PouchDBUserDoc>;
    putUser: (username: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    deleteUser: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    changePassword: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    changeUsername: (oldUsername: string, newUsername: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    constructor();
}
declare let plugin: PouchDBPlugin;
export default plugin;
