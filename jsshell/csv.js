require("shelljs/global");
var csv = require("csv");
var _ = require("lodash");

var csvData = cat("../stocks.csv");

csv.parse(csvData, (error, rows) => {
    closingPrices = rows.slice(1).map(row => row[4]).map(parseFloat);
    var sum = _.sum(closingPrices);
    echo(`Average: ${sum/closingPrices.length}`)
});
