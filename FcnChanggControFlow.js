function unless(test, then) {
  if (!test) {
    then();
  }
}

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
