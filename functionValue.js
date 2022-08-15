//fuction that do something N times
//Since "doing somethg " is a "function" and function is
//just a value, we can therefore pass "action " as
//fcn value
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// => 0
// => 1
// =>2

//we don't necessarily need to pass a predifined function to
//repeat,like we did above repeat(n, fcnValue), we can just
// create  it on the spot. (inside a function)

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);
