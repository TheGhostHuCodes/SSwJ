require("shelljs/global");
var csv = require("csv");
var averages = require("./averages.js");

var csvData = cat("../stocks.csv");

csv.parse(csvData, (error, rows) => {
    var dataRows = rows.slice(1);
    echo(dataRows);
    var weeklyAverages = averages.computeWeeklyAverage(dataRows);
    echo(weeklyAverages)
});
