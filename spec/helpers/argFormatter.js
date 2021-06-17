const getParamNames = require("./getParamNames");

function argFormatter(func, args, context = "") {
  const paramNames = getParamNames(func);
  const argLabels = paramNames.map(
    (paramName, i) => `Arg ${i + 1} (${paramName}):`
  );

  const maxArgLabelLen = Math.max(...argLabels.map((arg) => arg.length));

  let msg = `\n ${context} \n Given:`;

  args.forEach(
    (arg, i) =>
      (msg += `\n    ${
        argLabels[i] + " ".repeat(maxArgLabelLen - argLabels[i].length)
      } ${JSON.stringify(arg) || arg?.toString?.()}`)
  );

  return msg + "\n";
}

module.exports = argFormatter;
