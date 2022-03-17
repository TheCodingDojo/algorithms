const { BSTNode, BinarySearchTree } = require("../BinarySearchTree");

console.log("Only methods with the below names will be tested if they exist:");
console.table([
  "isEmpty",
  "min",
  "minRecursive",
  "max",
  "maxRecursive",
  "contains",
  "containsRecursive",
  "insert",
  "insertRecursive",
  "toArrPreorder",
  "toArrInorder",
  "toArrPostorder",
  "toArrLevelorder",
  "size",
  "height",
  "isFull",
]);

function arrToBST(nums) {
  const bst = new BinarySearchTree();

  if (nums.length >= 1) {
    bst.root = new BSTNode(nums[0]);
  }

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i],
      node = new BSTNode(n);
    let current = bst.root;

    while (1) {
      if (n <= current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }
  return bst;
}

let testBST, emptyBST, oneNodeBST, twoNodeBST, fullBST;
const emptyCtx = "empty tree",
  oneNodeCtx = "one node tree",
  twoNodeCtx = "two node tree",
  fullCtx = "full tree";

beforeEach(() => {
  testBST = new BinarySearchTree();
  emptyBST = new BinarySearchTree();
  oneNodeBST = arrToBST([1]);
  twoNodeBST = arrToBST([1, 2]);
  fullBST = arrToBST([
    25, 15, 10, 22, 4, 12, 18, 24, 50, 35, 70, 31, 44, 66, 90,
  ]);
});

describe("new BSTNode(5)", () => {
  it("should instantiate a new empty node that has left and right keys set to null and a data key set to the passed in data.", () => {
    const node = new BSTNode(5);
    expect(node.left).toEqual(null);
    expect(node.right).toEqual(null);
    expect(node.data).toEqual(5);
  });
});

describe("new BinarySearchTree()", () => {
  it("should instantiate a new BinarySearchTree that has a root key which is set to null.", () => {
    expect(testBST.root).toEqual(null);
  });
});

describe("isEmpty", () => {
  if (BinarySearchTree.prototype.isEmpty) {
    it("should return a bool indicating if the tree is empty.", () => {
      expect(emptyBST.isEmpty()).toEqual(true);
      expect(oneNodeBST.isEmpty()).toEqual(false);
    });
  }
});

describe("min", () => {
  if (BinarySearchTree.prototype.min) {
    it("should return the min value from the BST or null if it's empty.", () => {
      expect(emptyBST.min()).withContext(emptyCtx).toEqual(null);
      expect(oneNodeBST.min()).withContext(oneNodeCtx).toEqual(1);
      expect(twoNodeBST.min()).withContext(twoNodeCtx).toEqual(1);
      expect(fullBST.min()).withContext(fullCtx).toEqual(4);
    });
  }
});

describe("minRecursive", () => {
  if (BinarySearchTree.prototype.minRecursive) {
    it("should return the min value from the BST or null if it's empty.", () => {
      expect(emptyBST.minRecursive()).withContext(emptyCtx).toEqual(null);
      expect(oneNodeBST.minRecursive()).withContext(oneNodeCtx).toEqual(1);
      expect(twoNodeBST.minRecursive()).withContext(twoNodeCtx).toEqual(1);
      expect(fullBST.minRecursive()).withContext(fullCtx).toEqual(4);
    });
  }
});

describe("max", () => {
  if (BinarySearchTree.prototype.max) {
    it("should return the max value from the BST or null if it's empty.", () => {
      expect(emptyBST.max()).withContext(emptyCtx).toEqual(null);
      expect(oneNodeBST.max()).withContext(oneNodeCtx).toEqual(1);
      expect(twoNodeBST.max()).withContext(twoNodeCtx).toEqual(2);
      expect(fullBST.max()).withContext(fullCtx).toEqual(90);
    });
  }
});

describe("maxRecursive", () => {
  if (BinarySearchTree.prototype.maxRecursive) {
    it("should return the max value from the BST or null if it's empty.", () => {
      expect(emptyBST.maxRecursive()).withContext(emptyCtx).toEqual(null);
      expect(oneNodeBST.maxRecursive()).withContext(oneNodeCtx).toEqual(1);
      expect(twoNodeBST.maxRecursive()).withContext(twoNodeCtx).toEqual(2);
      expect(fullBST.maxRecursive()).withContext(fullCtx).toEqual(90);
    });
  }
});

describe("contains", () => {
  if (BinarySearchTree.prototype.contains) {
    it("should return a bool to indicate if the given value was found.", () => {
      expect(emptyBST.contains(1)).withContext(emptyCtx).toEqual(false);
      expect(oneNodeBST.contains(1)).toEqual(true);
      expect(oneNodeBST.contains(0)).toEqual(false);
      expect(twoNodeBST.contains(2)).toEqual(true);
      expect(twoNodeBST.contains(0)).toEqual(false);
      expect(fullBST.contains(90)).toEqual(true);
      expect(fullBST.contains(4)).toEqual(true);
      expect(fullBST.contains(3)).toEqual(false);
      expect(fullBST.contains(13)).toEqual(false);
    });
  }
});

describe("containsRecursive", () => {
  if (BinarySearchTree.prototype.containsRecursive) {
    it("should return a bool to indicate if the given value was found.", () => {
      expect(emptyBST.containsRecursive(1))
        .withContext(emptyCtx)
        .toEqual(false);
      expect(oneNodeBST.containsRecursive(1)).toEqual(true);
      expect(oneNodeBST.containsRecursive(0)).toEqual(false);
      expect(twoNodeBST.containsRecursive(2)).toEqual(true);
      expect(twoNodeBST.containsRecursive(0)).toEqual(false);
      expect(fullBST.containsRecursive(90)).toEqual(true);
      expect(fullBST.containsRecursive(4)).toEqual(true);
      expect(fullBST.containsRecursive(3)).toEqual(false);
      expect(fullBST.containsRecursive(13)).toEqual(false);
    });
  }
});

describe("range", () => {
  if (BinarySearchTree.prototype.range) {
    it("should return the range (max minus min) or null.", () => {
      expect(emptyBST.range()).withContext(emptyCtx).toEqual(null);
      expect(oneNodeBST.range()).withContext(oneNodeCtx).toEqual(0);
      expect(fullBST.range()).toEqual(86);
    });
  }
});

describe("toArrPreorder", () => {
  if (BinarySearchTree.prototype.toArrPreorder) {
    it("should return an array of the node's data in Preorder (Parent, Left, Right).", () => {
      expect(emptyBST.toArrPreorder()).withContext(emptyCtx).toEqual([]);
      expect(oneNodeBST.toArrPreorder()).withContext(oneNodeCtx).toEqual([1]);
      expect(fullBST.toArrPreorder()).toEqual([
        25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90,
      ]);
    });
  }
});

describe("toArrInorder", () => {
  if (BinarySearchTree.prototype.toArrInorder) {
    it("should return an array of the node's data in Inorder (Left, Parent, Right).", () => {
      expect(emptyBST.toArrInorder()).withContext(emptyCtx).toEqual([]);
      expect(oneNodeBST.toArrInorder()).withContext(oneNodeCtx).toEqual([1]);
      expect(fullBST.toArrInorder()).toEqual([
        4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90,
      ]);
    });
  }
});

describe("toArrPostorder", () => {
  if (BinarySearchTree.prototype.toArrPostorder) {
    it("should return an array of the node's data in Postorder (Left, Right, Parent).", () => {
      expect(emptyBST.toArrPostorder()).withContext(emptyCtx).toEqual([]);
      expect(oneNodeBST.toArrPostorder()).withContext(oneNodeCtx).toEqual([1]);
      expect(fullBST.toArrPostorder()).toEqual([
        4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25,
      ]);
    });
  }
});

describe("toArrLevelorder", () => {
  if (BinarySearchTree.prototype.toArrLevelorder) {
    it("should return an array of the node's data in Levelorder (horizontal level-by-level top->down left->right).", () => {
      expect(emptyBST.toArrLevelorder()).withContext(emptyCtx).toEqual([]);
      expect(oneNodeBST.toArrLevelorder()).withContext(oneNodeCtx).toEqual([1]);
      expect(fullBST.toArrLevelorder()).toEqual([
        25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90,
      ]);
    });
  }
});

describe("size", () => {
  if (BinarySearchTree.prototype.size) {
    it("should return the size (total number of nodes).", () => {
      expect(emptyBST.size()).withContext(emptyCtx).toEqual(0);
      expect(oneNodeBST.size()).withContext(oneNodeCtx).toEqual(1);
      expect(fullBST.size()).withContext(fullCtx).toEqual(15);
    });
  }
});

describe("height", () => {
  if (BinarySearchTree.prototype.height) {
    it("should return the height of the tree (how many levels there are).", () => {
      expect(emptyBST.height(emptyBST.root)).withContext(emptyCtx).toEqual(0);
      expect(oneNodeBST.height(oneNodeBST.root))
        .withContext(oneNodeCtx)
        .toEqual(1);
      expect(fullBST.height(fullBST.root)).withContext(fullCtx).toEqual(4);
    });
  }
});

describe("isFull", () => {
  if (BinarySearchTree.prototype.isFull) {
    it("should return a bool indicating if the tree is full (every node has two children except for the leaf nodes.).", () => {
      expect(emptyBST.isFull(emptyBST.root))
        .withContext(emptyCtx)
        .toEqual(false);
      expect(oneNodeBST.isFull(oneNodeBST.root))
        .withContext(oneNodeCtx)
        .toEqual(true);
      expect(fullBST.isFull(fullBST.root)).withContext(fullCtx).toEqual(true);

      const leftTree = arrToBST(2, 1);
      expect(leftTree.isFull(leftTree.root))
        .withContext("the tree only has left children")
        .toEqual(false);
    });
  }
});
