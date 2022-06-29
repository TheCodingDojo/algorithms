/* 
Iteratively renders HTML lists with nested lists for the children matching
the given parent-child-relationships based on the ids.

Display the id as the innerHTML.
*/

const data1 = [
  { parent: null, id: "A" },
  { parent: "A", id: "B" },
  { parent: "A", id: "C" },
  { parent: "A", id: "D" },
  { parent: "B", id: "E" },
  { parent: "C", id: "F" },
  { parent: "D", id: "G" },
];

/* 
Expected1:
<ul>
  <li id="A">
    A
    <ul>
      <li id="B">
        B
        <ul>
          <li id="E">E</li>
        </ul>
      </li>
      <li id="C">
        C
        <ul>
          <li id="F">F</li>
        </ul>
      </li>
      <li id="D">
        D
        <ul>
          <li id="G">G</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
*/

/** TODO
 * Iteratively renders an HTML list containing child lists corresponding to
 * the parent-child-relationship based on the given ids and displays the id.
 * @param {{parent: string, id: string}[]} data
 */
function iterativelyRenderTree(data) {
  let rootId = null;
  const idToChildrenMap = new Map();

  for (const elem of data) {
    if (elem.parent === null) {
      rootId = elem.id;
    }

    if (idToChildrenMap.has(elem.id) === false) {
      idToChildrenMap.set(elem.id, []);
    }

    idToChildrenMap.get(elem.id).push(elem);
  }

  const stack = [];
  for (const [id, children] of idToChildrenMap.entries()) {
  }
}
