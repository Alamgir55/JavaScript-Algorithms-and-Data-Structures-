class Node {
  constructor(value){
   this.value = value
   this.left = null
   this.right = null
  }
 }
 
 class BinarySearchTree{
   constructor(){
     this.root = null
   }

   insert(value){
    var newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    var current = this.root;
    while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        }
    }
}

  BFS(){
    var node = this.root,
        data = [],
        queue = [];
    queue.push(node)
    while(queue.length){
      node = queue.shift()
      data.push(node.value) 
      if(node.left)  queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }

  DFSPreOrder(){
    var data = []
    function traverse(node){
      data.push(data.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  DFSPostOrder(){
    var data = []
    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  DFSInOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left)
      data.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data;
  }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
//tree.BFS()
//tree.DFSPreOrder()
//tree.DFSPostOrder()
tree.DFSInOrder()