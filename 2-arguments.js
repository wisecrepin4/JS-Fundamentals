let length = ProcessingInstruction.argsv.splice(2).length;
if (length == 0) {
  console.log("No argumrnt");
} else if (length == 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
