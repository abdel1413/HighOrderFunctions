function firstFunction(x, action, conditionFnc) {
  if (conditionFnc(x)) {
    return action(x); //this implicitly the functoin called otherFuntoin
  } else {
    return `${x} is not less than ...`;
  }
}

function conditionChecker(x) {
  return x < 5;
}

function otherFunction(x) {
  return -x;
}

console.log(firstFunction(5, otherFunction, conditionChecker)); // => -5

function combine(num, InsideCombine) {
  let tempo;
  for (let i = 0; i < num; i++) {
    tempo = InsideCombine(i);
  }
  return tempo;
}

function functionInsideCombine(x) {
  return x + 2;
  //0 + 2 = 2
  // 1 + 2,  =3
  // 2 + 2 = 4
  // 3+2 = 5
  // 4 + 2 = 6
}

console.log(combine(5, functionInsideCombine)); // => 6
