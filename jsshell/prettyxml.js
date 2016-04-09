var fs = require("fs");
var path = require("path");
var expandTilde = require("expand-tilde");
var prettyData = require("pretty-data").pd;

var xmlFile =
  expandTilde("~/Repos/SSwJ/MyFoodapediaData/Food_Display_Table.xml");

console.log(xmlFile);

if (!fs.existsSync(xmlFile)) {
    console.warn(`ERROR file doesn't exist: ${xmlFile}`);
    process.exit(1);
}

var xml = fs.readFileSync(xmlFile, 'utf8');
console.log(xml);

var prettyXml = prettyData.xml(xml);
console.log(prettyXml);
