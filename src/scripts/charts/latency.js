// import ApexCharts from 'apexcharts';

(function (window, Apex) {
  let lastDate = 0;
  let data = [];
  const TICKINTERVAL = 1;
  const XAXISRANGE = 10;

  const getNewSeries = (baseval, yrange) => {
    const newDate = baseval + TICKINTERVAL;
    lastDate = newDate;

    for (let i = 0; i < data.length - 10; i++) {
      data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
      data[i].y = 0;
    }

    data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
    });

    return data;
  };

  const resetData = () => {
    data = data.slice(data.length - 10, data.length);
  };

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
      text: 'Latency in ms',
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

  const latencyChart = new Apex(document.querySelector('#latency_chart'), options);
  latencyChart.render();

  window.setInterval(() => {
    const newData = getNewSeries(lastDate, { min: 35, max: 20 });
    latencyChart.updateSeries([{ data: newData }]);
  }, 1000);
}(window, ApexCharts));
