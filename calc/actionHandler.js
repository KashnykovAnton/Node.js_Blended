// const operations = require("./operations");
const { sum, sub, mult, div } = require("./operations");

const actionHandler = (operation, arrOfNumbers) => {
  switch (operation) {
    case "sum":
      sum(operation, arrOfNumbers);
      break;
    case "sub":
      sub(operation, arrOfNumbers);
      break;
    case "mult":
      mult(operation, arrOfNumbers);
      break;
    case "div":
      div(operation, arrOfNumbers);
      break;
    default:
      console.log("Unknown operation type");
  }
};

module.exports = actionHandler;
