var moment = require("moment");

var date = moment().format("YYYY-MM-DD-HH-mm")
var userName = process.env.USER;

console.log(`--Date: ${date}`);
console.log(`--User: ${userName}`);
console.log(`--Title: `);
console.log(`--------------------------------------------------------------------------------`);
