// var workload = {
//     "city": {
//         name: "City",
//         description: "This is an urban environmental monitoring project that has used crowd-sourcing to deploy sensors at 7 cities across 3 continents in 2015, with about 12 sensors per city. Five timestamped observations, outdoor temperature, humidity, ambient light, dust and air quality, are reported every minute by each sensor along with metadata on sensor ID and geolocation. Besides urban sensing, this also captures the vagaries of using crowd-sourcing for large IoT deployments",
//         data: "timestamp , source , longitude , latitude , temperature , humidity , light , dust , airquality_raw , location , type"
//     }
// }

const workloads = [{
    type: 'actor', // sensor - hybrid
    label: 'TEMPERATURE',
    data: {
      'device_id': 'string',
      'latitude': 'float',
      'longitude': 'float',
      'timestamp': 'datetime'
    },
    dataRate: 30,
  },
  {
    type: 'actor', // sensor - hybrid
    label: 'HUMIDITY',
    data: {
      'device_id': 'string',
      'latitude': 'float',
      'longitude': 'float',
      'timestamp': 'datetime'
    },
    dataRate: 30
  }
];

// HUMIDITY
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
