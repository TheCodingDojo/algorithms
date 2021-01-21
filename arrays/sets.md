# Sets

- A set is a mathematical term for a collection of values
- Arrays / lists can be referred to as a set, but there are also built in `Set` data types that have some additional rules to them

---

## `Set` Type in JS

- `new Set(val1, val2, valn)`
  - can pass in an array and when converted to a set it will be auto deduped
- iterate
- `.size`
- `.add(val)`
- `.has(val)`
- `.delete(val)`
  - returns `true` if value found & deleted

---

## Types of Sets

### Normal Set

- No dupes allowed, attempting to add a dupe will result in nothing being added. Creating a set from an array or string with dupes will remove the dupes.
- does not track count of values b/c no dupes

---

### Multiset (contains dupes)

- tracks count of values because there are dupes

---

### Ordered Set / Multiset

---

### Unordered Set / Multiset

---

### Intersection

- only values that are shared between the sets deduped

---

### Union

- [Union Example](https://i.ytimg.com/vi/WqYQ3OakKP0/maxresdefault.jpg)
- all values from both sets included but deduped
- ![Union vs Intersection](https://i.pinimg.com/originals/c9/45/d1/c945d12fcf677cc2f783a5c2f2b6acbc.png)

---

### Union Multiset

- the higher count of duped values are kept
- if there are 3 number ones in one set and 2 number ones in the other set, 3 number ones would be kept
