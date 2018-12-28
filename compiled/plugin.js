"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("./admins");
var authentication_1 = require("./authentication");
var users_1 = require("./users");
exports.plugin = {};
exports.plugin.login = authentication_1.logIn;
exports.plugin.logIn = authentication_1.logIn;
exports.plugin.logout = authentication_1.logOut;
exports.plugin.logOut = authentication_1.logOut;
exports.plugin.getSession = authentication_1.getSession;
exports.plugin.getMembership = admins_1.getMembership;
exports.plugin.signUpAdmin = admins_1.signUpAdmin;
exports.plugin.deleteAdmin = admins_1.deleteAdmin;
exports.plugin.getUsersDatabaseUrl = users_1.getUsersDatabaseUrl;
exports.plugin.signup = users_1.signUp;
exports.plugin.signUp = users_1.signUp;
exports.plugin.getUser = users_1.getUser;
exports.plugin.putUser = users_1.putUser;
exports.plugin.deleteUser = users_1.deleteUser;
exports.plugin.changePassword = users_1.changePassword;
exports.plugin.changeUsername = users_1.changeUsername;
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
    window.PouchDB.plugin(exports.plugin);
}
// export default plugin;
// export plugin;
//# sourceMappingURL=plugin.js.map