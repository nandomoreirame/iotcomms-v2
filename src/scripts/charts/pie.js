import jQuery from 'jquery';

(function (window, Apex, $) {
  const options = {
    series: [13, 33, 44, 55],
    labels: ['Range', 'Kalman', 'Linear Regression', 'Store'],
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    },
    title: {
      text: 'Kernel Compute',
      align: 'left',
    },
  };

  const pieChart = new Apex(document.querySelector('#pie_chart'), options);

  setTimeout(() => {
    $('.pie-loading').remove();
    pieChart.render();
  }, 3000);
}(window, ApexCharts, jQuery));
