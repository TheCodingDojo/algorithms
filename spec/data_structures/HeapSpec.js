const { MinHeap } = require("../../data_structures/Heap");

console.log("Only methods with the below names will be tested if they exist:");
console.table(["insert", "extract"]);

let minHeapTest;

beforeEach(() => {
  minHeapTest = new MinHeap();
});

describe("new MinHeap()", () => {
  it("should instantiate a new empty MinHeap with a property named 'heap' that is an array with null at index 0.", () => {
    expect(minHeapTest.heap)
      .withContext("the new heap's .heap property should be: [null]")
      .toEqual([null]);
  });
});

describe("insert", () => {
  if (MinHeap.prototype.insert) {
    it("should insert a new given value and order the heap array accordingly.", () => {
      const testCases = [
        { insert: 5, expectedRet: 1, expectedHeap: [null, 5] },
        { insert: 4, expectedRet: 2, expectedHeap: [null, 4, 5] },
        { insert: 7, expectedRet: 3, expectedHeap: [null, 4, 5, 7] },
        { insert: 3, expectedRet: 4, expectedHeap: [null, 3, 4, 7, 5] },
        { insert: 6, expectedRet: 5, expectedHeap: [null, 3, 4, 7, 5, 6] },
        { insert: 2, expectedRet: 6, expectedHeap: [null, 2, 4, 3, 5, 6, 7] },
      ];

      testCases.forEach(({ insert, expectedRet, expectedHeap }, i, cases) => {
        let actualRet = minHeapTest.insert(insert);

        const hithertoInsertOrder = cases
          .slice(0, i + 1)
          .map((testCase) => testCase.insert);

        expect(actualRet)
          .withContext(
            "the new length should have been returned, excluding the null at 0 idx from the count"
          )
          .toEqual(expectedRet);

        expect(minHeapTest.heap)
          .withContext(
            `values inserted in this order: ${hithertoInsertOrder} should result in the heap being in this order: null${expectedHeap}`
          )
          .toEqual(expectedHeap);
      });

      this.currentHeap = minHeapTest;
    });
  }
});

describe("extract", () => {
  if (MinHeap.prototype.extract) {
    it("should remove and return the minimum value from the heap and re-order the heap as needed.", () => {
      const testCases = [
        { expectedRet: 2, expectedHeap: [null, 3, 4, 7, 5, 6] },
        { expectedRet: 3, expectedHeap: [null, 4, 5, 7, 6] },
        { expectedRet: 4, expectedHeap: [null, 5, 6, 7] },
        { expectedRet: 5, expectedHeap: [null, 6, 7] },
        { expectedRet: 6, expectedHeap: [null, 7] },
        { expectedRet: 7, expectedHeap: [null] },
        { expectedRet: null, expectedHeap: [null] },
      ];

      testCases.forEach(({ expectedRet, expectedHeap }) => {
        const initialHeap = "null" + this.currentHeap.heap.toString();

        const actualRet = this.currentHeap.extract();
        expect(actualRet)
          .withContext(
            `The smallest val should have been returned from this heap: [${initialHeap}]\n`
          )
          .toEqual(expectedRet);

        expect(this.currentHeap.heap)
          .withContext(
            `\n[${initialHeap}] <- Before extraction\n[null${expectedHeap}] <- After extraction expectation\n`
          )
          .toEqual(expectedHeap);
      });
    });
  }
});
