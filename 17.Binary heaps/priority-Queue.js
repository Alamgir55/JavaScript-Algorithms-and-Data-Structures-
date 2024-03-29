class PriorityQueue{
  constructor(){
    this.values = []
  }
  enqeue(val, priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp(){
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2)
      let parent = this.values[parentIdx]
      if(element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  // [12,39,41,33,27]
  dequeue(){
    let min = this.values[0]
    let end = this.values.pop()
    if(this.values.length > 0){
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }
  sinkDown(){
   let idx = 0
   let length = this.values.length
   let element = this.values[0]
   while(true){
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild;
      let swap = null
      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx]
        if(leftChild.priority < element.priority){
          swap = leftChild
        }
      }
      if(rightChild < length){
        rightChild = this.values[rightChildIdx]
        if((swap == null && rightChild.priority < element.priority) || (swap !== rightChild.priority < leftChild.priority )){
          swap = rightChild
        }
      }
      if(swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
   }
  }
}

class Node {
  constructor(val, priority){
    this.val = val
    this.priority = priority
  }
}


let ER = new PriorityQueue()
ER.enqeue("common cold", 5)
ER.enqeue("gunshot wound", 1)
ER.enqeue("high fever", 4)
ER.enqeue("broken arm", 2)
ER.enqeue("glass in foot", 3)
ER.dequeue()
