function unless(test, then) {
  if (!test) {
    then();
  }
}

repeat(5, (n) => {
  unless(n % 2 === 1, () => {
    console.log(`${n} is even`);
  });
});

// => 0 is even
// => 2 is even
//=> 4 is even
