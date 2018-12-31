/// <reference types="pouchdb-core" />
import { Headers } from "pouchdb-fetch";
interface AuthHeader {
    username?: string;
    password?: string;
}
interface PDBOpts {
    adapter?: string;
    skip_setup?: boolean;
    auth?: AuthHeader;
    prefix?: string;
    deterministic_revs?: boolean;
    name?: string;
}
interface UserContext {
    name: string;
    roles?: string[];
}
interface User extends UserContext {
}
interface PouchDBUserDoc extends User {
    _id?: string;
    _rev?: string;
    [propName: string]: any;
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
    all_nodes: string[];
    cluster_nodes: string[];
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
    getMembership(options?: LoginOptions): Promise<CouchNodeMembership>;
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
    getUser(username: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Document<Content & User> & PouchDB.Core.GetMeta>;
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
declare type PouchDatabase = Database<any>;
interface PDB extends PouchDatabase {
    __opts: PDBOpts;
    prefix?: string;
    type(): string;
}
declare const getBaseUrl: (db: PDB) => string;
declare function getBasicAuthHeaders(db: PDB): Headers;
declare function doFetch(db: PDB, url: string, opts: any): Promise<any>;
declare class AuthError extends Error {
    status: number;
    name: string;
    message: string;
    error: boolean;
    taken: boolean;
    constructor(msg?: string);
}
declare type LoginOptions = PouchDB.Core.Options;
declare type BasicResponse = PouchDB.Core.BasicResponse;
export { AuthError, doFetch, getBasicAuthHeaders, getBaseUrl, AuthHeader, PDBOpts, UserContext, User, PDB, PouchDBUserDoc, LoginOptions, LoginResponse, BasicResponse, SessionResponse, PutUserOptions, CouchNodeMembership, };
