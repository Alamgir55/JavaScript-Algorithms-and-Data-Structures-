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
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }

  removeEnd(){
    if(this.head) return undefined
    var current = this.head
    var newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return current
  }


  traverse(){
    var current = this.head
    while(current){
      console.log(current.val)
      current = current.next
    }
  }
}

var list = new SinglyLinkList();
list.insertEnd("Hello");
list.insertEnd("Goodbye");
list.insertEnd("!");
list.traverse()
list.removeEnd()