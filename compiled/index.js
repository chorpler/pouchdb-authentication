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
        this.login = authentication_1.logIn;
        this.logIn = authentication_1.logIn;
        this.logout = authentication_1.logOut;
        this.logOut = authentication_1.logOut;
        this.getSession = authentication_1.getSession;
        this.getMembership = admins_1.getMembership;
        this.signUpAdmin = admins_1.signUpAdmin;
        this.deleteAdmin = admins_1.deleteAdmin;
        this.getUsersDatabaseUrl = users_1.getUsersDatabaseUrl;
        this.signup = users_1.signUp;
        this.signUp = users_1.signUp;
        this.getUser = users_1.getUser;
        this.putUser = users_1.putUser;
        this.deleteUser = users_1.deleteUser;
        this.changePassword = users_1.changePassword;
        this.changeUsername = users_1.changeUsername;
    }
    return PouchDBPlugin;
}());
exports.PouchDBPlugin = PouchDBPlugin;
// let plugin:any = PouchDBPlugin;
var plugin = new PouchDBPlugin();
if (typeof window !== 'undefined' && window.PouchDB) {
    window.PouchDB.plugin(plugin);
}
exports.default = plugin;
// export { plugin };
//# sourceMappingURL=index.js.map