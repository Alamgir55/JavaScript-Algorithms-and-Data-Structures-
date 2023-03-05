class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkList{
  constructor(){
    this.head = null;
    this.tail = null;
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
}

var list = new SinglyLinkList();
list.insertEnd("Hello");
list.insertEnd("Goodbye");