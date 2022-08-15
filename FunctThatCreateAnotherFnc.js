function ReturnFunction(f){ 
  return m =>m > f
}

let first = ReturnFunction(20);
console.log(first(10))