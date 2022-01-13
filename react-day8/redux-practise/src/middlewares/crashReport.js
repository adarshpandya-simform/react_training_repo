// exporting crash report middleware

export const crashReporter = (store) => (next) => (action) => {
  console.log("crashReport");
  console.log("===================");
  console.log(store);
  console.log(next);
  console.log(action);
  console.log("===================");
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    throw err;
  }
};
