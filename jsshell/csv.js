require("shelljs/global");
var csv = require("csv");
var _ = require("lodash");

var csvData = cat("../stocks.csv");

function average(values) {
    var sum = _.sum(values);
    return sum / values.length;
}

csv.parse(csvData, (error, rows) => {
    closingPrices = rows.slice(1).map(row => row[4]).map(parseFloat);
    echo(`Average: ${average(closingPrices)}`)
});
