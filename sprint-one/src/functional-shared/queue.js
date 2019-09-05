var Queue = function() {
  var someInstance = {
    head: 0,
    tail: 0,
    storage: {}
  }

  _.extend(someInstance, queueMethods);
  return someInstance
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.tail] = value;
    this.tail++;
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
      return this.tail - this.head
    }
  }
};


