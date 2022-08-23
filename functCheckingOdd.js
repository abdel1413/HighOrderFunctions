//base function that only that test the input
function checker(test, then) {
  if (!test) {
    then();
  }
}

//function that loop over the array
function looping(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

looping([1, 2, 3, 4, 5, 6, 7, 8, 9], (n) => {
  checker(n % 2 === 0, () => console.log(`${n} is odd`));
});
