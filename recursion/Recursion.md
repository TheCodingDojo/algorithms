# Recursion Intro

- [Recursion Visualized](https://visualgo.net/bn/recursion)

---

## Base Case

- the goal of the recursion where you return the result actual desired value
- additional note: `return functionName()`
  - the `return` is needed even tho elsewhere you may have a `return someValue` so that the initial function call will return whatever the inner recursive function calls return, otherwise `undefined` will be ultimately returned

---

## Termination Condition

- when something 'bad' happens, exit the recursion
- prevents bad inputs from triggering the recursion

---

## Call Stack

- when a function is called from within another function, the inner function must finish before the outer function can finish, which is a Last In First Out (LIFO) ordering pattern.
- LIFO is implemented using what is called a stack. Imagine a stack of heavy blocks, it is easier to add to the top and remove from the top than trying to remove from anywhere else because it would be much heavier. Adding to the top and removing from the top is LIFO
- a stack is implemented using an array or a linked list, with an array, the "top" of the stack is at the back of the array, so `.push` and `.pop` are used for LIFO. With a linked list the "top" of the stack is at the front, so `insertAtFront` and `removeHead` are used for LIFO
- in a call stack, it is a stack of the pending functions that have been started but have not been finished yet, the last function to be called will be the first function to finish and then removed from the call stack (LIFO)
- the call stack can be seen in debug mode in the side panel

---

## Pass By Value / Reference

- Primitive data types are passed into functions by value, or as a "copy"
  - i.e., if you pass a string that is in a var to 3 separate functions, each function gets it's own copy of the string, if the string is changed in one of the 3 functions, it is only being changed in that one place
  - In some cases with recursion, using a primitive value parameter that you update in recursive function calls will cause a problem since the parameter exists as a copy in multiple recursive calls and therefore can be updated separately from one another and be out of sync. A solution to this is to put the primitive value parameter into an object or array and then use that as the paramter so that it is passed to functions via reference so that all functions refer to the same single object so if it is updated all pointers have that up-to-date data
