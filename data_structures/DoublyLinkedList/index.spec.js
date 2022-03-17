const { DLLNode, DoublyLinkedList } = require("../DoublyLinkedList");

function arrToLinkedList(arr = []) {
  return arr.reduceRight((list, data) => {
    const node = new DLLNode(data);

    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.head;
      list.head.prev = node;
      list.head = node;
    }
    return list;
  }, new DoublyLinkedList());
}

const emptyCtx = "empty list",
  oneNodeCtx = "one node list",
  twoNodeCtx = "two node list",
  threeNodeCtx = "three node list";

function generateTestLists() {
  return {
    emptyList: new DoublyLinkedList(),
    oneNodeList: arrToLinkedList([1]),
    twoNodeList: arrToLinkedList([1, 2]),
    threeNodeList: arrToLinkedList([1, 2, 3]),
  };
}

const { emptyList, oneNodeList, twoNodeList, threeNodeList } =
  generateTestLists();

let testList, emptyTest, oneNodeTest, twoNodeTest, threeNodeTest;

beforeEach(() => {
  const testLists = generateTestLists();
  testList = new DoublyLinkedList();
  emptyTest = testLists.emptyList;
  oneNodeTest = testLists.oneNodeList;
  twoNodeTest = testLists.twoNodeList;
  threeNodeTest = testLists.threeNodeList;
});

describe("new DoublyLinkedList()", () => {
  it("should instantiate a new empty DoublyLinkedList with head and tail set to null.", () => {
    expect(testList.head).toEqual(null);
    expect(testList.tail).toEqual(null);
  });
});

describe("insertAtFront", () => {
  if (DoublyLinkedList.prototype.insertAtFront) {
    it("should insert a new node at the front of the list and update the head, tail, next, and prev keys as needed.", () => {
      testList.insertAtFront(2);
      testList.insertAtFront(1);

      expect(testList)
        .withContext("two nodes should have been added starting from an empty.")
        .toEqual(twoNodeList);
    });
  }
});

describe("insertAtBack", () => {
  if (DoublyLinkedList.prototype.insertAtBack) {
    it("should insert a new node at the back of the list and update the head, tail, next, and prev keys as needed.", () => {
      testList.insertAtBack(1);
      testList.insertAtBack(2);

      expect(testList)
        .withContext("two nodes should have been added starting from an empty.")
        .toEqual(twoNodeList);
    });
  }
});

describe("removeMiddleNode", () => {
  if (DoublyLinkedList.prototype.removeMiddleNode) {
    it("should remove the middle node and return it's data or null if there is no middle node.", () => {
      const retCtx = "removed node's data should have been returned";
      const removedCtx = "the middle node should have been removed";

      expect(emptyTest.removeMiddleNode()).withContext(emptyCtx).toEqual(null);
      expect(emptyTest)
        .withContext(emptyCtx + " - should be unchanged")
        .toEqual(emptyList);

      expect(oneNodeTest.removeMiddleNode())
        .withContext(retCtx + ` from ${oneNodeCtx}`)
        .toEqual(1);
      expect(oneNodeTest)
        .withContext(removedCtx + ` from ${oneNodeCtx}`)
        .toEqual(emptyList);

      expect(twoNodeTest.removeMiddleNode())
        .withContext(twoNodeCtx)
        .toEqual(null);
      expect(twoNodeTest)
        .withContext(twoNodeCtx + " - should be unchanged")
        .toEqual(twoNodeList);

      expect(threeNodeTest.removeMiddleNode())
        .withContext(retCtx + ` from ${threeNodeCtx}`)
        .toEqual(2);
      expect(threeNodeTest)
        .withContext(removedCtx + ` from ${threeNodeCtx}`)
        .toEqual(arrToLinkedList([1, 3]));
    });
  }
});

describe("insertAfter", () => {
  if (DoublyLinkedList.prototype.insertAfter) {
    it("should insert after the node with the target value a new node with the given new value if the target value is found and return a bool indicating if the insertion was successful. The tail should be updated if needed.", () => {
      expect(emptyTest.insertAfter(0, 1))
        .withContext(
          "target val should not have been found so the insert should fail"
        )
        .toEqual(false);
      expect(emptyTest)
        .withContext(emptyCtx + " - nothing should have been inserted")
        .toEqual(emptyList);

      expect(oneNodeTest.insertAfter(1, 2))
        .withContext("should have successfully inserted")
        .toEqual(true);
      expect(oneNodeTest)
        .withContext("a new tail should have been inserted")
        .toEqual(twoNodeList);

      expect(twoNodeTest.insertAfter(1, 0))
        .withContext("should have successfully inserted")
        .toEqual(true);
      expect(twoNodeTest)
        .withContext("a new node should have been inserted in the middle")
        .toEqual(arrToLinkedList([1, 0, 2]));
    });
  }
});

describe("insertBefore", () => {
  if (DoublyLinkedList.prototype.insertBefore) {
    it("should insert before the node with the target value a new node with the given new value if the target value is found and return a bool indicating if the insertion was successful. The head should be updated if needed.", () => {
      expect(emptyTest.insertBefore(0, 1))
        .withContext(
          "target val should not have been found so the insert should fail"
        )
        .toEqual(false);
      expect(emptyTest)
        .withContext(emptyCtx + " - nothing should have been inserted")
        .toEqual(emptyList);

      expect(oneNodeTest.insertBefore(1, 2))
        .withContext("should have successfully inserted")
        .toEqual(true);
      expect(oneNodeTest)
        .withContext("a new head should have been inserted")
        .toEqual(arrToLinkedList([2, 1]));

      expect(twoNodeTest.insertBefore(2, 0))
        .withContext("should have successfully inserted")
        .toEqual(true);
      expect(twoNodeTest)
        .withContext("a new node should have been inserted in the middle")
        .toEqual(arrToLinkedList([1, 0, 2]));
    });
  }
});
