﻿var lastDate = 0;
var data = []
var TICKINTERVAL = 1
let XAXISRANGE = 10
function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
            x, y
        });
        lastDate = baseval
        baseval += TICKINTERVAL;
        i++;
    }
}
/*
getDayWiseTimeSeries(0, 10, {
    min: 30,
    max: 50
})
*/
function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    lastDate = newDate

    for (var i = 0; i < data.length - 10; i++) {
        // IMPORTANT
        // we reset the x and y of the data which is out of drawing area
        // to prevent memory leaks
        data[i].x = newDate - XAXISRANGE - TICKINTERVAL
        data[i].y = 0
    }

    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    })
}

function resetData() {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
    data = data.slice(data.length - 10, data.length);
}

new Vue({
    el: '#app',
    components: {
        apexchart: VueApexCharts,
    },
    data: {

        series: [{
            data: data.slice()
        }],
        chartOptions: {
            chart: {
                id: 'realtime',
                height: 350,
                type: 'area',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'IoT COMMS',
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'numeric',
                range: XAXISRANGE,
            },
            yaxis: {
                max: 100
            },
            legend: {
                show: false
            },
        },
    },
    mounted: function () {
        var me = this
        window.setInterval(function () {
            getNewSeries(lastDate, {
                min: 10,
                max: 90
            })

            me.$refs.chart.updateSeries([{
                data: data
            }])
        }, 500)

        // every 60 seconds, we reset the data to prevent memory leaks
        window.setInterval(function () {
            resetData()

            me.$refs.chart.updateSeries([{
                data
            }], false, true)
        }, 60000)
    },
})

