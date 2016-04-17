var moment = require("moment");
require("shelljs/global");
var fs = require("fs");

/*global env exit*/
var date = moment().format("YYYY-MM-DD-HH-mm");
var userName = env.USER;

var header = `
--Date: ${date}
--User: ${userName}
--Title:
--------------------------------------------------------------------------------`;

var fileName = `${ date }.md`;

if (fs.existsSync(fileName)) {
    console.warn(`ERROR file exists : ${fileName}`);
    exit(1);
} else {
    console.log(`CREATING: ${fileName}`);
    header.to(fileName);
}
