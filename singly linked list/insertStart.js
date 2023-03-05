class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  insertStart(val){
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = this.head
    }else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
}