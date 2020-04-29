// var workload = {
//     "city": {
//         name: "City",
//         description: "This is an urban environmental monitoring project that has used crowd-sourcing to deploy sensors at 7 cities across 3 continents in 2015, with about 12 sensors per city. Five timestamped observations, outdoor temperature, humidity, ambient light, dust and air quality, are reported every minute by each sensor along with metadata on sensor ID and geolocation. Besides urban sensing, this also captures the vagaries of using crowd-sourcing for large IoT deployments",
//         data: "timestamp , source , longitude , latitude , temperature , humidity , light , dust , airquality_raw , location , type"
//     }
// }

const workloads = [
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
}

$(function () {
    makeDraggable();

    $(".base").droppable({
        accept: "[data-card]",
        tolerance: "intersect",
        drop: function (event, ui) {
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
        out: function (event, ui) {
            $(this).removeClass("active");
        },
        over: function (event, ui) {
            $(this).addClass("active");
        }
    });

});

function makeDraggable() {
    console.log("hit");
    $('[data-card]').draggable({
        appendTo: ".base",
        start: function (e, ui) {
            failure = true; // reset the flag
        },
        revert: function () {
            $(this).parent().addClass("active");
            $(this).parent().parent().parent().addClass("card-active");
            console.log("reverted");
            return failure;
        }
    });
}