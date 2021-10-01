const LinkedListQueue = require("../../data_structures/LinkedListQueue");

const {
  Node,
  SinglyLinkedList,
} = require("../../data_structures/SinglyLinkedList");

console.log("Only methods with the below names will be tested if they exist:");
console.table(["isEmpty", "enqueue", "dequeue", "front"]);

let testQueue;

beforeEach(() => {
  testQueue = new LinkedListQueue();
});

describe("new LinkedListQueue()", () => {
  it("should instantiate a new empty queue with a 'head' key that is set to null", () => {
    expect(testQueue.head).toEqual(null);
  });
});

describe("enqueue", () => {
  if (LinkedListQueue.prototype.enqueue) {
    it("should add the given value to the back of the queue and return the new size of the queue.", () => {
      this.queue = testQueue;
      const retCtx = "enqueue should return the new length";

      expect(testQueue.enqueue(1)).withContext(retCtx).toEqual(1);
      expect(testQueue.enqueue(2)).withContext(retCtx).toEqual(2);
    });
  }
});

describe("dequeue", () => {
  if (LinkedListQueue.prototype.dequeue) {
    it("should remove and return the first item of the queue.", () => {
      expect(this.queue.dequeue())
        .withContext("the dequeued item should have been returned")
        .toEqual(1);
    });
  }
});

describe("isEmpty", () => {
  if (LinkedListQueue.prototype.isEmpty) {
    it("should return a bool indicating if the queue is empty.", () => {
      expect(testQueue.isEmpty()).toEqual(true);
      expect(this.queue.isEmpty()).toEqual(false);
    });
  }
});

describe("front", () => {
  if (LinkedListQueue.prototype.front) {
    it("should return the first element in the queue without removing it.", () => {
      expect(this.queue.front())
        .withContext("the first item should have been returned")
        .toEqual(2);
    });
  }
});
