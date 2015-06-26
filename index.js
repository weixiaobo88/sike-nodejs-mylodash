var _ = {

};

_.once = function(fn) {
  var invoked = false;
  var result;

  return function() {
    if(invoked) {
      return result;
    } else {
      result = fn();
      invoked = true;
      return result;
    }
  }
 }

module.exports = _;
