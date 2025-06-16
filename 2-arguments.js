let length = process.argv.splice(2).length;
if (length == 0) {
  console.log("No argument");
} else if (length == 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
