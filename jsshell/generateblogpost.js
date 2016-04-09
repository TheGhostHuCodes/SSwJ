var moment = require("moment");
var fs = require("fs");

var date = moment().format("YYYY-MM-DD-HH-mm");
var userName = process.env.USER;

var header = `
--Date: ${date}
--User: ${userName}
--Title:
--------------------------------------------------------------------------------`;

var fileName = `${ date }.md`;

if (fs.existsSync(fileName)) {
    console.log(`ERROR file exists : ${fileName}`);
} else {
    fs.writeFileSync(fileName, header);
}
