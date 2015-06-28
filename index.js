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

_.memoize = function(fn, cb) {
  var result = {};

  return function(cache_key) {
    if(cache_key.length) {
      new_key = cb(cache_key);
      if (!result.hasOwnProperty(new_key)) {
        result[new_key] = fn(cache_key);
      }
      return result[new_key];
    } else {
      if (!result.hasOwnProperty(cache_key)) {
        result[cache_key] = fn(cache_key);
      }
      return result[cache_key];
    }
  };
}

module.exports = _;
