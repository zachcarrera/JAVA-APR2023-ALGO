class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
class Stack{
  constructor(){
    this.top=null;
  }

  isEmpty(){
    return this.top === null
  }

    /**
   * Adds a new given item based on the to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   * @returns {number} .
   */
  push(newNode){
    newNode.next = this.top
    this.top = newNode
  }

  
  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop(){
    if(this.isEmpty())return null;
    var oldTop = this.top
    this.top = this.top.next
    return oldTop
    
  }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek(){
    if(this.isEmpty())return null;
    return this.top.data
  }


  /**
   * Returns the size of this stack.
   * DO NOT USE .next
   * @returns {number} The length.
   */
  size(){
    let tempStack = new Stack();
    let count = 0;

    //while this.top exists
    while (this.top){
      count++;
      let node = this.pop(); 
      tempStack.push(node);
    }

    //while temp.top exists
    while (tempStack.top){
      this.push(tempStack.pop());
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


/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue{
	constructor(){
		this.front = null;
		this.rear = null;

	}
	isEmpty(){
    return this.front === null;
	}

	getFront(){
		if(!this.front) return null;
    return this.front;
	}

	enqueue(newNode){
    if(!this.rear){
      this.front = newNode;
      this.rear = newNode;
    }else{
      this.rear.next = newNode
      this.rear = newNode
    }
	}

	dequeue(){
    if(!this.front)return;
    const temp = this.front
    this.front = this.front.next
    if(!this.front || !this.front.next){
      this.rear = this.front;
    }
    return temp
	}


  size() {
    let count = 0;
    let current = this.front;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }


  contains(targetVal) {
    var q2 = new Queue();
    var foundVal = false;

    while (this.front) {
      if (this.front.data == targetVal) {
        foundVal = true;
      }
      q2.enqueue(this.dequeue());
    }

    while (q2.front) {
      this.enqueue(q2.dequeue());
    }
    return foundVal;
  }


  	printQueue(){ //for learning puspose
		console.log("Front: " + this.front.data);
		var runner = this.front;
		while(runner){
			console.log(runner.data)
			runner= runner.next;
		}
		console.log("Rear: " +this.rear.data);
	}
}


  /**
   * Compares 2 queues to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q1 q2 The queues to be compared 
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
function compareQueue(q1, q2){
  const tempQ1 = new Queue();
  const tempQ2 = new Queue();
  
  let isEqual = true;
  let item1, item2;

  while (!q1.isEmpty() && !q2.isEmpty()) { // q1: 4, q2: 3
    item1 = q1.dequeue();
    item2 = q2.dequeue();

    if(item1.data !== item2.data) {
      isEqual = false;
    }

    tempQ1.enqueue(item1); // tempQ1 : "abc" q1: "d"
    tempQ2.enqueue(item2); // tempQ2 : "aba" q2: empty

  }

  if (q1.isEmpty() !== q2.isEmpty()) { // size are not the same
    isEqual = false;
  }

  while(!q1.isEmpty()) { // restore the order in q1 if it's a longer queue
    tempQ1.enqueue(q1.dequeue()); // tempQ1 : "abcd" 
  }

  while(!q2.isEmpty()) { // restore the order in q2 if it's a longer queue
    tempQ2.enqueue(q2.dequeue()); // tempQ2 : "aba"
  }


  while(!tempQ1.isEmpty()){ // restore q1 from the tempQ1
    q1.enqueue(tempQ1.dequeue())
  }
  while(!tempQ2.isEmpty()){ // restore q2 from the tempQ2
    q2.enqueue(tempQ2.dequeue())
  }
  return isEqual;
}

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
function isPalindrome(q){ 
  var isPalindrome= true
  var tempQ = new Queue()
  var tempStack = new Stack()

  while(!q.isEmpty()){
    var item = q.dequeue()
    tempQ.enqueue(item)
    tempStack.push(item)
  }

  while(!tempQ.isEmpty()){
    var item1 = tempQ.dequeue()
    var item2 = tempStack.pop()
    if(item1.data !== item2.data){
      isPalindrome = false
    }
    q.enqueue(item1)
  }
  return isPalindrome;
	}

var test1 = new Queue();
test1.enqueue(new Node("a"));
test1.enqueue(new Node("b"));
test1.enqueue(new Node("c"));
test1.enqueue(new Node("d"));
test1.printQueue();


var test2 = new Queue();
test2.enqueue(new Node("a"));
test2.enqueue(new Node("b"));
test2.enqueue(new Node("c"));
test2.enqueue(new Node("d"));

var test3 = new Queue();
test3.enqueue(new Node("a"));
test3.enqueue(new Node("b"));
test3.enqueue(new Node("b"));
test3.enqueue(new Node("a"));



console.log(compareQueue(test1, test2)) // expected: true
console.log(compareQueue(test1, test3)) // expected: false

console.log(isPalindrome(test3)); // expected : true
console.log(isPalindrome(test2)); // expected : false