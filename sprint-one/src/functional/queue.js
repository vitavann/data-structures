var Queue = function() {
  // var size = 0
  var head = 0;
  var tail = 0;
	var someInstance = {};

	  // Use an object with numeric keys to store values
	  var storage = {};

	  // Implement the methods below
	  someInstance.enqueue = function(value) {
	    storage[tail] = value;
	    tail++
	  };

	  someInstance.dequeue = function() {
	    if(head<=tail){
        var value = storage[head]
        delete storage[head]
        head++
        return value;
	    }
	  };

	  someInstance.size = function() {
      var size = tail - head
      if(size < 0){
        return 0
      } else {
      return tail - head
      }
    };



	  return someInstance;
};

