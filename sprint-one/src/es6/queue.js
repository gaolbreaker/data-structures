class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
    }
  }
  dequeue() {
    if (Object.keys(this.storage).length === 0) {
      console.log('nothing lol');
    } else {
      let valToReturn = this.storage[Math.min(...Object.keys(this.storage))];
      delete this.storage[Math.min(...Object.keys(this.storage))];
      return valToReturn;
    }
  }
  size() {
    console.log(Object.keys(this.storage));
    return Object.keys(this.storage).length;
  }

}

// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   this.storage = {};

// };


// Queue.prototype.enqueue = function(value) {
//   if (Object.keys(this.storage).length === 0) {
//     this.storage[0] = value;
//   } else {
//     this.storage[Math.max(...Object.keys(this.storage)) + 1] = value;
//   }
// };
// Queue.prototype.dequeue = function() {
//   if (Object.keys(this.storage).length === 0) {
//     console.log('nothing lol');
//   } else {
//     let valToReturn = this.storage[Math.min(...Object.keys(this.storage))];
//     delete this.storage[Math.min(...Object.keys(this.storage))];
//     return valToReturn;
//   }
// };
// Queue.prototype.size = function() {
//   console.log(Object.keys(this.storage));
//   return Object.keys(this.storage).length;
// };
