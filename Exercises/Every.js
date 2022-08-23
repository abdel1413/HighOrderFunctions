//creat a function that takes an array and
//a testing function using every method
function every(array, predicate) {
  for (let element of array) {
    //using de Morgan law
    //a && b ==> !(!a || !b)
    if (!predicate(element)) {
      return false;
    }

    return true;
  }
}

console.log(every([1, 3, 5], (n) => n < 10));

function every2(array, testingFunction) {
  return !array.some((element) => !testingFunction(element));
}

console.log(every2([1, 3, 5], (n) => n < 10)); //true bcz all elememts < 10

// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false   bcz 10 !< 10
console.log(every([], (n) => n < 10)); //true
