require("shelljs/global");
var csv = require("csv");
var _ = require("lodash");
var moment = require("moment");

var csvData = cat("../stocks.csv");

function average(values) {
    var sum = _.sum(values);
    return sum / values.length;
}

csv.parse(csvData, (error, rows) => {
    var dataRows = rows.slice(1);
    var weeklyAverages =
        _(dataRows)
            .groupBy(r => moment(r[0]).week())
            .map((value, key) =>
                 {
                     var closingPrices =
                         _(value).map(v => v[4]).map(parseFloat).value();
                     return {
                         key: value[0][0],
                             averageClosingPrice: average(closingPrices)
                     }
                 })
            .value();
    echo(weeklyAverages)
});
