function noisy(action) {
  return (...args) => {
    console.log("calling with", args);
    let result = action(...args);
    console.log("called with ", args, ", and returned ", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

noisy(Math.max)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned
