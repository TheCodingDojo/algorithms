const logStyles = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

/**
 * Send a feelingless automaton test driver to drive your functions to see if it crashes to avoid personal injury.
 * Algos should be ran with node or nodemon because the console logs are clipped in debugger
 * @param {Array<Function>} testFuncs - Array of functions to test, can works with a single function instead of array
 * @param {Array<{ arguments: Array, expected: any }>} testCases - Array of objects with the specified keys: array of "arguments" to pass to each function and an "expected" output for those arguments, also works with a single test case instead of array
 */
function testDriver(testFuncs = [], testCases = []) {
  const {
    bgBlack,
    bright,
    fgBlue,
    fgCyan,
    fgGreen,
    fgRed,
    fgYellow,
    fgMagenta,
    fgWhite,
    underscore,
  } = logStyles;

  // allow 1 or an array of testFuncs and testCases to be passed in, if they aren't an array, put the 1 item passed in
  // into an array so the below loops will work either way
  let funcs = testFuncs;
  let cases = testCases;

  if (typeof testFuncs === "function") {
    // it's not an array, so put the 1 function into an array so below loop will work
    funcs = [testFuncs];
  }

  if (Array.isArray(testCases) === false) {
    cases = [testCases];
  }

  for (let i = 0; i < funcs.length; i++) {
    const func = funcs[i];
    const paramNames = getParamNames(func);

    console.log(
      `${bgBlack + fgYellow}%s${logStyles.reset}`,
      "\n" + "*".repeat(85)
    );
    console.log(
      `${bgBlack + fgMagenta + underscore}%s${logStyles.reset}`,
      `Test Driving ⛟  ƒunction: ${func.name}\n`
    );

    // execute each test case against each function
    for (let j = 0; j < cases.length; j++) {
      // object destructure syntax for object at j index to put the values for the "arguments" and "expected" keys into vars of the same name
      let { arguments, expected } = cases[j];

      const caseNumStr = `🧪 Case ${j + 1}.`;

      console.log(
        `${bgBlack + fgBlue + bright}%s${logStyles.reset}`,
        caseNumStr + "\n"
      );

      console.log(`${fgWhite + bright}%s${logStyles.reset}`, "Given:   ");

      const argStrPrefixes = arguments.map(
        (arg, idx) => `Arg ${idx + 1} (${paramNames[idx]}):`
      );
      const longestArgStrPrefix = Math.max(
        ...argStrPrefixes.map((str) => str.length)
      );

      arguments.forEach((arg, idx) => {
        const formattedArg = typeof arg === "string" ? `"${arg}"` : arg;

        console.log(
          `${bgBlack + fgCyan}%s${logStyles.reset}`,
          `${argStrPrefixes[idx]}${" ".repeat(
            longestArgStrPrefix - argStrPrefixes[idx].length
          )}`,
          formattedArg
        );
      });

      try {
        let actual = func(...arguments);

        const formattedActual =
          typeof actual === "string" ? `"${actual}"` : actual;
        const formattedExpected =
          typeof expected === "string" ? `"${expected}"` : expected;

        console.log(
          `\n${bgBlack + fgGreen}%s${logStyles.reset}`,
          `Expected:`,
          formattedExpected
        );
        console.log(
          `${bgBlack + fgMagenta}%s${logStyles.reset}`,
          `Actual:  `,
          formattedActual
        );
      } catch (err) {
        console.log(
          `${bgBlack + fgRed + underscore}%s${logStyles.reset}`,
          `❌ Error on ${caseNumStr}`
        );
        console.log(err);
      }

      const lastFunc = i === funcs.length - 1;
      const lastCase = j === cases.length - 1;
      const lastCaseAndNotLastFunc = lastCase && !lastFunc;

      if (lastCaseAndNotLastFunc === false) {
        // for aesthetic reasons, log this unless it's the last case being tested on any function but the last one
        console.log(`${fgGreen}%s${logStyles.reset}`, "-".repeat(85));
      }
    }
  }
}

// https://stackoverflow.com/a/9924463/7869597
var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, "");
  var result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];
  return result;
}

module.exports = {
  testDriver,
};
