//create property with function
let BigBird = {};
BigBird.speak = function (line) {
  console.log(`this bird is saying :${line}`);
};

console.log(BigBird.speak("i am a bird"));

//create an object and then call it inside a function

function flying(where) {
  console.log(`the bird with color ${this.type} flies to ${where} `);
}

WhiteBird = { type: "white", flying };
BlackBird = { type: "black", flying };
console.log(WhiteBird.flying("tree")); //the bird with color white flies to tree

//using .call method
//NOTE, start with the function and the pass the object name
//as first param and the second param is the param of the function
//So if the function did not receive a param when defining
//it, you don't need to pass that second argument in .call method.

//function   object scop   param from function
flying.call(BlackBird, "bblackbalckblack");

//arrow function can work inside the function keyword when using
//function.call methd though It doesn't bind its own this.
//This is because it can see this binds of the scope around them
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

normalize.call({ coords: [0, 2, 3, 4], length: 5 });

//create an object with properties
let cds = { coords: [2, 3, 4, 5], length: 4 };

//create a function inside which we have an arrow function
function average(argument) {
  console.log(
    `${this.coords.reduce((a, b) => a + b) / this.length} and ${argument}`
  );
}

//call the function using call. method
average.call(cds, "this is argument from the function doubleDive");
