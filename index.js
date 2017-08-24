var _config = {
  dice_amount: 1,
  offset: 0,
  dice_faces: 6,
}
module.exports = function(config) {  
  config = Object.asign({}, _config, config)
  this.roll = function() {
    let ans = 0;
    for(let i=0;i<config.dice_faces;i++) {
      ans += ~~(Math.random()*dice_faces+1)
    }
    ans += offset;
    return ans;
  }
  this.getDesc = function() {
    return `${dice_faces}d${dice_faces} + ${offset}`
  }
  return {
    roll: this.roll,
    getDesc: this.getDesc,
  };
}