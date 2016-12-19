#!/usr/bin/env node

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'fdfd6ea8f161', module: 'cylon-ble' }
  },

  devices: {
    bb8: {
      driver: 'bb8',
      module: 'cylon-sphero-ble'
    }
  },

  work: function(drone) {
      // define colors
      var red = 0xff0000;
      var green = 0x00ff00;
      var blue = 0x0000ff;
      var white = 0xffffff;
      var black = 0x000000;

      drone.bb8.color(red);

      after(2000, function() {
          drone.bb8.color(blue);
      });

      after(4000, function() {
          drone.bb8.color(green);
      });

      after(6000, function() {
          drone.bb8.color(white);
      });
  }
}).start();
