const { Queue } = require(".");

console.log("Only methods with the below names will be tested if they exist:");
console.table([
  "isEmpty",
  "enqueue",
  "dequeue",
  "size",
  "front",
  "isSumOfHalvesEqual",
  "compareQueues",
  "isPalindrome",
]);

let testQueue;

beforeEach(() => {
  testQueue = new Queue();
});

describe("new Queue()", () => {
  it("should instantiate a new empty queue with an 'items' key that starts as an empty array", () => {
    expect(testQueue.items).toEqual([]);
  });
});

describe("enqueue", () => {
  if (Queue.prototype.enqueue) {
    it("should add the given value to the back of the queue and return the new size of the queue.", () => {
      this.queue = testQueue;
      const retCtx = "enqueue should return the new length";

      expect(testQueue.enqueue(1)).withContext(retCtx).toEqual(1);
      expect(testQueue.enqueue(2)).withContext(retCtx).toEqual(2);
      expect(testQueue.items)
        .withContext("the enqueued items should be in the queue in FIFO order")
        .toEqual([1, 2]);
    });
  }
});

describe("dequeue", () => {
  if (Queue.prototype.dequeue) {
    it("should remove and return the first item of the queue.", () => {
      expect(this.queue.dequeue())
        .withContext("the dequeued item should have been returned")
        .toEqual(1);
      expect(this.queue.items)
        .withContext("the dequeued item should have been removed")
        .toEqual([2]);
    });
  }
});

describe("isEmpty", () => {
  if (Queue.prototype.isEmpty) {
    it("should return a bool indicating if the queue is empty.", () => {
      expect(testQueue.isEmpty()).toEqual(true);
      expect(this.queue.isEmpty()).toEqual(false);
    });
  }
});

describe("size", () => {
  if (Queue.prototype.size) {
    it("should return the length of the queue.", () => {
      expect(testQueue.size()).toEqual(0);
      Queue.prototype.enqueue && expect(this.queue.size()).toEqual(1);
    });
  }
});

describe("front", () => {
  if (Queue.prototype.front) {
    it("should return the first element in the queue without removing it.", () => {
      expect(this.queue.front())
        .withContext("the first item should have been returned")
        .toEqual(2);
      expect(this.queue.items)
        .withContext("the item should not have been removed")
        .toEqual([2]);
    });
  }
});

describe("isSumOfHalvesEqual", () => {
  it("should return a bool indicating if the sum of the left half of the queue's items is equal to the sum of the right half.", () => {
    if (Queue.prototype.isSumOfHalvesEqual) {
      testQueue.items = [1, 2, 1, 2];
      expect(testQueue.isSumOfHalvesEqual()).toEqual(true);

      testQueue.items = [1, 2];
      expect(testQueue.isSumOfHalvesEqual())
        .withContext("even length, cannot be divided in half")
        .toEqual(false);
    }
  });
});

describe("isPalindrome", () => {
  it("should return a bool indicating if the queue's items form a palindrome (same items forwards and backwards).", () => {
    if (Queue.prototype.isPalindrome) {
      expect(testQueue.isPalindrome()).withContext("empty queue").toEqual(true);

      testQueue.items = [1];
      expect(testQueue.isPalindrome())
        .withContext("one item queue")
        .toEqual(true);

      testQueue.items = [1, 2, 3, 2, 1];
      expect(testQueue.isPalindrome())
        .withContext("odd lengthed palindromic queue")
        .toEqual(true);

      testQueue.items = [1, 2, 3, 3, 2, 1];
      expect(testQueue.isPalindrome())
        .withContext("even lengthed palindromic queue")
        .toEqual(true);

      testQueue.items = [1, 2];
      expect(testQueue.isPalindrome())
        .withContext("two items that are different")
        .toEqual(false);
    }
  });
});

describe("compareQueues", () => {
  it("should return a bool indicating if the given queue has the same items as this queue.", () => {
    if (Queue.prototype.compareQueues) {
      const queueA = new Queue();
      const queueB = new Queue();

      expect(queueA.compareQueues(queueB))
        .withContext("both empty")
        .toEqual(true);

      queueA.items = [1, 2, 3];
      queueB.items = [1, 2, 3];
      expect(queueA.compareQueues(queueB))
        .withContext("equal queues")
        .toEqual(true);

      queueB.items.pop();
      expect(queueA.compareQueues(queueB))
        .withContext("different lengths")
        .toEqual(false);

      queueB.items.push(0);
      expect(queueA.compareQueues(queueB))
        .withContext("same length but unequal")
        .toEqual(false);
    }
  });
});
