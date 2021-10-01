# Python Algo Schedule

- [Python Olympics](https://docs.google.com/presentation/d/1l8L_gnuIUrA5yZUfrYyMbzyI7hx9ksm2hwRlIjkXRzQ/edit?ts=5cf7ec65#slide=id.p)
  - python syntax practice via timed algo competition

---

## Week 1 - [Strings](../../strings) & [Dicts](../../objects)

- [Hash Table Intro](https://docs.google.com/document/d/1r_01EQDb5jGwPPDH0cVolo1L8FJZlHp9p2jd3nfW3TQ/edit?usp=sharing)

1. Mon
   - [caseInsensitiveStringCompare](../../strings/caseInsensitiveStringCompare.js)
   - [acronymize](../../strings/acronymize.js)
   - [reverse](../../strings/reverseString.js)
2. Tue
   - [parensValid](../../strings/parensValid.js)
   - [bracesValid](../../strings/bracesValid.js)
3. Wed
   - [isPalindrome](../../strings/isPalindrome.js)
   - [freqTable](../../objects/freqTable.js)
   - [longestPalindromicSubstring](../../strings/longestPalindromicSubstring.js)
4. Thur
   - [join](../../recreated_methods/Array/join.js)
   - [bookIndex](../../strings/bookIndex.js)
5. Fri
   - [zipArraysIntoMap](../../objects/zipArraysIntoMap.js)
   - [invertHash](../../objects/invertObj.js)
   - [updateInventory](../../objects/updateInventory.js)

---

## [Week 2 - Singly Linked Lists](../../data_structures/LinkedLists/SinglyLinkedList.js)

- go over and provide [Singly Linked List Intro](../../data_structures/LinkedLists/SinglyLinkedList.md)

1. Mon
   1. isEmpty
   2. insertAtBack
   3. seedFromArr
      - given an array, insert each item of the array to the back of this linked list
2. Tue
   1. insertAtFront
      - add a new node to the front of the list
   2. removeHead
      - remove only the first node from the list and return the data of the removed node or null
   3. Extra: return the average of the list
3. Wed
   1. contains - with & without recursion
      - check if the list contains a value
   2. removeBack
      - remove the last node from the list and return it's data or null
   3. Extra: recursiveMax: return max val from list using recursion
4. Thur
   1. secondToLast
      - return the 2nd to last val
   2. removeVal
      - remove the node with the specified value and return a confirmation of if it was removed or not
   3. Extra: prepend new val before given val
5. Fri
   1. concat
      - combine two SLists together
      - if list1 is a list of nodes with values 1, 2, 3 and list2 is a list of nodes with values 4, 5, 6
        - list1.concat(list2) should result in list1 having nodes with data in this order: 1, 2, 3, 4, 5, 6
   2. moveMinToFront
      - move node with min value in it to the front of the list (work in place, do not create a new list)
   3. Extra: splitOnVal
      - splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be a new list containing (5=>2=>4)

### Extra Singly Linked List Algos

- partition
  - partition a SList such that all values less than the given value are to the left of it, and all values greater than the given value are to the right (not perfectly sorted)
- displayPeople: in a linked list containing person objects, write a method to print a comma separated string of all the people's firstName lastName
- insertAsc: in a sorted linked list, insert a new value, maintaing ascending order
- insertPersonAscAge: build an add person method that adds a person object to linked list maintaing asc order by person's age key
- SList: Remove Negatives

---

## [Week 3 - Stacks and Queues](../../data_structures)

- [Stacks and Queues Intro](../../data_structures/Queues/StacksAndQueues.md)
- [Stack](../../data_structures/Stacks/Stack.js)
- [LinkedListStack](../../data_structures/Stacks/LinkedListStack.js)
- [Queue](../../data_structures/Queues/Queue.js)
- [LinkedListQueue](../../data_structures/Queues/LinkedListQueue.js)
- [MinStack](../../data_structures/Stacks/MinStack.js)
- [PriorityQueue](../../data_structures/Queues/PriorityQueue.js)
- [NextQueue](../../data_structures/Queues/NextQueue.js)

1. Mon
   - A Stack is a LIFO (Last in First Out) data structure
   - design a class to represent a stack using an array to store the items
   - recreate the stack class using a singly linked list to store the items
   - create these methods for each classes with O(1) time: push (returns new size), pop (returns removed item), isEmpty, size, peek (return top item without removing)
2. Tue
   - A Queue is a FIFO (First in First Out) data structure
   - design a class to represent a queue using an array to store the items
   - recreate the queue class using a singly linked list to store the items
   - create these methods for each classes: enqueue (add item, return new size), dequeue (remove and return item), isEmpty, size, front (return first item without removing)
   - Time complexities should be as follows:
     - Array Queue: enqueue: O(1), dequeue: O(n), size: O(1), front: O(1)
     - Linkedd List Queue: enqueue: O(1), dequeue: O(1), size: O(1), front: O(1)
3. Wed
   - compareQueues
     - write a method on the Queue class that, given another queue, will return whether they are equal (same items in same order)
     - Use ONLY the provided queue methods, do not manually index the queue items, no extra array or objects
     - restore the queues to their original state
   - queueIsPalindrome
     - write a method on the Queue class that returns whether or not the queue is a palindrome
     - use only 1 stack as additional storage (no additional arrays / objects)
     - do not manually index the queue, use the provided queue methods and stack methods, restore the queue to original state when done
   - Extra: MinStack
     - Design a stack that supports push, pop, top, and min methods where the min method retrieves the minimum int in the stack
     - Bonus: retrieve min element in constant time (no looping).
   - AlgoORM can be optionally given just before the first entity framework lecture to give students a better understanding of ORMs
4. Thur
   - sumOfHalvesEqual
     - create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
     - DO NOT manually index the queue items, only use the provided queue methods, use no additional arrays or objects for storage
     - restore the queue to it's original state before returning
   - QueueUsingTwoStacks
     - create enqueue and dequeue methods on a new queue class that uses ONLY 2 stacks as storage but simulates a FIFO pattern
     - use only the provided stack methods from the two stacks (do not directly index)
   - Extra: NextQueue
     - Design a Queue class that automatically sends every 3rd dequeued person object to a next queue that can be specified
     - Imagine a security queue where every 3rd person is randomly sent to an additional security queue
5. Fri
   - PriorityQueue (create enqueue and dequeue methods)
     - design a new PriorityQueue class where the queue maintains an ascending order when items are added based on queue item's provided priority integer value. A priority value of 1 is most important which means it should be at the front of the queue, the first to be dequeued.
   - LinkedListPriorityQueue
   - Bonus: Queue method: processPallets

---

## Week 4 - [Recursion](../../recursion)

- [Recursion Intro](../../recursion/Recursion.md)

1. Mon
   - [sumArr](../../recursion/sumArr.js)
   - [recursiveSigma](../../recursion/recursiveSigma.js)
2. Tue
   - [factorial](../../recursion/factorial.js)
   - [fibonacci](../../recursion/fibonacci.js)
3. Wed
   - [binarySearch](../../recursion/binarySearch.js)
   - [reverseStr](../../recursion/reverseStr.js)
4. Thur
   - [sumToOneDigit](../../recursion/sumToOneDigit.js)
   - [generateAnagrams](../../recursion/generateAnagrams.js)
5. Fri
   - [lowestCommonMult](../../recursion/lowestCommonMult.js)
   - [coronaVirusFloodFill](../../recursion/coronaVirusFloodFill.js)
   - [binaryStringExpansion](../../recursion/binaryStringExpansion.js)
