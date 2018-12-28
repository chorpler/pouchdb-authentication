/// <reference types="pouchdb-core" />
export declare class PouchDBPlugin {
    static login: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<import("./utils").LoginResponse>;
    static logIn: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<import("./utils").LoginResponse>;
    static logout: (opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    static logOut: (opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    static getSession: () => Promise<import("./utils").SessionResponse>;
    static getMembership: (opts: PouchDB.Core.Options) => Promise<import("./utils").CouchNodeMembership>;
    static signUpAdmin: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    static deleteAdmin: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    static getUsersDatabaseUrl: () => string;
    static signup: (username: string, password: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    static signUp: (username: string, password: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    static getUser: (username: string, opts: PouchDB.Core.Options) => Promise<import("./utils").PouchDBUserDoc>;
    static putUser: (username: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    static deleteUser: (username: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    static changePassword: (username: string, password: string, opts: PouchDB.Core.Options) => Promise<PouchDB.Core.BasicResponse>;
    static changeUsername: (oldUsername: string, newUsername: string, opts: import("./utils").PutUserOptions) => Promise<PouchDB.Core.BasicResponse>;
    constructor();
}
declare let plugin: any;
export default plugin;
