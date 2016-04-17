var _ = require("lodash");
var moment = require("moment");

function average(values) {
    var sum = _.sum(values);
    return sum / values.length;
}

function computeWeeklyAverage(dataRows) {
    return _(dataRows)
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
}

module.exports = { average, computeWeeklyAverage };
