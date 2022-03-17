/* 
Google style guide: "The var keyword must not be used".
  https://google.github.io/styleguide/jsguide.html#features-use-const-and-let
*/

/* 
Rule of thumb:

Use const to declare variables until you get this error: 
  Uncaught TypeError: Assignment to constant variable.

  If you get that error because you actually need to reassign the variable,
  change the const to a let.

const will allow you to reassign values in arrays and objects, but it won't
allow you to reassign the whole variable itself.
*/

/* 
var vs let examples
*/

const x = 5;
/* Will cause an error because constants can't be reassigned. */
// x = 6;

/* Cannot reassign const vars this way either. */
// x += 1;

const nums = [1, 2, 3];
// This is fine, nums is NOT being reassigned, only the 0th index is.
// Similarly, you CAN reassign key value pairs on objects.
nums[0] = 10;

/* Cannot reassign the variable itself. */
// nums = [4, 5];

console.log(
  "The `var` keyword uses some behind the scenes 'magic' that catches a lot of people-off guard, so it leads to harder to find undesirable consequences rather than clear error messages that point you exactly to the problem. See a couple simple examples below.\n"
);

function varLoop() {
  console.log("\nfunction varLoop:");

  for (var i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log({
    i: i,
    note: "`var i` exists outside of the `for` block it was created within.",
  });

  while (i > 0) {
    console.log(i);
    i--;
  }
}

varLoop();

function letLoop() {
  console.log("\nfunction letLoop:");

  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log({
    i: "Trying to refer to `i` outside the loop results in: ReferenceError: i is not defined",
    note: "`let` creates `i` just for the `for` loop and it doesn't magically exist outside of it. `let` is locally scoped.",
  });
}
letLoop();

function varHoist(x) {
  console.log("\nfunction varHoist:");

  if (x > 0) {
    var y = 10;
  }

  y += 10;

  console.log({
    y: y,
    note: "var `y` exists outside of the `if` block it was created within. This is because it was automatically 'hoisted' to the top of the function rather than existing only in the `if` block.",
  });
}

varHoist(1);

function letHoist(x) {
  console.log("\nfunction letHoist:");

  if (x > 0) {
    let y = 10;
  }

  // Throws an error.
  // y += 10;

  console.log({
    "y += 10": "ReferenceError: y is not defined",
    note: "`y` only exists in the `if` block it was created within. A clear error avoids letting us accidentally cause unexpected side effects down the line.",
  });
}

letHoist(1);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function varPrintMatrix(matrix) {
  console.log("\nfunction varPrintMatrix:");
  for (var i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    for (var i = 0; i < row.length; i++) {
      var element = row[i];
      console.log(element);
    }
  }

  console.log({
    note: "The second `var i` gets hoisted and overwrites the first `var i` which makes the first `i` get stuck on 0.",
  });
}

varPrintMatrix(matrix);

function letPrintMatrix(matrix) {
  console.log("\nfunction letPrintMatrix:");
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let i = 0; i < row.length; i++) {
      const element = row[i];
      console.log(element);
    }
  }

  console.log({
    note: "`let` allows two separate `i` variables to exist. Even though this works. Even though this works with `let` it's still often better to use `j` in case you need to use `arr[i][j]` syntax which wouldn't be possible otherwise.",
  });
}

letPrintMatrix(matrix);

// Advanced example

function letCallbacksWork() {
  console.log("\nfunction letCallbacksWork:");
  const callbacks = [];

  for (let i = 0; i < 3; i++) {
    callbacks.push(function () {
      console.log(i);
    });
  }

  for (const fn of callbacks) {
    fn();
  }

  console.log({
    note: "This works because the scope that `let i` was declared in is remembered in the execution context of the callbacks.",
  });
}

letCallbacksWork();

function varCallbackExecutionContext() {
  console.log("\nfunction varCallbackExecutionContext:");
  const callbacks = [];

  for (var i = 0; i < 3; i++) {
    callbacks.push(function () {
      console.log(i);
    });
  }

  for (const fn of callbacks) {
    fn();
  }

  console.log({
    note: "This doesn't work because `var i` still exists after the `for` loop ended instead of being locally scoped. `i` remains at it's final value and all the callbacks are executed after the loop so they all get the final value of `i`.",
  });
}

varCallbackExecutionContext();

/**
 * Before `let` existed, the workaround to this problem was complex. It
 * requires using a closure to enclose the data we want to be remembered.
 */
function varCallbackExecutionContextWorkaround() {
  console.log("\nfunction varCallbackExecutionContextWorkaround:");
  const callbacks = [];

  for (var i = 0; i < 3; i++) {
    /* 
    The Immediately invoked function expression (IIFE) is the 'closure' to
    enclose the callback. It is executed immediately so that the current value
    of `i` can be passed into it so that when the returned callback is called
    back later, it's execution context remembers what the idx was at the time.
     */
    const enclosedCallback = (function (rememberedIdx) {
      return function () {
        console.log(rememberedIdx);
      };
    })(i);

    callbacks.push(enclosedCallback);
  }

  for (const fn of callbacks) {
    fn();
  }
}

varCallbackExecutionContextWorkaround();
