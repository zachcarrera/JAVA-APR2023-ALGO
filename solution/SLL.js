/** 
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
  constructor() {
    this.head = null;
  }
  // -------------- W1D2 -----------------
  /**
   * Determines if this list is empty.
   * @returns {boolean}
   */
  isEmpty() {
    if (this.head === null) {
      return true;
    }else{
      return false;      
    }
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    const newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    return this;
  }

  insertAtBackMany(arr) {
    for (const element of arr) {
      this.insertAtBack(element);
    }
    return this;
  }

  // -------------- W1D3 -----------------  
  insertAtFront(data){
      var newNode = new ListNode(data);
      if(this.head) {
          newNode.next = this.head;
      }
      this.head = newNode;
      return this;
  }

    /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if (!this.head) {
        return null;
    }
    var removedHead = this.head; 
    this.head = this.head.next;
    removedHead.next = null;
    return removedHead.data; 
  }


  // -------------- W1D4 -----------------  
  contains(val){
      var runner = this.head;
      while(runner){
          if(runner.data === val){
              return true;
          }
          runner = runner.next;
      }
      return false;
  }

  containsRecursive(val, current = this.head) {
    if (!current){
    return false;
    } 
    if (current.data === val) {
        return true;
    }
    return this.containsRecursive(val, current.next);
  }  
  removeBack() {

    // if empty or at first node
    if(!this.head || !this.head.next) {
      return this.removeHead();
    }


    let runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }
     const removedData = runner.next;
    runner.next = null;
    return removedData.data;
  }
  
  recursiveMax(runner = this.head, maxNode = this.head) {
    if (this.head === null) {
      return null;
    }

    if (runner === null) {
      return maxNode.data;
    }

    if (runner.data > maxNode.data) {
      maxNode = runner;
    }

    return this.recursiveMax(runner.next, maxNode);
  }

  // -------------- W1D5 -----------------
      secondToLast(){
      if(!this.head || !this.head.next){ // empty or only 1 node
        return null;
      }
        let runner = this.head;
      while(runner.next.next){
        runner = runner.next;
      }
      return runner.data;
    }

    removeData(data) {
    //HINT: The list is constructed by connecting nodes with pointers
    // Play with the pointers so that you can remove that node from the list. 
    // let didRemove = false;

    if (!this.head) {
      return false; // if list is empty
    }
    if (this.head.data === data) {
      this.head = this.head.next; // if head node has data
      return true;
    }
    var prev = this.head; // 5
    var curr = this.head.next; //6 
    while (curr) {
      if (curr.data === data) { // true 
        prev.next = curr.next; // if curr node has the data , // 2nd node which has the 6, 3rd node which has the 7 
        return true;
        // didRemove = true;
      }
      prev = curr;
      curr = curr.next;
    }

    // return didRemove;
      
    return false; // if the list doesnt have the data 

  }
    removeData(data){
      var emptyHead = new ListNode(0);
      emptyHead.next = this.head;
      var prev = emptyHead;
      var curr = this.head;

      while(curr){
        if(curr.data === data){
          prev.next = curr.next;
          curr = curr.next;
        }else{
          prev = curr;
          curr = curr.next;
        }
      }
      this.head = emptyHead.next;
    }


  
  //given
  printList() {
    // if the list is empty?
    if (this.head === null) {
      console.log("this is an empty list")
      return this
    }
    // how to traverse through different nodes?
    // while-loop (as long as the node.next is not null)
    var runner = this.head
    while (runner !== null) {
      console.log(runner.data)
      runner = runner.next
    }
    return this
  }
}

const emptyList = new SLL();

const list1 = new SLL();
list1.insertAtBack(3).insertAtBack(7).insertAtBack(9)
list1.printList()