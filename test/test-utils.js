var PouchDB = require('pouchdb-core');
var PouchHttp = require('pouchdb-adapter-http');
var Authentication = require('../lib');
var PouchDBDebug = require('pouchdb-debug');
// var PouchFetch = require('pouchdb-fetch');

PouchDB.plugin(PouchHttp);
PouchDB.plugin(Authentication.default);
PouchDB.plugin(PouchDBDebug);

var {fetch} = require('pouchdb-fetch');
// var fetch = require('pouchdb-fetch').fetch;
// var fetch = PouchFetch.fetch;
var testNumber = 1;
var esstart   = "margin-top: 50px; margin-bottom: 5px; background-color: blue; color: white;";
var esfinish  = "margin-top: 5px; margin-bottom: 50px; background-color: blue; color: white;";
var espassed  = "margin-top: 5px; margin-bottom: 50px; border: 1px solid green; color: green; font-weight: bold;";
var esfailed  = "margin-top: 5px; margin-bottom: 50px; border: 1px solid red; background-color: rgba(32, 0, 128, 0); color: red; font-weight: bold;";
var esunknown = "margin-top: 5px; margin-bottom: 50px; border: 1px solid blue; background-color: rgba(32, 0, 128, 0); color: blue; font-weight: bold;";

const debuglog = Authentication.debuglog;
const debugloggroup = Authentication.debugloggroup;
const debugloggroupend = Authentication.deubgloggroupend;

function showTestStart(context) {
  let ctx = context;
  let testName = "UNKNOWN_TEST";
  // console.log(`SHOWTESTSTART: Context is:`, ctx);
  if (ctx && ctx.currentTest && ctx.currentTest.title) {
    testName = ctx.currentTest.title;
  }
  debuglog(`%c<===== START TEST ${testNumber} ('${testName}') =====>`, esstart);
  // console.log(`%c<===== START TEST ${testNumber} ('${testName}') =====>`, esstart);
}

function showTestResult(context) {
  let ctx = context;
  // console.log(`SHOWTESTRESULT: Context is:`, ctx);
  let testName = "UNKNOWN_TEST", state = "UNKNOWN";
  if (ctx && ctx.currentTest && ctx.currentTest.title) {
    testName = ctx.currentTest.title;
    state    = ctx.currentTest.state;
  }
  if (state === 'passed') {
    debuglog(`%c<===== RESULT: PASSED TEST ${testNumber++} ('${testName}') =====>`, espassed);
    // console.log(`%c<===== RESULT: PASSED TEST ${testNumber++} ('${testName}') =====>`, espassed);
  } else if (state === 'failed') {
    debuglog(`%c<===== RESULT: FAILED TEST ${testNumber++} ('${testName}') =====>`, esfailed);
    // console.log(`%c<===== RESULT: FAILED TEST ${testNumber++} ('${testName}') =====>`, esfailed);
  } else {
    debuglog(`%c<===== RESULT: ?????? TEST ${testNumber++} ('${testName}') =====>`, esunknown);
    // console.log(`%c<===== RESULT: ?????? TEST ${testNumber++} ('${testName}') =====>`, esunknown);
  }
}


module.exports = {
  testNumber     : testNumber     ,
  esstart        : esstart        ,
  esfinish       : esfinish       ,
  espassed       : espassed       ,
  esfailed       : esfailed       ,
  esunknown      : esunknown      ,
  showTestStart  : showTestStart  ,
  showTestResult : showTestResult ,
};

module.exports.TestPouch = PouchDB.defaults({
  fetch: function (url, opts) {
    opts.credentials = 'include';
    return fetch(url, opts);
  },
  skip_setup: true,
});

module.exports.getConfig = function () {
  if (typeof window !== 'undefined') {
    window['pouchdbauthenticationplugin'] = Authentication;
    // window['pouchdbauthenticationplugindebug'] = true;
    window['pouchdbauthenticationplugindebug'] = false;
    window['AuthError'] = Authentication.AuthError;
    window['PouchDB'] = PouchDB;
    window['toggledebug'] = function () { window['pouchdbauthenticationplugindebug'] = !window['pouchdbauthenticationplugindebug']; return window['pouchdbauthenticationplugindebug']; };

    // Object.defineProperty(window, 'debugtoggle', {
    //   get: function () {
    //     window['pouchdbauthenticationplugindebug'] = !window['pouchdbauthenticationplugindebug'];
    //     return window['pouchdbauthenticationplugindebug'];
    //   },
    //   configurable: true,
    // });
  }
  return typeof window !== 'undefined' ? window.__karma__.config : global.__testConfig__;
};

module.exports.ensureUsersDatabaseExists = function (db) {
  var usersUrl = db.getUsersDatabaseUrl();
  var usersDb = new this.TestPouch(usersUrl, {skip_setup: false});
  return usersDb.info();
};

module.exports.deleteUsers = function (db, users) {
  var usersUrl = db.getUsersDatabaseUrl();
  var usersDb = new this.TestPouch(usersUrl);
  return usersDb.allDocs({
    include_docs: true,
    keys: users.map(function (user) {
      return 'org.couchdb.user:' + user;
    }),
  }).then(function (res) {
    var rows = res.rows.filter(function (row) {
      return row.doc;
    });
    var docs = rows.map(function (row) {
      row.doc._deleted = true;
      return row.doc;
    });
    return usersDb.bulkDocs({docs: docs});
  });
};
