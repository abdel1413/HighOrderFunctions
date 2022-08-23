/**
 *
 * @param {*} f
 * @returns
 * create a function and
 * then return new function
 */
function ReturnFunction(f) {
  //returning new function with m passed as param
  return (m) => m > f;
}

let first = ReturnFunction(20); // 20 passed as first param
console.log(first(10)); //10  as param from  the returned new fcn
//=> false

let greatherThan20 = ReturnFunction(10);
console.log(greatherThan20(30));
//=> true
