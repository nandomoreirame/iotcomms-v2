// import ApexCharts from 'apexcharts';

(function (window, Apex) {
  let lastDate = 0;
  let data = [];
  const TICKINTERVAL = 1;
  const XAXISRANGE = 10;

  function getDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      data.push({
        x,
        y,
      });
      lastDate = baseval;
      baseval += TICKINTERVAL;
      i++;
    }
  }

  function getNewSeries(baseval, yrange) {
    const newDate = baseval + TICKINTERVAL;
    lastDate = newDate;

    for (let i = 0; i < data.length - 10; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area
      // to prevent memory leaks
      data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
      data[i].y = 0;
    }

    data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
    });
  }

  function resetData() {
    // Alternatively, you can also reset the data at certain intervals
    // to prevent creating a huge series
    data = data.slice(data.length - 10, data.length);
  }

  const options = {
    series: [{
      data: data.slice(),
    }],
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Client CPU Utilization',
      align: 'left',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'numeric',
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100,
      min: 0,
    },
    legend: {
      show: false,
    },
  };

  const clientCpuChart = new Apex(document.querySelector('#client_cpu_chart'), options);
  clientCpuChart.render();

  window.setInterval(function () {
    getNewSeries(lastDate, { min: 90, max: 100 });
    clientCpuChart.updateSeries([{ data }]);
  }, 1000);
}(window, ApexCharts));
