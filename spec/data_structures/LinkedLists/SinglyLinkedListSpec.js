// TODO: beforeEach cleanup, see DoublyLinkedListSpec

const {
  Node,
  SinglyLinkedList,
} = require("../../../data_structures/LinkedLists/SinglyLinkedList");

console.log("Only methods with the below names will be tested if they exist:");
console.table([
  "isEmpty",
  "insertAtBack",
  "insertAtFront",
  "removeHead",
  "average",
  "contains",
  "removeBack",
  "recursiveMax",
  "secondToLast",
  "removeVal",
  "prepend",
  "concat",
  "moveMinToFront",
  "splitOnVal",
  "reverse",
  "hasLoop",
  "removeNegatives",
]);

function arrToLinkedList(arr = []) {
  return arr.reduceRight((list, data) => {
    const node = new Node(data);

    if (!list.head) {
      list.head = node;
    } else {
      node.next = list.head;
      list.head = node;
    }
    return list;
  }, new SinglyLinkedList());
}

describe("new SinglyLinkedList()", () => {
  it("should instantiate an empty list with a key named 'head' that is set to null.", () => {
    expect(new SinglyLinkedList().head).toEqual(null);
  });
});

const emptyList = new SinglyLinkedList();
const emptyCtx = "empty list";
const oneNodeList = arrToLinkedList([1]);
const oneNodeCtx = "one node list";
const twoNodeList = arrToLinkedList([1, 2]);
const twoNodeCtx = "two node list";
const firstThreeList = arrToLinkedList([1, 2, 3]);
const secondThreeList = arrToLinkedList([4, 5, 6]);
const unorderedList = arrToLinkedList([-5, -10, 4, -3, 6, 1, -7, -2]);

// last node connects back to the head
const perfectLoopList = arrToLinkedList([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head;

// node 4 connects to node 2
const loopList = arrToLinkedList([1, 2, 3, 4]);
loopList.head.next.next.next = loopList.head.next;

const sortedDupeList = arrToLinkedList([1, 1, 1, 2, 3, 3, 4, 5, 5]);

describe("isEmpty", () => {
  it("should return true or false to represent if the linked list is empty or not.", () => {
    if (SinglyLinkedList.prototype.isEmpty) {
      expect(emptyList.isEmpty()).withContext(emptyCtx).toEqual(true);
      expect(oneNodeList.isEmpty())
        .withContext("non-empty list")
        .toEqual(false);
    }
  });
});

describe("insertAtBack", () => {
  it("should insert the given data at the back of the linked list.", () => {
    if (SinglyLinkedList.prototype.insertAtBack) {
      const list = new SinglyLinkedList();
      list.insertAtBack(1);

      expect(list)
        .withContext(
          "One node should have been added with the given data and the head should be set to this one node."
        )
        .toEqual(oneNodeList);

      list.insertAtBack(2);

      expect(list)
        .withContext(
          "A second node with the given data should have been added to the back while the head remains set to the first node."
        )
        .toEqual(twoNodeList);
    }
  });
});

describe("insertAtFront", () => {
  if (SinglyLinkedList.prototype.insertAtFront) {
    it("should insert a new node with the given data at the front of the list.", () => {
      const list = new SinglyLinkedList();

      list.insertAtFront(1);
      expect(list).toEqual(oneNodeList);

      list.insertAtFront(2);
      expect(list).toEqual(arrToLinkedList([2, 1]));
    });
  }
});

describe("removeHead", () => {
  if (SinglyLinkedList.prototype.removeHead) {
    it("should remove the head node and return the data of the old head.", () => {
      let list = arrToLinkedList([1]);
      const returnCtx = "return value check.";

      let ret = list.removeHead();
      expect(ret).withContext(returnCtx).toEqual(1);
      expect(list).toEqual(emptyList);

      list = arrToLinkedList([1, 2, 3]);
      ret = list.removeHead();
      expect(ret).withContext(returnCtx).toEqual(1);
      expect(list).toEqual(arrToLinkedList([2, 3]));
    });
  }
});

describe("average", () => {
  if (SinglyLinkedList.prototype.average) {
    it("should return the average of the list.", () => {
      expect(emptyList.average()).withContext(emptyCtx).toEqual(NaN);
      expect(firstThreeList.average())
        .withContext("list containing data 1, 2, 3")
        .toEqual(2);
    });
  }
});

describe("contains", () => {
  if (SinglyLinkedList.prototype.contains) {
    it("should return whether or not the given data is found in the list.", () => {
      expect(emptyList.contains(0)).withContext(emptyCtx).toEqual(false);
      expect(firstThreeList.contains(0)).toEqual(false);

      [1, 2, 3].forEach((n) =>
        expect(firstThreeList.contains(n)).toEqual(true)
      );
    });
  }
});

describe("removeBack", () => {
  if (SinglyLinkedList.prototype.removeBack) {
    it("should remove the last node and return it's data.", () => {
      const testList = arrToLinkedList([1, 2]);
      const retCtx = "the data of the removed node should have been returned.";
      const removedCtx = "the node should have been removed from the list.";

      let ret = testList.removeBack();
      expect(ret).withContext(retCtx).toEqual(2);
      expect(testList).withContext(removedCtx).toEqual(oneNodeList);

      ret = testList.removeBack();
      expect(ret).withContext(retCtx).toEqual(1);
      expect(testList).withContext(removedCtx).toEqual(emptyList);

      ret = testList.removeBack();
      expect(ret).withContext("removeBack on an empty list").toEqual(null);
    });
  }
});

describe("recursiveMax", () => {
  if (SinglyLinkedList.prototype.recursiveMax) {
    it("should return the max data in the list and not require any args to be passed in.", () => {
      let ret = emptyList.recursiveMax();
      expect(ret).withContext(emptyCtx).toEqual(null);

      ret = oneNodeList.recursiveMax();
      expect(ret).withContext(oneNodeCtx).toEqual(1);

      ret = firstThreeList.recursiveMax();
      expect(ret).withContext("max at end of list").toEqual(3);

      ret = unorderedList.recursiveMax();
      expect(ret).withContext("max not at start or end").toEqual(6);
    });
  }
});

describe("secondToLast", () => {
  if (SinglyLinkedList.prototype.secondToLast) {
    it("should return the data of the 2nd to last node or null.", () => {
      let ret = emptyList.secondToLast();
      expect(ret).withContext(emptyCtx).toEqual(null);

      ret = oneNodeList.secondToLast();
      expect(ret).withContext(oneNodeCtx).toEqual(null);

      ret = twoNodeList.secondToLast();
      expect(ret).withContext(twoNodeCtx).toEqual(1);

      ret = firstThreeList.secondToLast();
      expect(ret).withContext("three node list").toEqual(2);
    });
  }
});

describe("removeVal", () => {
  if (SinglyLinkedList.prototype.removeVal) {
    it("should remove the node with the given data and return the node was found and removed or not.", () => {
      const emptyTest = new SinglyLinkedList();
      const unorderedTest = arrToLinkedList([5, 1, 6, 4, 2]);

      expect(emptyTest.removeVal(1)).withContext(emptyCtx).toEqual(false);
      expect(emptyTest)
        .withContext(
          "when called on an empty list the list should not be mutated"
        )
        .toEqual(emptyList);

      expect(unorderedTest.removeVal(0))
        .withContext("the given data doesn't exist in the list")
        .toEqual(false);
      expect(unorderedTest)
        .withContext(
          "the list should not have changed since the given data was not in the list."
        )
        .toEqual(arrToLinkedList([5, 1, 6, 4, 2]));

      expect(unorderedTest.removeVal(5))
        .withContext("the head node should have been found")
        .toEqual(true);
      expect(unorderedTest)
        .withContext("the head should have been removed and updated")
        .toEqual(arrToLinkedList([1, 6, 4, 2]));

      expect(unorderedTest.removeVal(6))
        .withContext("the node after the head should have been found")
        .toEqual(true);
      expect(unorderedTest)
        .withContext("the node after the head should have been removed")
        .toEqual(arrToLinkedList([1, 4, 2]));

      // expect(unorderedTest.removeVal(4)).toEqual(true);
      // expect(unorderedTest)
      //   .withContext("the node should have been removed")
      //   .toEqual(arrToLinkedList([1, 2]));
    });
  }
});

describe("prepend", () => {
  if (SinglyLinkedList.prototype.prepend) {
    it("should add the given new data before the node with the given target data.", () => {
      const testList = new SinglyLinkedList();

      expect(testList.prepend(0, 5))
        .withContext("empty list with a target value that isn't null")
        .toEqual(false);
      expect(testList)
        .withContext(
          "the list should not have been mutated since the target val wasn't found"
        )
        .toEqual(emptyList);

      testList.insertAtBack(2);

      expect(testList.prepend(1, 2))
        .withContext("prepend before the head")
        .toEqual(true);
      expect(testList)
        .withContext("a new head should have been added")
        .toEqual(twoNodeList);

      expect(testList.prepend(0, 2))
        .withContext("prepend before last node")
        .toEqual(true);
      expect(testList)
        .withContext("a new node should have been added before the last node")
        .toEqual(arrToLinkedList([1, 0, 2]));

      expect(testList.prepend(5, 1000))
        .withContext("the target value should not have been found")
        .toEqual(false);
      expect(testList)
        .withContext(
          "the list should be unchanged since the target value wasn't in the list"
        )
        .toEqual(arrToLinkedList([1, 0, 2]));
    });
  }

  describe("concat", () => {
    if (SinglyLinkedList.prototype.concat) {
      it("should add all of the items of the given list to the back of this list without mutating the given list.", () => {
        const testList = new SinglyLinkedList();
        const concatEmpty = new SinglyLinkedList();
        const concatFirstThree = arrToLinkedList([1, 2, 3]);
        const concatSecondThree = arrToLinkedList([4, 5, 6]);
        const noMutateCtx = "the given list should not have been mutated";

        testList.concat(concatEmpty);
        expect(testList)
          .withContext(
            "nothing should have been added to the list since an empty list was provided"
          )
          .toEqual(emptyList);
        expect(concatEmpty).withContext(noMutateCtx).toEqual(emptyList);

        testList.concat(concatFirstThree);
        expect(testList)
          .withContext(
            "an empty list that has a non-empty list concatenated to it should contain all the items given list only."
          )
          .toEqual(firstThreeList);
        expect(concatFirstThree)
          .withContext(noMutateCtx)
          .toEqual(firstThreeList);

        testList.concat(concatSecondThree);
        expect(testList)
          .withContext(
            "all the given lists items should have been added to the back of this list"
          )
          .toEqual(arrToLinkedList([1, 2, 3, 4, 5, 6]));
        expect(concatSecondThree)
          .withContext(noMutateCtx)
          .toEqual(secondThreeList);
      });
    }
  });
});

describe("moveMinToFront", () => {
  if (SinglyLinkedList.prototype.moveMinToFront) {
    it("should move the node with the min data to the front of the list.", () => {
      const emptyTest = new SinglyLinkedList();
      const oneNodeTest = arrToLinkedList([1]);
      const minInMiddleTest = arrToLinkedList([4, 3, 1, 2, 6]);
      const minAtEndTest = arrToLinkedList([4, 3, 2, 6, 1]);
      const expected = arrToLinkedList([1, 4, 3, 2, 6]);

      emptyTest.moveMinToFront();
      expect(emptyTest).withContext(emptyCtx).toEqual(emptyList);

      oneNodeTest.moveMinToFront();
      expect(oneNodeTest).withContext(oneNodeCtx).toEqual(oneNodeList);

      minInMiddleTest.moveMinToFront();
      expect(minInMiddleTest)
        .withContext("min was in the middle")
        .toEqual(expected);

      minAtEndTest.moveMinToFront();
      expect(minAtEndTest).withContext("min was at the end").toEqual(expected);
    });
  }
});

describe("splitOnVal", () => {
  if (SinglyLinkedList.prototype.splitOnVal) {
    it("should split the list on the given value so that the node with the given val and beyond are removed and returned.", () => {
      const emptyTest = new SinglyLinkedList();
      const oneNodeTest = arrToLinkedList([1]);
      const testList = arrToLinkedList([1, 3, 5, 2, 4]);

      let ret = emptyTest.splitOnVal(5);
      expect(ret)
        .withContext(
          "when an empty list is split an empty list should be returned"
        )
        .toEqual(emptyList);
      expect(emptyTest)
        .withContext(
          "when the given value is not found the list should not be muted"
        )
        .toEqual(emptyTest);

      ret = oneNodeTest.splitOnVal(1);
      expect(ret)
        .withContext("single node list split on the head")
        .toEqual(oneNodeList);
      expect(oneNodeTest)
        .withContext("a single node list split on the head should now be empty")
        .toEqual(emptyList);

      ret = testList.splitOnVal(5);
      expect(ret)
        .withContext("split in the middle")
        .toEqual(arrToLinkedList([5, 2, 4]));
      expect(testList)
        .withContext(
          "this list should have had the split node and beyond removed"
        )
        .toEqual(arrToLinkedList([1, 3]));
    });
  }
});

describe("reverse", () => {
  if (SinglyLinkedList.prototype.reverse) {
    it("should reverse the linked list in place", () => {
      const testCases = [
        { list: new SinglyLinkedList(), expected: emptyList },
        { list: arrToLinkedList([1]), expected: arrToLinkedList([1]) },
        { list: arrToLinkedList([1, 2]), expected: arrToLinkedList([2, 1]) },
        {
          list: arrToLinkedList([1, 2, 3]),
          expected: arrToLinkedList([3, 2, 1]),
        },
      ];

      testCases.forEach(({ list, expected }, i) => {
        list.reverse();

        expect(list)
          .withContext(`${i + 1} node list`)
          .toEqual(expected);
      });
    });
  }
});

describe("hasLoop", () => {
  if (SinglyLinkedList.prototype.hasLoop) {
    it("should return a bool to represent if the list has a loop in it.", () => {
      expect(emptyList.hasLoop()).withContext(emptyCtx).toEqual(false);
      expect(oneNodeList.hasLoop())
        .withContext(oneNodeCtx + " without a loop")
        .toEqual(false);
      expect(firstThreeList.hasLoop())
        .withContext("three node list without loop")
        .toEqual(false);
      expect(perfectLoopList.hasLoop())
        .withContext("list with loop where last node connects to the head.")
        .toEqual(true);
      expect(loopList.hasLoop())
        .withContext(
          "list with loop where last node connects to a node other than the head."
        )
        .toEqual(true);
    });
  }
});

describe("removeNegatives", () => {
  if (SinglyLinkedList.prototype.removeNegatives) {
    it("should remove the nodes that have negative data in place.", () => {
      const negativesTest = arrToLinkedList([-5, -10, 4, -3, 6, 1, -7, -2]);

      negativesTest.removeNegatives();

      expect(negativesTest)
        .withContext(
          "list starts with and ends with multiple negatives in a row and has some negatives and positives in between."
        )
        .toEqual(arrToLinkedList([4, 6, 1]));
    });
  }
});
