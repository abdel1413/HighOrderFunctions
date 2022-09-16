/**
 *
 * @param {*} test
 * @param {*} then
 * to do something n times is a function and
 * a function is just a value so we can
 *  pass a function as a value  or param to another function
 * here unless, or repeat
 * then in unless and action in repeat are called function values
 * since they are themselves function.
 */
function unless(test, then) {
  if (!test) {
    then();
  }
}

// pass function action as a function value
function repeat(num, action) {
  for (let i = 0; i < num; i++) {
    action(i);
  }
}

//here we are creating a function value on the spot
//NOTE: to pass the function value on spot, we need to create
//a function where we pass the function and then call that function
//and then create the spot function value
repeat(5, (n) => {
  //output number only if it fails the test
  // 0%2 !=1  so print  0
  // 1%2 ===1 so skip it
  // 2%2 != 1  so print 2
  // 3%2 === 1 skip it
  //...
  unless(n % 2 === 1, () => {
    console.log(`${n} is even`);
  });
});

// => 0 is even
// => 2 is even
//=> 4 is even

function evening(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
let ar = [];
evening(n, (i) => {
  if (i % 2 === 0) {
    ar.push(i);
    console.log("inside if statement", ar);
  }
  console.log(ar);
});
