//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class to represent a stack using a linkedlist to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack{
  constructor(){
    this.top=null;
  }

  isEmpty(){
    //check if the stack is empty
    //return a boolean 
    if(this.top == null){
      return true
    }
    return false;
  }

    /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   * @returns {number} .
   */
  push(data){
    const newNode =  new StackNode(data);

    newNode.next = this.top;

    this.top = newNode;

    return this.top.data;

  }

  
  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed data or undefined if this stack was empty.
   */
  pop(){

    if (this.isEmpty()) {
      return null;
    }
  // console.log("this.top", this.top)
    const removedNode = this.top;
    this.top = this.top.next;

    return removedNode.data;
    
  }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek(){
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }


  /**
   * Returns the size of this stack.
   * @returns {number} The length.
   */
  size(){

    const secondStack = new Stack();
    // let copy = this;
    let count = 0;
    while(!this.isEmpty()){
      secondStack.push(this.pop())
      count++;
    }

    // this
    // 3
    // 2
    // 1

    // secondStack
    // 1
    // 2
    // 3
    
    while(!secondStack.isEmpty()){
      this.push(secondStack.pop())
    }
    
    return count;
  }


  printStack(){ // For learning purpose
    console.log("TOP")
    let runner = this.top;
    while(runner){
      console.log(runner.data);
      runner= runner.next
    }
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.printStack(); 
//expected:
// TOP
// [ 3 ] 
// [ 2 ]
// [ 1 ]

console.log(s1.pop()); //expected: [ 3 ]
s1.printStack();
//expected: 3
// TOP
// [ 2 ] 
// [ 1 ]
console.log(s1.isEmpty())
console.log(s1.peek())
console.log("size",s1.size())

s1.printStack();
console.log(s1.isEmpty())