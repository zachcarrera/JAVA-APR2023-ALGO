class Node{
	constructor(data){
		this.data = data;
		this.next = null;
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
    this.size = 0;
	}

    /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
	isEmpty(){
    if(this.rear === null){
      return true;
    }
    else{
      return false;
    }
	}

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
	getFront(){
		if(this.front){
      return this.front.data;
    }
    else{
      return undefined;
        }
	}

    /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
	enqueue(newNode){ 
    if(!isEmpty()){
      this.rear.next = newNode;     
      this.rear = newNode;
    }
    else{
      this.rear = newNode;
      this.front = newNode;
    }
    this.size++;
    return this.size;
    // if it is empty, newNode will be the front & the rear
	}

  
  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
	dequeue(){

    if (this.isEmpty()) {
      return undefined;
    }
    // take off the queue and store in temp
    const temp = this.front;
    // make the current this.front temp.next
    // moving out of queue
    this.front = temp.next;

    // If this.front becomes null, assign      
    // this.rear == null.  As the queue is empty.
    if (this.front === null) {
      this.rear = null;
    }
    return temp;
	}

  // bonus
  // bonus
    /**
   * Check if the target value exists in the queue using the basic queue operations
   * @returns {Boolean } 
   */
	contains(targetVal) {
        let isFound = false;
        let size = this.size();
      for(let i = 0; i < size; i++ ) {
        if (targetVal === this.getFront()) {
          isFound = true;
        }
        this.enqueue(this.dequeue()); 
      }
      return isFound;   
  	}

	contains2(targetVal) {
        let isFound = false;
        const tempQ = new Queue();
        while(!this.isEmpty()){
          if (targetVal === this.getFront()) {
            isFound = true;
          }
          tempQ.enqueue(this.dequeue());
        }
        while(!tempQ.isEmpty){
          this.enqueue(tempQ.dequeue());
        }
      }
      return isFound;   
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


var q = new Queue();
q.enqueue(new Node("a"));
q.enqueue(new Node("b"));
q.enqueue(new Node("c"));
q.enqueue(new Node("d"));
q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue(); 
q.printQueue(); //expected: front: "b", rear : "d"


