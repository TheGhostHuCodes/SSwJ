var assert = require('assert');

var averages = require("../averages.js");

describe('Weekly Averages', () => {
    it('Should average weekly closing prices', () => {
        var dataRows = [
            [
              '2015-11-30',
              '24.93',
              '25.02',
              '24.65',
              '24.690001',
              '143800',
              '24.660123'
            ],
            [
              '2015-11-27',
              '24.959999',
              '25.129999',
              '24.73',
              '24.790001',
              '85100',
              '24.760003'
            ],
            [
              '2015-11-25',
              '24.91',
              '25.17',
              '24.889999',
              '24.940001',
              '90700',
              '24.909821'
            ],
        ];
        var weeklyAverages = averages.computeWeeklyAverage(dataRows);

        var expectedAverages = [
            { key: '2015-11-27', averageClosingPrice: 24.865001 },
            { key: '2015-11-30', averageClosingPrice: 24.690001 }
        ];
        assert.deepEqual(weeklyAverages, expectedAverages);
    });
});
