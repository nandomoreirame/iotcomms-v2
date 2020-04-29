/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scripts */ "./src/scripts/index.js");

__webpack_require__(/*! ./scripts/charts/iotcomms */ "./src/scripts/charts/iotcomms.js");

__webpack_require__(/*! ./scripts/charts/pie */ "./src/scripts/charts/pie.js");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scripts/charts/iotcomms.js":
/*!****************************************!*\
  !*** ./src/scripts/charts/iotcomms.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lastDate = 0;
var data = [];
var TICKINTERVAL = 1;
var XAXISRANGE = 10;

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;

  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    data.push({
      x: x,
      y: y
    });
    lastDate = baseval;
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
  lastDate = newDate;

  for (var i = 0; i < data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
    data[i].y = 0;
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  });
}

function resetData() {
  // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
  data = data.slice(data.length - 10, data.length);
}

new Vue({
  el: '#app',
  components: {
    apexchart: VueApexCharts
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
        range: XAXISRANGE
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    }
  },
  mounted: function mounted() {
    var me = this;
    window.setInterval(function () {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      });
      me.$refs.chart.updateSeries([{
        data: data
      }]);
    }, 500); // every 60 seconds, we reset the data to prevent memory leaks

    window.setInterval(function () {
      resetData();
      me.$refs.chart.updateSeries([{
        data: data
      }], false, true);
    }, 60000);
  }
});

/***/ }),

/***/ "./src/scripts/charts/pie.js":
/*!***********************************!*\
  !*** ./src/scripts/charts/pie.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

new Vue({
  el: '#pie_app',
  components: {
    apexchart: VueApexCharts
  },
  data: {
    series: [13, 33, 44, 55],
    chartOptions: {
      labels: ['Range', 'Kalman', 'Linear Regression', 'Store'],
      chart: {
        width: 380,
        type: 'donut'
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
        height: 230
      },
      title: {
        text: 'Kernel Compute',
        align: 'left'
      }
    }
  },
  methods: {
    appendData: function appendData() {
      var arr = this.series.slice();
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
      this.series = arr;
    },
    removeData: function removeData() {
      if (this.series.length === 1) return;
      var arr = this.series.slice();
      arr.pop();
      this.series = arr;
    },
    randomize: function randomize() {
      this.series = this.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      });
    },
    reset: function reset() {
      this.series = [44, 55, 13, 33];
    }
  }
});

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var workload = {
//     "city": {
//         name: "City",
//         description: "This is an urban environmental monitoring project that has used crowd-sourcing to deploy sensors at 7 cities across 3 continents in 2015, with about 12 sensors per city. Five timestamped observations, outdoor temperature, humidity, ambient light, dust and air quality, are reported every minute by each sensor along with metadata on sensor ID and geolocation. Besides urban sensing, this also captures the vagaries of using crowd-sourcing for large IoT deployments",
//         data: "timestamp , source , longitude , latitude , temperature , humidity , light , dust , airquality_raw , location , type"
//     }
// }
var workloads = [{
  type: 'actor',
  // sensor - hybrid
  label: 'TEMPERATURE',
  data: {
    'device_id': 'string',
    'latitude': 'float',
    'longitude': 'float',
    'timestamp': 'datetime'
  },
  dataRate: 30
}, {
  type: 'actor',
  // sensor - hybrid
  label: 'HUMIDITY',
  data: {
    'device_id': 'string',
    'latitude': 'float',
    'longitude': 'float',
    'timestamp': 'datetime'
  },
  dataRate: 30
}]; // HUMIDITY
// device_id, latitude, longitude, timestamp
// LIGHT
// device_id, latitude, longitude, timestamp
// DUST
// device_id, latitude, longitude, timestamp

new Vue({
  el: '#iotcomms-app',
  components: {},
  data: {}
});
$(function () {
  makeDraggable();
  $(".base").droppable({
    accept: "[data-card]",
    tolerance: "intersect",
    drop: function drop(event, ui) {
      if ($(this).find('div[data-card]').length == 0) {
        $(this).append(ui.draggable);
        $(this).find(".item").css({
          left: 0,
          top: 0,
          height: "100%",
          width: "100%"
        }).removeClass("item");
      } else {
        $(ui.draggable).css({
          top: 0,
          left: 0
        });
      }

      console.log("triggered drop");
      $(this).addClass("active");
    },
    out: function out(event, ui) {
      $(this).removeClass("active");
    },
    over: function over(event, ui) {
      $(this).addClass("active");
    }
  });
});

function makeDraggable() {
  console.log("hit");
  $('[data-card]').draggable({
    appendTo: ".base",
    start: function start(e, ui) {
      failure = true; // reset the flag
    },
    revert: function revert() {
      $(this).parent().addClass("active");
      $(this).parent().parent().parent().addClass("card-active");
      console.log("reverted");
      return failure;
    }
  });
}

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/main.js ./src/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nandomoreira/Sites/clients/RafaelOliveira/iotcomms/iotcomms/src/main.js */"./src/main.js");
module.exports = __webpack_require__(/*! /Users/nandomoreira/Sites/clients/RafaelOliveira/iotcomms/iotcomms/src/main.scss */"./src/main.scss");


/***/ })

/******/ });