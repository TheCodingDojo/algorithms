const { Stack, LinkedListStack } = require("../Stack");

console.log("Only methods with the below names will be tested if they exist:");
console.table(["isEmpty", "push", "pop", "size", "peek"]);

let testStack;

beforeEach(() => {
  testStack = new Stack();
});

describe("new Stack()", () => {
  it("should instantiate a new empty stack with an 'items' key that starts as an empty array", () => {
    expect(testStack.items).toEqual([]);
  });
});

describe("push", () => {
  if (Stack.prototype.push) {
    it("should add the given value to the back of the stack and return the new size of the stack.", () => {
      const retCtx = "should return the new length of the items array.";
      this.stack = testStack;

      expect(this.stack.push(1)).withContext(retCtx).toEqual(1);
      expect(this.stack.push(2)).withContext(retCtx).toEqual(2);
      expect(this.stack.items)
        .withContext("new items should have been added to the back")
        .toEqual([1, 2]);
    });
  }
});

describe("peek", () => {
  if (Stack.prototype.peek) {
    it("should return the top item of the stack (end of array) without removing it.", () => {
      expect(this.stack.peek())
        .withContext("the top item should have been returned.")
        .toEqual(2);
      expect(this.stack.items)
        .withContext("no items should have been removed")
        .toEqual([1, 2]);
    });
  }
});
describe("pop", () => {
  if (Stack.prototype.pop) {
    it("should remove and return the last item in the stack.", () => {
      const retCtx = "the last / top item should be returned";
      expect(this.stack.pop()).withContext(retCtx).toEqual(2);
      expect(this.stack.pop()).withContext(retCtx).toEqual(1);
      expect(this.stack.items)
        .withContext("the items should have been popped out of the stack array")
        .toEqual([]);
    });
  }
});

describe("size", () => {
  if (Stack.prototype.size) {
    it("should return the length of the stack array.", () => {
      expect(testStack.size()).toEqual(0);

      testStack.items = [1, 2, 3];
      expect(testStack.size()).toEqual(3);
    });
  }
});

describe("isEmpty", () => {
  if (Stack.prototype.isEmpty) {
    it("should return a bool indicating if the stack is empty.", () => {
      expect(testStack.isEmpty()).withContext("empty stack").toEqual(true);

      testStack.items = [1];
      expect(testStack.isEmpty()).withContext("non-empty stack").toEqual(false);
    });
  }
});
