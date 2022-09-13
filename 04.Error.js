const { errorHandler, two } = require("./errorHandler.js");

two();

async function getData() {
  try {
    // undefined.find();

    const emailError = new Error("Email already exits!!");
    throw emailError;
  } catch (error) {
    // console.log(error);
    errorHandler(error);
  }
}

getData();

console.log("done");
