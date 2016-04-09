var fs = require("fs");
var path = require("path");

var xmlFile = path.join(process.env.HOME,
                        "Repos/SSwJ/MyFoodapediaData/Food_Display_Table.xml");
console.log(xmlFile);

if (!fs.existsSync(xmlFile)) {
    console.warn(`ERROR file doesn't exist: ${xmlFile}`);
    process.exit(1);
}
