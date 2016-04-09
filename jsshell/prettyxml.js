var fs = require("fs");
require("shelljs/global");
var prettyData = require("pretty-data").pd;

var xmlFile = process.argv[2];
if (!fs.existsSync(xmlFile)) {
    console.warn(`ERROR file doesn't exist: ${xmlFile}`);
    exit(1);
}

var xml = cat(xmlFile);

var prettyXml = prettyData.xml(xml);
console.log(prettyXml);
