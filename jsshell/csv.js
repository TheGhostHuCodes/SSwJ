require("shelljs/global");
var csv = require("csv");
var _ = require("lodash");

var csvData = cat("../stocks.csv");

function average(values) {
    var sum = _.sum(values);
    return sum / values.length;
}

csv.parse(csvData, (error, rows) => {
    var dataRows = rows.slice(1);
    var sortedByClosingPrice =
        _(dataRows).sortBy(r => parseFloat(r[4])).value();
    echo(sortedByClosingPrice)
});
