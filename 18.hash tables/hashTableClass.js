class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key)
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index]; i++){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
    }
  }
  values(){
   let valueArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i]; j++){
          if(!valueArr.includes(this.keyMap[i][j][1])){
            valueArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valueArr
  }

  keys(){
    const keysArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i]; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

ht.get('olive')

ht.values()
console.log(ht.values())

ht.keys().forEach(function(key){
  console.log(ht.get(key))
})