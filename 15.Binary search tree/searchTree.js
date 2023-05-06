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

   find(value){
    if(this.root === null) return undefined
    var current = this.root, 
        found = false

    while(current && !found){
      if(value < current.value){
        current = current.left
      } else if(value > current.value){
        current = current.right
      } else {
        found = true
      }
      return current
    }
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
tree.find()