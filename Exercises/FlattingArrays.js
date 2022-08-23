function flatting(array) {
  let newAr = [];
  for (let el of array) {
    console.log(el); //=> [1,2,3]
    for (let e of el) {
      console.log("e", e); //=> 1
      newAr.push(e);
    }
  }
  return newAr;
}

console.log(flatting([[1, 2, 3], [4, 5], [6]]));

// time complexity = O(n^2)
//DETAILS
/**
 * 
 * @param {*} array 
 * @returns 
 * 
 * (3) [1, 2, 3]
VM53464:6 e 1
VM53464:6 e 2
VM53464:6 e 3
VM53464:4 (2) [4, 5]
VM53464:6 e 4
VM53464:6 e 5
VM53464:4 [6]
VM53464:6 e 6
VM53464:14 (6) [1, 2, 3, 4, 5, 6]
 */

function flatting2(array) {
  for (let element of array) {
  }
  let flattenedArray = [];
  return array.reduce((flat, current) => {
    console.log("flat", flat); //1st flat => []
    console.log("current", current); //1st current =.[1,2,4]
    return flat.concat(current); // =>[1,2,3] ie flat = [1,2,3] and curren = [4,5]
  }, flattenedArray);
}

console.log(flatting2([[1, 2, 3], [4, 5], [6]]));

//TIME COMPLEXITY : O(n)

/** DETAILS
 * flat []
 current (3) [1, 2, 3]
flat (3) [1, 2, 3]
 current (2) [4, 5]
 flat (5) [1, 2, 3, 4, 5]
 current [6]
 (6) [1, 2, 3, 4, 5, 6]
 */
