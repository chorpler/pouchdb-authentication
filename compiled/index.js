"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("./admins");
var authentication_1 = require("./authentication");
var users_1 = require("./users");
var plugin = {};
plugin.login = authentication_1.logIn;
plugin.logIn = authentication_1.logIn;
plugin.logout = authentication_1.logOut;
plugin.logOut = authentication_1.logOut;
plugin.getSession = authentication_1.getSession;
plugin.getMembership = admins_1.getMembership;
plugin.signUpAdmin = admins_1.signUpAdmin;
plugin.deleteAdmin = admins_1.deleteAdmin;
plugin.getUsersDatabaseUrl = users_1.getUsersDatabaseUrl;
plugin.signup = users_1.signUp;
plugin.signUp = users_1.signUp;
plugin.getUser = users_1.getUser;
plugin.putUser = users_1.putUser;
plugin.deleteUser = users_1.deleteUser;
plugin.changePassword = users_1.changePassword;
plugin.changeUsername = users_1.changeUsername;
// export class PouchDBPlugin {
//   public login = logIn;
//   public logIn = logIn;
//   public logout = logOut;
//   public logOut = logOut;
//   public getSession = getSession;
//   public getMembership = getMembership;
//   public signUpAdmin = signUpAdmin;
//   public deleteAdmin = deleteAdmin;
//   public getUsersDatabaseUrl = getUsersDatabaseUrl;
//   public signup = signUp;
//   public signUp = signUp;
//   public getUser = getUser;
//   public putUser = putUser;
//   public deleteUser = deleteUser;
//   public changePassword = changePassword;
//   public changeUsername = changeUsername;
//   constructor() {
//   }
// }
// // let plugin:any = PouchDBPlugin;
// let plugin:PouchDBPlugin = new PouchDBPlugin();
if (typeof window !== 'undefined' && window.PouchDB) {
    window.PouchDB.plugin(plugin);
}
exports.default = plugin;
// export { plugin };
//# sourceMappingURL=index.js.map