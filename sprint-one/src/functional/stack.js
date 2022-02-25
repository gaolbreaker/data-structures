var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      storage[Math.max(...Object.keys(storage)) + 1] = value;
    }
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length === 0) {
      console.log('nothing lol');
    } else {
      let valToReturn = storage[Math.max(...Object.keys(storage))];
      delete storage[Math.max(...Object.keys(storage))];
      return valToReturn;
    }
  };

  someInstance.size = function() {
    console.log(Object.keys(storage));
    return Object.keys(storage).length;
  };

  return someInstance;
};
