/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  // TODO: implement the constructor.

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    const newNode = new DLLNode(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    const newNode = new DLLNode(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode2() {
    var forwardRunner = this.head
    var backwardRunner = this.tail

    while(forwardRunner !== backwardRunner || forwardRunner.next !== backwardRunner){
      forwardRunner = forwardRunner.next
      backwardRunner = backwardRunner.prev
    }
    var runner = forwardRunner
  
      var nextRunner = runner.next
      var prevRunner = runner.previous
      nextRunner.previous = prevRunner;
      prevRunner.next = nextRunner; 
  }

   insertAfter(targetVal, newVal) {
        const newNode = new DLLNode(newVal);
     let runner = this.head;
     while(runner) {
        if (runner.data === targetVal) {
            newNode.next = runner.next;
            newNode.prev = runner;
            runner.next = newNode;
            if(newNode.next) {
                newNode.next.prev = newNode;
                return this;
            } else {
                this.tail = newNode;
              return this;
            }
        }else{
          runner = runner.next
        }
    }
     return false;
   }

    insertBefore(targetVal, newVal) {
    if (this.isEmpty()) {
      return false;
    }

    let runner = this.head;

    // This was written with a different structure than insertAfter to
    // for comparison purposes but the logic is almost the same.
    while (runner) {
      if (runner.data === targetVal) {
        const newNode = new DLLNode(newVal);
        newNode.next = runner;
        newNode.prev = runner.prev;

        if (runner === this.head) {
          this.head = newNode;
        } else {
          // if runner was head then prev would be null.
          runner.prev.next = newNode;
        }

        runner.prev = newNode;
        return true;
      }

      runner = runner.next;
    }
    return false;
  }


  

  
  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }

  printList() {
        let currentNode = this.head;
        let listValues = '';

        while (currentNode) {
            listValues += currentNode.value + (currentNode.next ? ' <-> ' : '');
            currentNode = currentNode.next;
        }

        console.log(listValues);
    }
}

const emptyList = new DoublyLinkedList();
const list1 = new DoublyLinkedList();
list1.insertAtFront(4);
list1.insertAtFront(8);
list1.insertAtFront(5);
list1.insertAtFront(9);
list1.insertAtFront(10);
list1.insertAtFront(3);
list1.insertAtFront(6);
list1.insertAtFront(2);
list1.insertAtFront(2);
list1.printList();
list1.insertAtBack(22);
list1.insertAtBack(18);
list1.insertAtBack(26);
list1.insertAtBack(29);
list1.printList();
list1.insertAtBackMany([5, 8, 13, 14]);
list1.printList();

