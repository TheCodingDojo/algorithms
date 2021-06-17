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

  /**
   * We also store the key along with the value
   * That way keys can be looped over or you could get a list
   * of the keys if needed.
   */
  add(key, val) {
    const hashed = key.hashCode();
    const mod = hashed % this.capacity;
    this.table[mod] = [key, val];
  }

  // retrieve value using key
  find(key) {
    const hashed = key.hashCode();
    const mod = hashed % this.capacity;
    const bucket = this.table[mod];

    if (bucket === undefined) {
      return null;
    } else {
      return bucket[1];
    }
  }

  // remove and return the value (if found)
  remove(key) {
    const hashed = key.hashCode();
    const mod = hashed % this.capacity;
    const bucket = this.table[mod];
    const val = bucket[1];
    delete this.table[mod];

    return val === undefined ? null : val;
  }

  // grow capacity by 50% and then rehash
  grow() {
    this.capacity = Math.round(this.capacity * 1.5);

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        const [key, val] = this.table[i];
        const hashed = key.hashCode();
        const mod = hashed % this.capacity;

        // if mod === i, it's already in right location
        if (mod !== i) {
          delete this.table[i];
          this.table[mod] = [key, val];
        }
      }
    }
  }
}

const h = new HashMap(100);
h.add("pizza", "is good");
console.log(h.table);

module.exports = {
  HashMap,
};
