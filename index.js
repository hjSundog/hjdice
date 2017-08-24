"use strict";

var _config = {
  dice_amount: 1,
  offset: 0,
  dice_faces: 6
};
module.exports = function (config) {
  config = Object.assign({}, _config, config);
  this.roll = function () {
    var ans = 0;
    for (var i = 0; i < config.dice_amount; i++) {
      ans += ~~(Math.random() * config.dice_faces + 1);
    }
    ans += config.offset;
    return ans;
  };
  this.getDesc = function () {
    return config.dice_amount + "d" + config.dice_faces + " + " + config.offset;
  };
  return {
    roll: this.roll,
    getDesc: this.getDesc
  };
};