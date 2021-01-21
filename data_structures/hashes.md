# Hashes

1. Mon: Hashes
   - Add
     - Create an add(key, val) method on HashMap to add a new key and value to the map. This entails hashing key, mod’ing it into the size of your array, and placing the value there.
   - Find key
     - Create a find(key) method to return value for given key. If key is not found, return null.
2. Tue: Hashes
   - Remove
     - Create HashMap method remove(key) that finds key, removes key/value pair, and returns the value (or null if key not found in our map).
   - Grow
3. Wed: Tries
   - Insert
   - Contains
4. Thur: Tries
   - Autocomplete
5. Fri: Graphs
   - Edge Lists
   - Adjacency Lists

---

## Explanation

---

### Hashe Tables Notes

- unordered data structure
- Regardless of how many key value pairs there are on a hash table (aka: objects in js, dictionaries in py, swift, C#, associative arrays in PHP, hashes in Ruby, hashtables in Java), any value can be retrieved 'instantly' in O(1) time (constant time). We will learn how this is works.
- Each element in an array can also be accessed via it's index in O(1) time, but it not very practical to have to remember that index 17 for example, is where a users first name is stored. It would be better to just be able to give that index a name to describe the data stored there.
- This is where the `String.hashCode()` method comes in. Every string can call this method on itself and get back a unique integer. Same string, same integer each time. This integer can then be used to 'map' to an index so that, ultimately, a string (word / phrase) can be used to access data at an index.
- A hashcode can be a huge integer, so we use the modulus `%` operator and a defined capacity to restrain the hashcode to more manageable range for use as array indicies.
- Empty array indicies have `undefined` as a value, this is why a key that doesn't exist on an object returns `undefined`. The keys that do exist have their values stored unordered in an array, likely with gaps: `[undefined, undefined, 'Neil', undefined, undefined, undefined 31, undefined]`

---

### Tries Notes

- best known use case is auto-complete text.
- also called digital tree or prefix tree, is a kind of search tree—an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings
- The trie data structure (initially pronounced “tree” as in the middle syllable of re*trie*val, but now universally pronounced “try” to avoid confusion) is useful in scenarios usually reserved for a hash.
- auto-complete saves additional info on the nodes about how frequently it is used as a word to improve predictive power
- Each node's value will be a letter to represent a letter in a word
  - each node has children (arry of nodes alphabetized) to represent the next possible letters in the word (empty array if the word has ended), but there could be a node that has children while still being a full word already, for words contained in other words, e.g., geek in geeks, geek is a full word alread but has 's' as a child.
- [diagram](https://4.bp.blogspot.com/-GNWc5KUMGYc/WAskP-EHFKI/AAAAAAAAEz4/8yikxc2niYgyqH0FWFafq5UTp_kUK6O5ACLcB/s1600/TrieDataStructureImpl.png)

---

## Starter Code

---

### Hash Tables

- ```js
  /**
   * Don't worry about understanding this code right now
   * just know that calling .hashCode() on a string will
   * return a unique integer for that string. Same unique
   * integer for same string each time.
   */
  String.prototype.hashCode = function() {
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
  HashMap.prototype.newMethodName = function(params) {
    // 'this' keyword will refer to the
    // HashMap instance that method1 was called on
  };
  ```

---

### Tries

- ```js
  class TrieNode {
    constructor(val = null) {
      this.val = val;
      this.children = [];
    }
  }

  class TrieSet {
    constructor() {
      this.root = new TrieNode("");
    }

    method1(params) {
      // 'this' keyword will refer to the
      // HashMap instance that method1 was called on
    }
  }

  // Alternate way to add method to class after it has been declared
  TrieSet.prototype.newMethodName = function(params) {
    // 'this' keyword will refer to the
    // TrieSet instance that method1 was called on
  };
  ```
