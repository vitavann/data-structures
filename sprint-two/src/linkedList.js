var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // start at tail
    //
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
    // begin at head
    // loop over list
    for (key of list) {
      if(list.hasOwnProperty(target)) {
        return true;
      }
    }
      // if target matches current element
        // return true
      // else return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * .addToTail = O(1)
 * .removeHead = O(1)
 * .contains = O(n)
 */
