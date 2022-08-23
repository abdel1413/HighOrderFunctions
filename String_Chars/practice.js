const SCRIPTS = require("../SCRIPTS");

function countBy(array, grpname) {
  let counts = []; //where to push an inexisting items
    for (let ar of array) {
      
    //loop over the array
    let name = grpname(ar); //call the function grpman and pass each elem of the array in
    let index = counts.findIndex((c) => c.name === name);
    if (index === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[index].count++;
    }
  }
  return counts;
}
console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

function someChar(code) {
  for (let scrit of SCRIPTS) {
    if (
      scrit.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return scrit;
    }

    return null;
  }
}

console.log(someChar(121));

function whatScriptUsedIntext(text) {
  let script = countBy(text, (char) => {
      let code = someChar(char.codePointAt(0));
     
    return code ? code.name : "none";
  }).filter(({ name }) => name !== "none");
    console.log(script)

    let total = script.reduce((n, { count }) => n + count, 0);
    console.log(total)
  if (total === 0) {
    return "nothing is there";
  }
      
   return script.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)} % ${name}`;
      })
      .join(" , ");
 
}

console.log(whatScriptUsedIntext('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
