# [Binary Search Trees](./BinarySearchTree.js)

- [Algo Book - Ch 11](http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2135)
- [Binary Search Tree Drawing](https://cdn-media-1.freecodecamp.org/images/2rTqYlcrnWtICedt131tDft0CmkzZaViExJX)
- [Visual Algo](https://visualgo.net/en)
- [Interactive BST](http://btv.melezinek.cz/binary-search-tree.html)

---

## Description

- is an ordered data structure
- similar to a linked list since it also uses nodes, but has a `root` instead of a `head` and nodes have `left` & `right` instead of `next`
  - using this information, create the necessary classes

---

### Parent / Child

- left and right are children of parent

---

### left (the connection is called an edge)

- value less than or equal to parent

---

### right (the connection is called an edge)

- value greater than parent

---

### subtree

- a smaller portion of the tree starting from any node, the node you start from is the root of the sub tree but not the root of the whole tree

---

### left 'subtree' (entire left side of root)

- all less than root node

---

### right 'subtree' (entire right side of root)

- all greater than root node

---

### Leaf Nodes

- have no children

---

### Duplicates

- child that is same value of parent is chosen to be either right or left, just be consistent
  - however, this increases height of tree which increases time complexity
  - a solution is to add a count key to node and increment it for dupes
    - [Geeks for geeks BST Dupes](https://www.geeksforgeeks.org/how-to-handle-duplicates-in-binary-search-tree/)

---

### Depth First Search

- Goes all the way down to a leaf first before going to another side

### Breadth First Search

- goes across all nodes on the horizontal plane before going down a level

### Traversal Order Based on Example Tree Below

#### Preorder (DFS)

- (Root / Parent, Left, Right)
  - 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90

---

#### Inorder (DFS)

- (Left, Root / Parent, Right)
  - 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

---

#### Postorder (DFS)

- Postorder (Left, Right, Root / Parent)
  - 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25

---

#### Levelorder (BFS)

- Row-by-row left->right top->down
  - 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90

### Example tree as comment

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

### Starter Code Snippet

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
