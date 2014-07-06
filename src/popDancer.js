var PopDancer = function(){
  // some exclusive properties of PopDancer
  this.oldStep = PopDancer.step;
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constuctor = PopDancer;
// new methods
