const { LRUCache } = require("../../design/LRUCache");

class CacheItem {
  constructor(value) {
    this.value = value;
    this.lastAccessDate = new Date();
  }
}

describe("LRUCache", () => {
  const lruCache = new LRUCache(2);

  lruCache.put("a", "one");
  lruCache.put("b", "two");
  let context = `
🧪 const lruCache = new LRUCache(2);
    .put("a", "one");
    .put("b", "two");
    .get("a")
  `;

  it(`should cache the added values and remove the least recently used values to avoid going over capacity, and return requested values.`, () => {
    expect(lruCache.get("a")).withContext(context).toEqual("one");

    lruCache.put("c", "three");
    lruCache.put("d", "four");

    context += `\t.put("c", "three");`;
    context += `\n\t.put("d", "four");`;
    context += `\n\t.get("a");`;

    expect(lruCache.get("a"))
      .withContext(context + `\n\t\t * because "one" should have been evicted.`)
      .toEqual(-1);

    context += `\n\t.get("b");`;

    expect(lruCache.get("b"))
      .withContext(context + `\n\t\t * because "two" should have been evicted.`)
      .toEqual(-1);

    context += `\n\t.get("c");`;

    expect(lruCache.get("c")).withContext(context).toEqual("three");

    context += `\n\t.get("d");`;

    expect(lruCache.get("d")).withContext(context).toEqual("four");
  });
});
