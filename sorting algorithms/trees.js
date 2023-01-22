class Node {
	constructor(value){
  	this.value = value;
    this.right = undefined;
    this.left = undefined;
  }
  insert(item) {
  	if(item > this.value) {
    	if(this.right === undefined) {
      	this.right = new Node(item)
      } else {
      	this.right.insert(item);
      }
    } else {
    	if(this.left === undefined) {
      	this.left = new Node(item)
      } else{
      	this.left.insert(item);
      }
    }
  }
  find(item) {
    /* debugger */;
    if(this.value === item){
      return true;
    } else if(item > this.value) {
        if(this.right === undefined) {
        return false;
      } else {
        return this.right.find(item);
      }
    } else {
      if(this.left === undefined) {
        return false;
      } else {
        return this.left.find(item);
      }
    }
  }
  
  printInOrder() {
  	if(this.left !== undefined) {
    	this.left.printInOrder()
    }
    console.log(this.value);
    if(this.right !== undefined) {
    	this.right.printInOrder()
    }   
  }
}


let myNode = new Node(10);
myNode.insert(15);
myNode.insert(9)
myNode.insert(7)
myNode.insert(8)
myNode.insert(5)
myNode.insert(30)
myNode.insert(12);

console.log(myNode.find(15));
myNode.printInOrder()
