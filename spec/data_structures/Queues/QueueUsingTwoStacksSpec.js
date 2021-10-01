const Queue = require("../../data_structures/QueueUsingTwoStacks");

console.log("Only methods with the below names will be tested if they exist:");
console.table(["enqueue", "dequeue"]);

let testQueue;

beforeEach(() => {
  testQueue = new Queue();
});

describe("enqueue", () => {
  if (Queue.prototype.enqueue) {
    it("should add the given value to the back of the queue and return the new size of the queue.", () => {
      this.queue = testQueue;
      const retCtx = "enqueue should return the new length";

      expect(testQueue.enqueue(1)).withContext(retCtx).toEqual(1);
      expect(testQueue.enqueue(2)).withContext(retCtx).toEqual(2);
    });
  }
});

describe("dequeue", () => {
  if (Queue.prototype.dequeue) {
    it("should remove and return the first item of the queue.", () => {
      expect(this.queue.dequeue())
        .withContext("the dequeued item should have been returned")
        .toEqual(1);
      expect(this.queue.dequeue())
        .withContext("the dequeued item should have been returned")
        .toEqual(2);
    });
  }
});
