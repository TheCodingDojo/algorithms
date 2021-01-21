# [Alpha Timeline](/) Algo Schedule

---

## Week 1 - [Arrays](../../arrays)

1. Mon
   - [balanceIndex](../../arrays/balanceIndex.js)
   - [balancePoint](../../arrays/balancePoint.js)
2. Tue
   - [binarySearch](../../arrays/binarySearch.js)
3. Wed
   - [dedupeSorted](../../arrays/dedupeSorted.js)
   - [mode](../../arrays/mode.js)
4. Thur
   - [fewestCoinChange](../../objects/fewestCoinChange.js)
   - [missingValue](../../arrays/missingValue.js)
5. Fri
   - [firstNonRepeated](../../arrays/firstNonRepeated.js)

---

## Week 2 - Min Heap & Linked Lists Part 2

- go over and provide [Heaps Intro](../../data_structures/Heaps.md)
- [SinglyLinkedList](../../data_structures/SinglyLinkedList.js)
- [DoublyLinkedList](../../data_structures/DoublyLinkedList.js)

1. Mon
   - implement insert, see insert section in Heaps.md for details
2. Tue
   - implement extract, see extract section in Heaps.md for details
3. Wed
   - reverse
     - reverse an sList in place (do not create a new sList)
   - hasLoop
     - return whether or not the linked list connects back to itself. If it connects to itself, what does that mean will happen when you loop through it?
   - extra: removeNegatives (in place, no new list)
4. Thur
   - A Doubly Linked List is a singly linked list with the added functionality of being able to traverse in both directions.
   - Since you can traverse forwards or backwards, that means you should be able to start at the head or tail (end). After creating the necessary classes, then build the following methods:
     - insertAtFront
       - given some new data, add it as the new head
     - insertAtBack
       - given some new data, add it to the back of the DList
     - removeMiddleNode
5. Fri
   - insertAfter
     - add new val after a target val
   - insertBefore
     - add new val before a target val

### [SinglyLinkedList](../../data_structures/SinglyLinkedList.js) Extra Algos

- removeDupesSorted
- partition
  - partition a SList such that all values less than the given value are to the left of it, and all values greater than the given value are to the right (not perfectly sorted)
- displayPeople: in a linked list containing person objects, write a method to print a comma separated string of all the people's firstName lastName
- insertAsc: in a sorted linked list, insert a new value, maintaining ascending order
- insertPersonAscAge: build an add person method that adds a person object to linked list maintaining asc order by person's age key

### [DoublyLinkedList](../../data_structures/DoublyLinkedList.js) Extra Algos

- nthToLast
- isPalindrome
- isNodeInLeftHalf: given a reference to a node, return whether it's in left half or not

---

## [Week 3 - Binary Search Tree](../../data_structures/BinarySearchTree.js)

- go over and provide [BST Intro](../../data_structures/BinarySearchTree.md)
- provide the `print` method

1. Mon
   1. isEmpty
   2. min (with & without recursion)
   3. max (with & without recursion)
2. Tue
   1. contains (with & without recursion)
   2. range (range is max minus min)
3. Wed
   1. insert (with & without recursion)
      - insert the new value in the appropriate place in the tree
4. Thur: Depth First Search Recursive (DFS) Traversal Order Practice
   1. convertToArrPreorder
      - Preorder (Parent, Left, Right): on the provided fullTree var, it should be in this order: [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   2. convertToArrInorder
      - Inorder (Left, Parent, Right): on the provided fullTree var, it should be in this order: [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   3. convertToArrPostorder
      - Postorder (Left, Right, Parent): on the provided fullTree var, it should be in this order: [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
5. Fri
   1. convertToArrLevelOrder: Non-recursive Breadth First Search (BFS), aka LevelOrder:
      - on the provided fullTree var, it should be in this order (horizontal level-by-level top->down left->right): [50, 40, 60, 30, 45, 55, 70, 20, 35, 65, 25]
   2. size (recursive: total number of nodes)
   3. height (recursive: longest path from root to leaf)
   4. full (recursive: isFull if every node other than the leaves has two children)

---

## Week 4 - Object Practice

1. Mon
   - [entries](../../recreated_methods/Object/entries.js)
   - [insert](../../objects/insert.js)
2. Tue
   - [findObjects](../../objects/findObjects.js)
   - [findByIdAndUpdate](../../objects/findByIdAndUpdate.js)
3. Wed
   - [filterByKey](../../objects/filterByKey.js)
   - [coronaVirusAtRisk](../../objects/coronaVirusAtRisk.js)
   - [santasNaughtyList](../../objects/santasNaughtyList.js)
4. Thur
   - [lens](../../objects/lens.js)
   - [getMaxServings](../../objects/getMaxServings.js)
5. Fri
   - [modelAChair](../../design/modelAChair.js)
