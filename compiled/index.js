"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("./admins");
var authentication_1 = require("./authentication");
var users_1 = require("./users");
var plugin = {};
exports.plugin = plugin;
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
if (typeof window !== 'undefined' && window.PouchDB) {
    window.PouchDB.plugin(plugin);
}
//# sourceMappingURL=index.js.map