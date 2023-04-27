/****
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
  * Reference: http://btv.melezinek.cz/binary-search-tree.html
 */
class BSTNode { // node
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
  }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }


  // --------------- W2D1 -----------------
  /**
   * Determines if this tree is empty.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
      return this.root === null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
      if (this.isEmpty()){
          return null;
      }
      while(current.left){
          current = current.left;
      }
      return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
      if (this.isEmpty()){
          return null;
      }
      if (!current.left){
          return current.data;
      }
      return this.minRecursive(current.left);
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
      if (this.isEmpty()){
          return null;
      }
      while(current.right){
          current = current.right;
      }
      return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
      if (this.isEmpty()){
          return null;
      }

      if (!current.right){
          return current.data;
      }
      
      return this.maxRecursive(current.right);
  } 

// ---------------W2D2 ------------
  
  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal : The number to search for
   * @returns {boolean} : Indicates if the searchVal was found.
   */
  contains(searchVal) {
    let current = this.root;
    if (current == null) {
      return null;
    }
    // console.log(current.data);
    while (current) {
      if (searchVal > current.data) {
        current = current.right;
      }
      else if (searchVal < current.data){
        current = current.left;
      }
      else{
        console.log(true);
        return true;
      }
    }
      console.log(false);
      return false;
  }
  
      /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal: The number to search for in the node's data.
     * @returns {boolean} : Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (searchVal == current.data) {
          return true;
        } else if (searchVal < current.data) {
          this.containsRecursive(searchVal, current.left);
        } else{
          this.containsRecursive(searchVal, current.right);
        }
          return false;
    }  
  
  range(startNode = this.root) {
      if(this.isEmpty()){
          return null;
      }

      const maxVal = this.max();
      const minVal = this.min();

      return maxVal - minVal; 
  }
// ------------- W2D3 --------------
    insert(newVal) {
      const newNode = new BSTNode(newVal);    
      if (this.root === null) {
        this.root = newNode;
        return this;
      }

      let current = this.root;
      while(current) {
        if (newVal < current.data) {
          if ( current.left === null) {
            current.left = newNode; // If newVal is smaller & there is no .left, insert
            return this;
          }
          current = current.left; // otherwise, move current to the left
        } else {
          if ( current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
      return this;
    }

  
  insertRecursive(newVal, curr = this.root) {
    if (curr === null){
        this.root = new BSTNode(newVal);
        return this;
    }
    if ( newVal < curr.data){
          if(curr.left === null){
              curr.left = new BSTNode(newVal);
              return this
          }
            return this.insertRecursive(newVal,curr.left);

      } else {
          if(curr.right === null){
              curr.right = new BSTNode(newVal);
              return this
          }
            return this.insertRecursive(newVal,curr.right);
          
    }
  }
  // ------------- W4D4 -------------------
  
    // left, root, right
  printInorder(curr = this.root){
    if(!curr){
      return;
    }
    if(curr){
      this.printInorder(curr.left);
      console.log(curr.data);
      this.printInorder(curr.right);
    } 
  }

    // root,left, right
  printPreorder(curr = this.root){
    if(!curr){
      return;
    }
    if(curr){
      console.log(curr.data);
      this.printInorder(curr.left);
      this.printInorder(curr.right);
    } 
  }  

    // left, right, root
  printPostorder(curr = this.root){
    if(!curr){
      return;
    }
    if(curr){
      this.printInorder(curr.left);
      this.printInorder(curr.right);
      console.log(curr.data);
    } 
  } 
    
  /**
  * Depth first search
   * DFS Preorder: (CurrNode, Left, Right) 
   * Usage: create a copy of the tree,  
   * Converts this BST into an array following DFS preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(curr = this.root, vals = []) {
      if(!curr){
          return vals;
      } else {
          vals.push(curr.data);
          this.toArrPreorder(curr.left, vals);
          this.toArrPreorder(curr.right, vals);
      }
      return vals;
  }
  
  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Usage: get the numbers in order
   * Converts this BST into an array following DFS inorder.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
      if(!node){
      return vals;
    }
    if(node){
      this.toArrInorder(node.left, vals);
      vals.push(node.data);
      this.toArrInorder(node.right, vals);
    } 
      return vals;
  }
  
  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Usage: delete the tree
   * Converts this BST into an array following DFS postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(node = this.root, vals = []) {
    if(!node){
          return vals;
    }
    if(node){
      this.toArrPostorder(node.left, vals);fc
      this.toArrPostorder(node.right, vals);
      vals.push(node.data);
    } 
    return vals;
  }
// ------------------W2D5 -----------------
  size(node = this.root) {
        if(!node){
            return 0;
        }
        return this.size(node.left) + this.size(node.right) + 1;
    }

  size2(node = this.root, count =0) {
      if(!node){
      return count;
    }
    if(node){
      count = this.size(node.left, count);
      count++;
      count= this.size(node.right, count);
    } 
      return count;
    }
  size3(node = this.root, vals = []) {
    if (!node) {
      return;
    }
    if (node) {
      this.size(node.left, vals);
      this.size(node.right, vals);
      vals.push(node.data);
    }
    return vals.length;
  }

  height(node = this.root) {
    if (!node) {
      return 0;
    }

    return Math.max(this.height(node.right) , this.height(node.left)) + 1;
  }

  
  height2(node = this.root) { 
    if(!node){
      return 0;
    }else {
      var leftHeight = this.height(node.left)
      var rightHeight = this.height(node.right)
      var level = Math.max(leftHeight, rightHeight) +1;
    }
    return level;
  }  

  
isFull(node = this.root) {
    // If empty tree
    if (!node) {
      return false;
    }

    // if leaf node, leaf node is the end which means it has no left or right
    if (!node.left && !node.right) {
      return true;
    }

    // if both left and right subtrees are not null and
    // both left and right subtrees are full
    if (node.left && node.right) {
      return this.isFull(node.left) && this.isFull(node.right);
    }
    return false;
  }
  
  // HELPER METHOD
  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   4  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(4);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print()

console.log("threeLevelTree min:",threeLevelTree.min())
console.log("threeLevelTree minRecursive:",threeLevelTree.minRecursive())
console.log("threeLevelTree max:",threeLevelTree.max())
console.log("threeLevelTree maxRecursive:",threeLevelTree.maxRecursive())
console.log("threeLevelTree range:",threeLevelTree.range())