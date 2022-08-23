function ownLoop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// start = value = 3,
//  test(3 => 3 > 0) => true then
//body(3) then call update (value => value -1)
//start the loop from updated value

ownLoop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
