/* 
Alumni interview algo in 2021

Use OOP to represent the folder structure from the displaydirstructure.png
then use recursion to display the folder structure on an HTML page.
*/

/*****************************************************************************/

const directories = [
  {
    name: "src",
    dirs: [
      {
        name: "doc",
        dirs: [
          { name: "TOC.md" },
          { name: "css.md" },
          { name: "extend.md" },
          { name: "faq.md" },
          { name: "html.md" },
          { name: "js.md" },
          { name: "misc.md" },
          { name: "usage.md" },
        ],
      },
      { name: "img", dirs: [{ name: ".gitignore" }] },
      {
        name: "js",
        dirs: [{ name: "main.js" }, { name: "plugins.js" }],
      },
      { name: "404.html" },
      { name: "LICENSE.txt" },
      { name: "browserconfig.xml" },
      { name: "favicon.ico" },
      { name: "icon.png" },
      { name: "index.html" },
      { name: "robots.txt" },
    ],
  },
  {
    name: "test",
    dirs: [{ name: "file_content.js" }, { name: "file_existence.js" }],
  },
  { name: "CHANGELOG.md" },
  { name: "LICENSE.txt" },
  { name: "README.md" },
  { name: "gulpfile.babel.js" },
  { name: "modernizr-config.json" },
  { name: "package.json" },
];

function renderDirectories(dirs, parentNode = document.body) {
  for (const dir of dirs) {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = dir.name;
    ul.appendChild(li);
    ul.style.borderLeft = "1px dotted black";
    ul.style.margin = "0px";
    ul.style.paddingTop = "5px";
    ul.style.paddingBottom = "5px";
    parentNode.appendChild(ul);

    if (dir.hasOwnProperty("dirs")) {
      renderDirectories(dir.dirs, li);
    }
  }
}

renderDirectories(directories, document.getElementById("directories"));
