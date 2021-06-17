class TrieNode {
  constructor(val = null) {
    this.val = val;
    // children will be TrieNodes as well
    this.children = [];
  }
}

class TrieSet {
  constructor() {
    this.root = new TrieNode("");
  }

  add(val, node = this.root, partial = "") {
    // when val str has been sliced all the way it will be empty str
    if (val === "") {
      if (node.val === partial) {
        return false;
      }

      node.val = partial;
      return true;
    }

    const index = val[0].toLowerCase().charCodeAt(0) - 97;
    let nextNode = node.children[index];

    if (nextNode === undefined) {
      nextNode = node.children[index] = new TrieNode();
    }
    return this.add(val.slice(1), nextNode, partial + val[0]);
  }

  contains(val, node = this.root, partial = "") {
    if (node === undefined) {
      return false;
    }

    if (val === "") {
      return node.val === partial;
    }

    const index = val[0].toLowerCase().charCodeAt(0) - 97;
    return this.contains(val.slice(1), node.children[index], partial + val[0]);
  }

  autoComplete(val, node = this.root, completions = []) {
    if (node === undefined) return completions;

    if (val === "") {
      if (node.val !== null) {
        completions.push(node.val);
      }

      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i] !== undefined) {
          this.autoComplete("", node.children[i], completions);
        }
      }
    } else {
      const index = val[0].toLowerCase().charCodeAt(0) - 97;
      this.autoComplete(val.slice(1), node.children[index], completions);
    }
    return completions;
  }
}

module.exports = {
  TrieSet,
  TrieNode,
};
