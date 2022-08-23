import SCRIPTS from "../SCRIPTS";

/**
 *
 * @param {*} array
 * @param {*} transforms
 * NOTE: map method transforms an object array or array
 *  to new array from returned values by applying function
 * to all the object array elements.
 * the new array has the same length as the original
 */

function mapping(array, transforms) {
  let mappedElement = [];
  for (let element of array) {
    // let transformedElement = transforms(element)
    // mappedElement.push(transformedElement)
    mappedElement.push(transforms(element));
  }
  return mappedElement;
}

let rtlScripts = SCRIPTS.filter((sc) => sc.direction === "rtl");
console.log(mapping(rtlScripts, (script) => script.name));
// => (139) ['Adlam', 'Caucasian Albanian', 'Ahom', 'Arabic',...]
