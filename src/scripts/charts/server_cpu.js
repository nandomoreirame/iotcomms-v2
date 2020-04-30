// import ApexCharts from 'apexcharts';

let lastDate = 0;
let data = []
let TICKINTERVAL = 1
let XAXISRANGE = 10

function getNewSeries(baseval, yrange) {
  let newDate = baseval + TICKINTERVAL;
  lastDate = newDate

  for (let i = 0; i < data.length - 10; i++) {
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

let options = {
  series: [{
    data: data.slice()
  }],
  chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
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
    text: 'Server CPU Utilization',
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
    max: 100,
    min: 0
  },
  legend: {
    show: false
  },
};

let chart = new ApexCharts(document.querySelector("#server_cpu_chart"), options);
chart.render();


window.setInterval(function () {
  getNewSeries(lastDate, {
    min: 80,
    max: 95
  })

  chart.updateSeries([{
    data: data
  }])
}, 1000)
