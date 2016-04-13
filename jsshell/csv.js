require("shelljs/global");
var csv = require("csv");

var csvData = cat("../stocks.csv");

csv.parse(csvData, (error, rows) => {
    rows = rows.slice(1);

    var sum = 0;
    rows.forEach(r => { sum += parseFloat(r[4]); });
    var count = rows.length;
    echo(`Average: ${sum/count}`)
});
