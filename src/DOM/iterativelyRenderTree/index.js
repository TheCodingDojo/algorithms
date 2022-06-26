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

/**
 * Iteratively renders an HTML list containing child lists corresponding to
 * the parent-child-relationship based on the given ids and displays the id.
 * @param {{parent: string, id: string}[]} data
 */
function iterativelyRenderTree(data) {
  // TODO: create this structure from given data
  const pcr = {
    root: {
      id: "A",
      children: [
        { parent: "A", id: "B", children: [{ parent: "B", id: "E" }] },
        { parent: "A", id: "C", children: [{ parent: "C", id: "F" }] },
        { parent: "A", id: "D", children: [{ parent: "D", id: "G" }] },
      ],
    },
  };
}
