# Trie

## Intro

- best known use case is auto-complete text.
- also called digital tree or prefix tree, is a kind of search tree—an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings
- The trie data structure (initially pronounced “tree” as in the middle syllable of re*trie*val, but now universally pronounced “try” to avoid confusion) is useful in scenarios usually reserved for a hash.
- auto-complete saves additional info on the nodes about how frequently it is used as a word to improve predictive power
- Each node's value will be a letter to represent a letter in a word
  - each node has children (arry of nodes alphabetized) to represent the next possible letters in the word (empty array if the word has ended), but there could be a node that has children while still being a full word already, for words contained in other words, e.g., geek in geeks, geek is a full word alread but has 's' as a child.
- [diagram](https://4.bp.blogspot.com/-GNWc5KUMGYc/WAskP-EHFKI/AAAAAAAAEz4/8yikxc2niYgyqH0FWFafq5UTp_kUK6O5ACLcB/s1600/TrieDataStructureImpl.png)

## Starter Code

```js
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
TrieSet.prototype.newMethodName = function (params) {
  // 'this' keyword will refer to the
  // TrieSet instance that method1 was called on
};
```
