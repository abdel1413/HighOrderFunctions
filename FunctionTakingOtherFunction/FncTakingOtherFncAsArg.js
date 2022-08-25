function firstFunction(x, action) {
  return action(x); //this implicitly the functoin called otherFuntoin
}

function otherFunction(x) {
  return -x;
}

console.log(firstFunction(5, otherFunction)); // => -5

function combine(num, InsideCombine) {
  let tempo;
  for (let i = 0; i < num; i++) {
    tempo = InsideCombine(i);
  }
  return tempo;
}

function functionInsideCombine(x) {
  return x + 2;

  // 1 + 2,  =3
  // 2 + 2 = 4
  // 3+2 = 5
  // 4 + 2 = 6
}

console.log(combine(5, functionInsideCombine)); // => 6
