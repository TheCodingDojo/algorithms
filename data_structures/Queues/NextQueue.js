// not sure if there's a best practice here or if this would be a good extra algo

/*
  Design a queue that automatically enqueues every 3rd dequeued person object to another queue

  Something like a security line where every 3rd person is randomly sent to and extra security check line
*/

const Queue = require("./Queue");

// students not expected to use extends, could just re-write the basic methods
class NextQueue extends Queue {
  constructor(items, nextQueue) {
    // call the constructor for Queue class
    super(items);

    // props only added to NextQueue
    this.dequeueCount = 0;
    this.nextQueue = nextQueue;
  }

  // generic, all go to next queue so this class can be used generically, not just for every 3rd dequeued item
  dueque() {
    // inherited dequeue is being overwritten but we can still call the original dequeue method via super
    const dequeued = super.dequeue();
    this.nextQueue.enqueue(dequeued);
    return dequeued;
  }

  dequeueEveryThirdToNext() {
    const dequeued = super.dequeue();
    this.dequeueCount++;

    if (this.dequeueCount % 3 === 0 && dequeued !== undefined) {
      this.nextQueue.enqueue(dequeued);
    }
    return dequeued;
  }

  // more flexible, allow for the logic that determines if the item goes to the next queue to be passed in
  // and allow a new nextQueue to be provided as well
  dequeueToNextConditionally(sendToNextCallback, nextQ = this.nextQueue) {
    const dequeued = super.dequeue();
    this.dequeueCount++;

    if (
      dequeued !== undefined &&
      sendToNextCallback.call(this, dequeued) === true
    ) {
      nextQ.enqueue(dequeued);
    }
    return dequeued;
  }
}

const initItems = [
  { name: "person 1", flaggedBySecurity: true },
  { name: "person 2", flaggedBySecurity: false },
  { name: "person 3", flaggedBySecurity: false },
  { name: "person 4", flaggedBySecurity: false },
  { name: "person 5", flaggedBySecurity: false },
  { name: "person 6", flaggedBySecurity: false },
];

let additionalSecurityQueue = new Queue();
let securityQueue = new NextQueue(initItems.slice(), additionalSecurityQueue);

securityQueue.dequeueEveryThirdToNext();
securityQueue.dequeueEveryThirdToNext();
securityQueue.dequeueEveryThirdToNext();
securityQueue.dequeueEveryThirdToNext();
securityQueue.dequeueEveryThirdToNext();
securityQueue.dequeueEveryThirdToNext();

// reset for more testing
additionalSecurityQueue = new Queue();
securityQueue = new NextQueue(initItems.slice(), additionalSecurityQueue);

const isAdditionalSecurityNeeded = function (dequeued) {
  if (this.dequeueCount % 3 === 0 || dequeued.flaggedBySecurity) {
    return true;
  }
  return false;
};

securityQueue.dequeueToNextConditionally(isAdditionalSecurityNeeded);
securityQueue.dequeueToNextConditionally(isAdditionalSecurityNeeded);
securityQueue.dequeueToNextConditionally(isAdditionalSecurityNeeded);
securityQueue.dequeueToNextConditionally(isAdditionalSecurityNeeded);
securityQueue.dequeueToNextConditionally(isAdditionalSecurityNeeded);
securityQueue.dequeueToNextConditionally(isAdditionalSecurityNeeded);
