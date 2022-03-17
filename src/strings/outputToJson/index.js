/* 
Alumni interview question in 2021.

Given the output text from an executable file, convert it into JSON.

The result should be a JSON array of two objects.
*/

const fs = require("fs");

// Open VSCode to the folder this file is in for it to find the output.txt
function outputToJson(filePath = "./output.txt") {
  try {
    const jsonStr = fs
      .readFileSync(filePath, "utf-8")
      .split("\n")
      .reduce((str, row, i, arr) => {
        if (i === arr.length - 1) {
          return str + "}]";
        }

        // end of object
        if (row == "\r") {
          return str + "},{";
        }

        // Comma before new KVP unless it's the first KVP.
        str[str.length - 1] !== "{" && (str += ",");

        let [key, val] = row.split(":");
        const trimmedVal = val.trim();
        val =
          trimmedVal !== "true" && trimmedVal !== "false" && isNaN(+trimmedVal)
            ? `"${trimmedVal}"`
            : trimmedVal;

        return str + `"${key.trim()}": ${val}`;
      }, "[{");
    return JSON.parse(jsonStr);
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = { outputToJson };
