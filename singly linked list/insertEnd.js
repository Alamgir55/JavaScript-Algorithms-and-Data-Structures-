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

  traverse(){
    var current = this.head
    while(current){
      console.log(current.val)
      current = current.next
    }
  }

  getList(index){
    if(index < 1 || index >= this.length) return null 
    var counter = 0
    var current = this.head
    while(index !== counter){
      current = current.next
      counter++
    }
    return current
  }
  
  setList(index, val){
    var foundVal = this.getList(index)
    if(foundVal){
      foundVal.val = val
      return true
    }
    return false
  }

  insertMiddle(index, val){
    if(index < 0 || index >= this.length) return null
    if(index === this.length){
      this.insertEnd(val)
    }
    if(index === 0){
      this.insertStart(val)
    }
    var newNode = new Node(val)
    var prev = this.getList(index - 1)
    var temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true

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

  remove(index){
    if(index < 0 || index >= this.length) return null
    if(index === 0){
      this.removeStart()
    }
    if(index === this.length -1){
      this.removeEnd()
    }
    var previousVal = this.getList(this.length - 1)
    var remove = previousVal.next
    previousVal.next = remove.next
    this.length--
    return remove
  }

  print(){
    var arr = []
    var current = this.head
    while(current){
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

}

var list = new SinglyLinkList();
list.insertEnd("Hello");
list.insertEnd("Goodbye");
list.insertEnd('!')
list.insertEnd("<3")
list.insertEnd("!")
//list.insertMiddle(2, "@@")
//console.log(list)
//console.log(list.getList(3))
list.traverse()
list.print()
//console.log(list.setList(1, "Helloooo"))