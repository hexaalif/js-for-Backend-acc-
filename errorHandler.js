// console.log(module);

module.exports.errorHandler = function errorHandler(error) {
  //   console.log(error);
  const { name, message, stack } = error;
  console.log(stack);

  //   logger.error({
  //     name,
  //     message,
  //     stack,
  //   });
  //   console.log("internal server error");
};

// module.exports = errorHandler;

function two() {
  console.log("two");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

module.exports = {
  errorHandler,
  two,
};

console.log(module);

// const obj = {}

// obj.property1 = "";
// obj.property2 = ""
