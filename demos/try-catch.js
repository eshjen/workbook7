function greet() {
  throw new Error("failed");
  console.log("Hello");
}


try {
  greet();
} catch (error) {
  console.log("Error occured: " + error.message);
}
//try catch block. you surround code that you think will "Error Out"
//you catch the error & handle the condition
// API called are the most likely thing to fail, so you want to catch them in a try catch block