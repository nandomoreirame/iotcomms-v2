
new Vue({
    el: '#pie_app',
    components: {
      apexchart: VueApexCharts,
    },
    data: {

        series: [13, 33, 44, 55],

        chartOptions: {
        labels: ['Range', 'Kalman', 'Linear Regression', 'Store'],
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        },

        title: {
            text: 'Kernel Compute',
            align: 'left'
        },
      },


    },

    methods: {
      appendData: function () {
        var arr = this.series.slice()
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
        this.series = arr
      },

      removeData: function () {
        if(this.series.length === 1) return
        var arr = this.series.slice()
        arr.pop()
        this.series = arr
      },

      randomize: function () {
        this.series = this.series.map(function() {
          return Math.floor(Math.random() * (100 - 1 + 1)) + 1
        })
      },

      reset: function () {
        this.series = [44, 55, 13, 33]
      }
    },
  })