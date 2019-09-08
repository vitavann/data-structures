var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create node
  var node = Node(value);

  if (node.value) {
    node.children.push(node)
  }
  // console.log(node.children);

  // if (this.children.length === 0) {
  //   this.children[0].addChild(value);
  // }
  // console.log(this);
};

treeMethods.contains = function(target) {
  // return true;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.children = [];

  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
