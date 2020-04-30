export const cityWorkload = [
  {
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

export const workloads = [
  {
    id: 'city',
    title: 'City',
    sensors: cityWorkload
  },
  {
    id: 'shome',
    title: 'S.Home',
    sensors: cityWorkload
  },
  {
    id: 'indiot',
    title: 'Ind.IoT',
    sensors: cityWorkload
  },
  {
    id: 'sensor1',
    title: 'Sensor 1',
    sensors: cityWorkload
  },
  {
    id: 'sensor2',
    title: 'Sensor 2',
    sensors: cityWorkload
  },
  {
    id: 'sensor3',
    title: 'Sensor 3',
    sensors: cityWorkload
  },
];

export const protocolNetworks = [
  {
    id: 'tcp',
    title: 'TPC',
  },
  {
    id: 'udp',
    title: 'UDP',
  },
  {
    id: 'mqtt',
    title: 'MQTT',
  },
  {
    id: 'coap',
    title: 'CoAP',
  },
  {
    id: 'http',
    title: 'HTTP',
  },
];
