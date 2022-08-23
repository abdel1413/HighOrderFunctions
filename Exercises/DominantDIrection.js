const SCRIPTS = require("../SCRIPTS");

function countBy(items, grpname) {
  let counted = [];
  for (let element of items) {
    let names = grpname(element);

    //find the index
    let found = counted.findIndex((n) => n.name === names);

    if (found === -1) {
      counted.push({ names, count: 1 });
    } else {
      counted[found].count++;
    }
  }

  return counted;
}
//this function takes the code and output the corresponding characters
function codeToChar(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  //create a function that counts the character
  let counted = countBy(text, (char) =>
    //function converting code to char
    {
      let codes = codeToChar(char.codePointAt(0));

      return codes ? codes.direction : "none";
    }
  ).filter(({ name }) => name !== "none");

  if (counted.length === 0) {
    return "ltr";
  }
  return counted.reduce((a, b) => (a.count > b.count ? a : b)).names;
}

console.log(dominantDirection("hello")); // => ltr
//console.log(dominantDirection("Hey, مساء الخير")); //=> rtl
