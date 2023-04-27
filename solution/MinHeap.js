/**
 * Ref: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. 
     * Not using 0th index makes calculating the left and right
     * children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * @returns {?number} Null if empty.
   */
  size() {
    // - 1 since 0 index is unused
    return this.heap.length === 1 ? null : this.heap.length - 1
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    return this.heap.length === 1 ? null : this.heap[1];
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
   *   parent : Math.floor(i/2)
   *   left child: i*2   | right child: i*2+1
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    this.heap.push(num);

    if (this.heap.length === 2) {
      return this;
    }

    let newNumIndex = this.heap.length - 1;
    let parentIndex = Math.floor(newNumIndex / 2);

    while (parentIndex!== 0 && this.heap[newNumIndex] < this.heap[parentIndex]) {
      console.log(`swap ${this.heap[newNumIndex]} and ${this.heap[parentIndex]}`)
      const temp = this.heap[newNumIndex];
      this.heap[newNumIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = temp;

      newNumIndex = parentIndex;
      parentIndex = Math.floor(newNumIndex / 2);
    }

    return this;

  }


  extract() {

    if (this.heap.length === 1) {
      return null;
    }

    // swap index = 1 and last position (index = length - 1)
    let temp = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = temp;

    const smallestNumber = this.heap.pop();

    let currentIndex = 1;
    let leftChild = currentIndex * 2;
    let rightChild = currentIndex * 2 + 1;

    // while parent is greater than smallest child
    while (this.heap[currentIndex] > Math.min(this.heap[leftChild], this.heap[rightChild])) {

      let minimumIndex;
      
      // left is smaller than right
      if (this.heap[leftChild] < this.heap[rightChild]) {
        minimumIndex = leftChild;
      } else {
        minimumIndex = rightChild;
      }
      
      // swap currentIndex and minimumIndex values
      temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minimumIndex];
      this.heap[minimumIndex] = temp;

      currentIndex = minimumIndex;
      leftChild = currentIndex * 2;
      rightChild = currentIndex * 2 + 1;
    }

    return smallestNumber;
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

//Works great nice

var heap = new MinHeap();

heap.insert(5)
    .insert(3)
    .insert(9)
    .insert(24)
    .insert(4)
    .insert(54)
    .insert(19)
    .insert(18)
    .insert(27)
    .insert(42)
    .insert(15)
    .insert(2)
    .insert(30)
    .insert(-1)



console.log(heap.size());

heap.printHorizontalTree()