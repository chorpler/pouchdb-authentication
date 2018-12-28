declare const window:any;

import { deleteAdmin, getMembership, signUpAdmin } from "./admins";
import { getSession, logIn, logOut } from "./authentication";
import {
  changePassword,
  changeUsername,
  deleteUser,
  getUser,
  getUsersDatabaseUrl,
  putUser,
  signUp,
} from "./users";

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
export class PouchDBPlugin {
  public static login = logIn;
  public static logIn = logIn;
  public static logout = logOut;
  public static logOut = logOut;
  public static getSession = getSession;
  public static getMembership = getMembership;
  public static signUpAdmin = signUpAdmin;
  public static deleteAdmin = deleteAdmin;
  public static getUsersDatabaseUrl = getUsersDatabaseUrl;
  public static signup = signUp;
  public static signUp = signUp;
  public static getUser = getUser;
  public static putUser = putUser;
  public static deleteUser = deleteUser;
  public static changePassword = changePassword;
  public static changeUsername = changeUsername;
  constructor() {

  }
}

// let plugin:PouchDBPlugin = new PouchDBPlugin();
let plugin:any = PouchDBPlugin;

if(typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(plugin);
}

export default plugin;
// export { plugin };
