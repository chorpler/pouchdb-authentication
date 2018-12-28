"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("./admins");
var authentication_1 = require("./authentication");
var users_1 = require("./users");
// let plugin:any = {};
// plugin.login = logIn;
// plugin.logIn = logIn;
// plugin.logout = logOut;
// plugin.logOut = logOut;
// plugin.getSession = getSession;
// plugin.getMembership = getMembership;
// plugin.signUpAdmin = signUpAdmin;
// plugin.deleteAdmin = deleteAdmin;
// plugin.getUsersDatabaseUrl = getUsersDatabaseUrl;
// plugin.signup = signUp;
// plugin.signUp = signUp;
// plugin.getUser = getUser;
// plugin.putUser = putUser;
// plugin.deleteUser = deleteUser;
// plugin.changePassword = changePassword;
// plugin.changeUsername = changeUsername;
var PouchDBPlugin = /** @class */ (function () {
    function PouchDBPlugin() {
    }
    PouchDBPlugin.login = authentication_1.logIn;
    PouchDBPlugin.logIn = authentication_1.logIn;
    PouchDBPlugin.logout = authentication_1.logOut;
    PouchDBPlugin.logOut = authentication_1.logOut;
    PouchDBPlugin.getSession = authentication_1.getSession;
    PouchDBPlugin.getMembership = admins_1.getMembership;
    PouchDBPlugin.signUpAdmin = admins_1.signUpAdmin;
    PouchDBPlugin.deleteAdmin = admins_1.deleteAdmin;
    PouchDBPlugin.getUsersDatabaseUrl = users_1.getUsersDatabaseUrl;
    PouchDBPlugin.signup = users_1.signUp;
    PouchDBPlugin.signUp = users_1.signUp;
    PouchDBPlugin.getUser = users_1.getUser;
    PouchDBPlugin.putUser = users_1.putUser;
    PouchDBPlugin.deleteUser = users_1.deleteUser;
    PouchDBPlugin.changePassword = users_1.changePassword;
    PouchDBPlugin.changeUsername = users_1.changeUsername;
    return PouchDBPlugin;
}());
exports.PouchDBPlugin = PouchDBPlugin;
// let plugin:PouchDBPlugin = new PouchDBPlugin();
var plugin = PouchDBPlugin;
if (typeof window !== 'undefined' && window.PouchDB) {
    window.PouchDB.plugin(plugin);
}
exports.default = plugin;
// export { plugin };
//# sourceMappingURL=index.js.map