// JavaScript interview with a Pivotal Labs engineer: LRU Cache: https://youtu.be/yYA_jPqjV1g
// https://leetcode.com/problems/lru-cache/

/* 
  LRU = Least Recently Used Cache

  LRU caches are often used to implement caches which you do not want to grow indefinitely.
  The cache has a max size, and when a new key is inserted that would make it grow
  larger than the max size, the key which has not been accessed for the longest
  time is removed to make space.

  The LRU you design should support these operations:

  get(key): get the value of the key if the key exists in the cache
    - returns -1 if not found

  put(key, value): update or insert the value if the key is not already present

  Browsers use something like this cache / store for later pages you've recently visited,
  but if you haven't visited one in a while it will be removed when a new page is visited.

  START SIMPLE:
    - you know how to add a key to an object
    - you know how to retrieve a value from an object by a key
    - start with this, write two functions, 
      1. function that takes a key and a value, then adds it to an object
      2. function that takes a key and returns a value or -1 if key doesn't exist
    - then wrap these functions into a class as methods and the other necessary vars as properties of the class
    - then think about the other requirements and where to go next

*/

const { DoublyLinkedList } = require("../../data_structures/DoublyLinkedList");

class CacheItem {
  constructor(value) {
    this.value = value;
    this.lastAccessDate = new Date();
  }
}

// when keys are accessed / added the same millisecond, using new Date can no longer guarantee the correct order
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
  }

  // Time: O(1) if key exists, O(n) if not -> O(n) linear
  // Space: O(1)
  put(key, value) {
    if (this.cache.hasOwnProperty(key)) {
      const item = this.cache[key];
      item.value = value;
      item.lastAccessDate = new Date();
    } else {
      if (this.size === this.capacity) {
        delete this.cache[this.getLRUKey()];
        this.size--;
      }
      this.cache[key] = new CacheItem(value);
      this.size++;
    }
  }

  // Time: O(1) constant
  // Space: O(1)
  get(key) {
    if (this.cache.hasOwnProperty(key)) {
      const cacheItem = this.cache[key];
      cacheItem.lastAccessDate = new Date();
      return cacheItem.value;
    } else {
      return -1;
    }
  }

  // Time: O(n) linear
  // Space: O(1) constant
  getLRUKey() {
    let oldestAccessTime = new Date();
    let LRUKey;

    for (const key in this.cache) {
      const accessTime = this.cache[key].lastAccessDate;

      if (accessTime < oldestAccessTime) {
        LRUKey = key;
        oldestAccessTime = accessTime;
      }
    }
    return LRUKey;
  }
}

// To be able to differentiate between least recently used keys when they were both accessed same time (same millisecond)
class LRUCache2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.leastUsedKeyQueue = [];
    this.cache = {};
  }

  // Time: O(2n) if key exists (splice + indexOf), O(n) if not from shift -> O(n) linear
  // Space: O(1) constant
  put(key, value) {
    if (this.cache.hasOwnProperty(key)) {
      this.leastUsedKeyQueue.splice(this.leastUsedKeyQueue.indexOf(key), 1);
    } else if (this.leastUsedKeyQueue.length === this.capacity) {
      delete this.cache[this.leastUsedKeyQueue.shift()];
    }

    this.cache[key] = value;
    this.leastUsedKeyQueue.push(key);
  }

  // Time: O(2n) -> O(n) linear
  // Space: O(1)
  get(key) {
    if (this.cache.hasOwnProperty(key)) {
      this.leastUsedKeyQueue.splice(this.leastUsedKeyQueue.indexOf(key), 1);
      this.leastUsedKeyQueue.push(key);
      return this.cache[key];
    } else {
      return -1;
    }
  }
}

// O(1) time solution using new Map, hash map in js which preservers key insertion order
class LRUCache3 {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (this.cache.has(key)) {
      const y = this.cache.get(key);
      this.put(key, y);
      return y;
    }
    return -1;
  }

  put(key, value) {
    this.cache.delete(key);
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const least = this.cache.keys().next().value;
      this.cache.delete(least);
    }
  }
}

// Time: O(1) constant, since removeNode by reference (in a doubly linked list), insertAtFront, delete key are all O(1) time
// Space: O(2n) -> O(n) linear
class LRUCache4 {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new DoublyLinkedList();
    this.cacheTable = {};
  }

  // since we always move node to the front after it's been used, the least recently used will always be the tail
  get(key) {
    if (this.cacheTable.hasOwnProperty(key)) {
      this.moveToFront(key);
      return this.cache.head.data.val;
    }
    return -1;
  }

  put(key, val) {
    if (this.cacheTable.hasOwnProperty(key)) {
      this.cacheTable[key].data.val = val;
      this.moveToFront(key);
    } else {
      if (this.size === this.capacity) {
        const removedNode = this.cache.removeTail();
        delete this.cacheTable[removedNode.data.key];
        this.size--;
      }

      this.cache.insertAtFront({ key, val });
      this.cacheTable[key] = this.cache.head;
      this.size++;
    }
  }

  moveToFront(key) {
    const node = this.cacheTable[key];
    this.cache.removeNode(node);
    this.cache.insertAtFront(node.data);
    this.cacheTable[key] = this.cache.head;
  }
}

/*************************************************************************
 * Tests, create your LRUCache implementation above this then run the file
 * when ready to test .
 */
const lruCache = new LRUCache(2);

const testCases = [
  {
    method: "put",
    args: ["a", "one"],
    explanation: "'one' should be added.",
  },
  {
    method: "put",
    args: ["b", "two"],
    explanation: "'two' should be added.",
  },
  {
    method: "get",
    args: ["a"],
    expected: "'one'",
    explanation: "'one' was previously added.",
  },
  {
    method: "put",
    args: ["c", "three"],
    explanation:
      "Should evict key 'b', because key 'a' was retrieved more recently.",
  },
  { method: "put", args: ["d", "four"], explanation: "evicts key 'a'." },
  {
    method: "get",
    args: ["a"],
    expected: -1,
    explanation: "'one' should have been evicted earlier.",
  },
  {
    method: "get",
    args: ["b"],
    expected: -1,
    explanation: "'two' should have been evicted earlier.",
  },
  {
    method: "get",
    args: ["c"],
    expected: "'three'",
    explanation: "'three' was added and has not been evicted.",
  },
  {
    method: "get",
    args: ["d"],
    expected: "'four'",
    explanation: "'four' was added and has not been evicted.",
  },
];

testCases.forEach(({ method, args, expected, explanation }, idx) => {
  idx === 0 && console.log("-".repeat(85));
  const caseNumStr = `Case ${idx + 1}`;
  const methodCallStr = `lruCache.${method}(${args
    .map((a) => `'${a}'`)
    .join(", ")})`;
  const actual = lruCache[method](...args);

  console.log(`${caseNumStr}     : ${methodCallStr}`);

  if (expected) {
    console.log("Expected   :", expected);
    console.log(
      "Actual     :",
      typeof actual === "string" ? `'${actual}'` : actual
    );
  }
  console.log("Explanation:", explanation);
  console.log("-".repeat(85));
});

module.exports = {
  LRUCache,
};
