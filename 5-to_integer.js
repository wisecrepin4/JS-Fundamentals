let f = process.argv[2];
const num = Number(f);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
//testing whether a variable is a number
