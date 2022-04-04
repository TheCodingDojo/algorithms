# Hashes

## Intro

- unordered data structure
- Regardless of how many key value pairs there are on a hash table (aka: objects in js, dictionaries in py, swift, C#, associative arrays in PHP, hashes in Ruby, hashtables in Java), any value can be retrieved 'instantly' in O(1) time (constant time). We will learn how this is works.
- Each element in an array can also be accessed via it's index in O(1) time, but it not very practical to have to remember that index 17 for example, is where a users first name is stored. It would be better to just be able to give that index a name to describe the data stored there.
- This is where the `String.hashCode()` method comes in. Every string can call this method on itself and get back a unique integer. Same string, same integer each time. This integer can then be used to 'map' to an index so that, ultimately, a string (word / phrase) can be used to access data at an index.
- A hashcode can be a huge integer, so we use the modulus `%` operator and a defined capacity to restrain the hashcode to more manageable range for use as array indicies.
- Empty array indicies have `undefined` as a value, this is why a key that doesn't exist on an object returns `undefined`. The keys that do exist have their values stored unordered in an array, likely with gaps: `[undefined, undefined, 'Neil', undefined, undefined, undefined 31, undefined]`

---

## Starter Code

```js
/**
 * Don't worry about understanding this code right now
 * just know that calling .hashCode() on a string will
 * return a unique integer for that string. Same unique
 * integer for same string each time.
 */
String.prototype.hashCode = function () {
  let hash = 0;

  if (this.length == 0) return hash;

  for (let i = 0; i < this.length; i++) {
    const char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; //Convert-->32b int
  }

  return hash;
};

class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.table = [];
  }

  method1(params) {
    // 'this' keyword will refer to the
    // HashMap instance that method1 was called on
  }
}

// Alternate way to add method to class after it has been declared
HashMap.prototype.newMethodName = function (params) {
  // 'this' keyword will refer to the
  // HashMap instance that method1 was called on
};
```
