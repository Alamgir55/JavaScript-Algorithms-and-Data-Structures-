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

  insertEnd(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  removeEnd(){
    if(!this.head) return undefined
    var current = this.head
    var newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail.next = newTail
    this.tail = newTail
    this.length--
    if(this.length === 0){
      this.head = 0
      this.tail = 0
    }
  }

  removeStart(){
    if(!this.head) return undefined
    var currentHead = this.head
    this.head = currentHead.next
    this.length--
    if(this.length === 0){
      this.tail = null
    }
    return currentHead
  }

}