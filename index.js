const roots = require('./src/quad-roots.js'); //use the module QuadEqu

const a = 1, b = 4, c = 3;

try{ //try to catch thrown error
  console.log(roots.find(a,b,c));
  value = roots.find(a,b,c); //call function
  console.log("\n\t***** The roots for the equation are: *****\n")
  console.log("First root is:\t" + value[0] + "\nSecond root is:\t" + value[1]);
} catch (e){ //if error thrown then print error
  console.error('Error: "a" cannot be 0.');
}
