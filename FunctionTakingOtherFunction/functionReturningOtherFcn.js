let x = 5;
function funcReturnOtherFnc(x) {
  let value = x + 2;
  console.log(value);
  return (y) => y + value + 3;
}

let returningFirstFcn = funcReturnOtherFnc(4); // =>6
console.log(returningFirstFcn(8)); //=> 17
