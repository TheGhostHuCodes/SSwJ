var fs = require("fs");
var prettyData = require("pretty-data").pd;

var xmlFile = process.argv[2];
if (!fs.existsSync(xmlFile)) {
    console.warn(`ERROR file doesn't exist: ${xmlFile}`);
    process.exit(1);
}

var xml = fs.readFileSync(xmlFile, 'utf8');

var prettyXml = prettyData.xml(xml);
console.log(prettyXml);
