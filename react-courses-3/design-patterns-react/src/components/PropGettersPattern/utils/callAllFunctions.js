export const callAllFunctions =
  (...functions) =>
  (...args) =>
    functions.forEach((fn) => fn && fn(...args));
