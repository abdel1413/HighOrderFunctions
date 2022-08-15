import scripts from "../SCRIPTS";

/**
 *
 * @param {*} array
 * @param {*} test
 * filter methd filter out element that do not pass the test
 * and out print those who passed the test
 */
function filtering(array, test) {
  let filteredArray = [];
  for (let element of array) {
    if (test(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

console.log(filtering(scripts, (script) => script.living));
// → [{name: "Adlam", …}, …]

console.log(filtering(scripts, (script) => script.direction));
// print out all the direction

console.log(filtering(scripts, (script) => script.year === "1599"));
//filter only the array containing the year 1599
