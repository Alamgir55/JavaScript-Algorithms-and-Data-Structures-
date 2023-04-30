// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null
//   }
// }

// class linkedList{
//   constructor(){
//     this.length = 0
//     this.head = null
//     this.tail = null
//   }

//   insertEnd(val){
//     this.length += 1
//     var val = new Node(val);
    
//     if(val.next != null){
//       val.next = val
//     }
//   }
// }

// var list = new linkedList();
// list.insertEnd()


// // var first = new Node('Hi');
// // first.next = new Node('there')
// // first.next.next = new Node('How')
// // first.next.next.next = new Node('are')
// // first.next.next.next.next = new Node('you?')

// // console.log('Hie')

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