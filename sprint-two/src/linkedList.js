var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node
    var node = Node(value);
    // if tail does not exist
    if (!list.tail) {
      // set head & tail to same node
      list.tail = node;
      list.head = node;
    } else {
      // if list already exists
      // set tail.next to node & tail to new node
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(value) {
    // create node
    // console.log('head' , list.head);
    // console.log('tail' , list.tail);
    var node = Node(value);
    list.head = list.tail;
    // console.log('new head ', list.head);
    return list.head.value;
  };

  list.contains = function(target) {
    // begin at head
    // loop over list
    for (var key in list) {
      // check if target matches current node
      if (list.head.value === target) {
        // return true
        return true;
      }
      if (list.tail.value === target) {
        return true;
      }
    }
    // return false
    return false;

    console.log('list ', list);
    console.log('tail ', list.tail.value);
    console.log('head ', list.head.value);
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
