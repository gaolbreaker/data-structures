var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // var someInstance = {};
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};


  // // Implement the methods below
  // someInstance.push = ;

  // someInstance.pop = ;

  // someInstance.size = ;

  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[0] = value;
  } else {
    this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
  }
};

stackMethods.pop = function() {
  if (Object.keys(this.storage).length === 0) {
    console.log('nothing lol');
  } else {
    let valToReturn = this.storage[Math.max(...Object.keys(this.storage))];
    delete this.storage[Math.max(...Object.keys(this.storage))];
    return valToReturn;
  }
};

stackMethods.size = function() {
  console.log(Object.keys(this.storage));
  return Object.keys(this.storage).length;
};


