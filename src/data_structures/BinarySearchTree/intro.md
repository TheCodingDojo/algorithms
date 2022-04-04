# [Binary Search Trees](./index.js)

- [Binary Search Tree Drawing](https://cdn-media-1.freecodecamp.org/images/2rTqYlcrnWtICedt131tDft0CmkzZaViExJX)
- [Visual Algo](https://visualgo.net/en)
- [Interactive BST](http://btv.melezinek.cz/binary-search-tree.html)

---

## Description

- Is an ordered data structure
- Similar to a linked list since it also uses nodes, but has a `root` instead of a `head` and nodes have `left` & `right` instead of `next`
  - using this information, create the necessary classes

---

## Parent / Child

- left and right are children of parent

---

## left (the connection is called an edge)

- value less than or equal to parent

---

## right (the connection is called an edge)

- value greater than parent

---

## subtree

- a smaller portion of the tree starting from any node, the node you start from is the root of the sub tree but not the root of the whole tree

---

## left 'subtree' (entire left side of root)

- all less than root node

---

## right 'subtree' (entire right side of root)

- all greater than root node

---

## Leaf Nodes

- have no children

---

## Duplicates

- child that is same value of parent is chosen to be either right or left, just be consistent
  - however, this increases height of tree which increases time complexity
  - a solution is to add a count key to node and increment it for dupes
    - [Geeks for geeks BST Dupes](https://www.geeksforgeeks.org/how-to-handle-duplicates-in-binary-search-tree/)

---

## Depth First Search

- Goes all the way down to a leaf first before going to another side

## Breadth First Search

- goes across all nodes on the horizontal plane before going down a level

## Traversal Order Based on Example Tree Below

### Preorder (DFS)

- (Root / Parent, Left, Right)
  - 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90

---

### Inorder (DFS)

- (Left, Root / Parent, Right)
  - 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

---

### Postorder (DFS)

- Postorder (Left, Right, Root / Parent)
  - 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25

---

### Levelorder (BFS)

- Row-by-row left->right top->down
  - 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90

## Example tree as comment

- ```js
  /*
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
  ```

---

## Big O Time Complexity Vs Array

- Using the above tree as a reference.
- Search: Avg - `O(h)`, Worst - `O(n)`
  - `h` = height, `n` = total nodes. The worst case is when the height of the tree is the same as the total size, e.g., if the above tree only contained the left most side `25` down to `4`.
- `O(h)` will be `O(log n)` logarithmic when the tree is well balanced because, as you can see in the above tree, each new level adds twice the number of nodes as the prior level, but only adds 1 more to the height.
  - `O(log n)` typically results from divide and conquer approaches. When searching we are always dividing when choosing to go left or right, we get to ignore the side we did not go to, repeatedly. When the tree is full, this will halve the tree from the current node each time.
  - Because of this divide and conquer, inserting and searching is faster than an array. The worst case insert in an array is insert at `0` index which requires `O(n)` to shift over every item to the right to make space for the new item. The worst case search is you get to the end of the array which is `O(n)`, whereas with a BST, the search reaches the end after `h` iterations where `h` is height which usually is much lower than the total number of nodes in the tree (unless the tree only contains one path, left or right only).

## Starter Code Snippet

- ```js
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = root;
    }

    newMethod(params) {
      // 'this' keyword will refer to the class instance
      // that the newMethod was called on
    }
  }

  // alternative way to add method outside of class definition
  BinarySearchTree.prototype.newMethodsName = function (params) {
    // 'this' keyword will refer to the class instance
    // that the newMethod was called on
  };
  ```
