var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};

  return someInstance;

};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.tail] = value;
    this.tail++
  },
  dequeue: function(){
    if(this.head <= this.tail){
      var value = this.storage[this.head];
      delete this.storage[this.head];
      this.head++
      return value;
    }
  },
  size: function(){
    var size = this.tail - this.head
    if(size < 0){
      return 0
    } else {
      return size;
    }
  }
};


