// console.log("Hello calcOOP!");

class Calculator {
  constructor(operation, arrOfNumbers) {
    this.operation = operation;
    this.arrOfNumbers = arrOfNumbers;
  }

  sum = (operation, arrOfNumbers) => {
    if (operation === "sum") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total + number;
      }, 0);
      console.log(result);
      return true;
    }
    return null;
  };

  sub = (operation, arrOfNumbers) => {
    if (operation === "sub") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total - number;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  mult = (operation, arrOfNumbers) => {
    if (operation === "mult") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total * number;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  div = (operation, arrOfNumbers) => {
    if (operation === "div") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total / number;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  actionHandler = (operation, arrOfNumbers) => {
    switch (operation) {
      case "sum":
        this.sum(operation, arrOfNumbers);
        break;
      case "sub":
        this.sub(operation, arrOfNumbers);
        break;
      case "mult":
        this.mult(operation, arrOfNumbers);
        break;
      case "div":
        this.div(operation, arrOfNumbers);
        break;
      default:
        console.log("Unknown operation type");
    }
  };

  init = () => {
    this.actionHandler(this.operation, this.arrOfNumbers);
  };
}

const [operation, ...numbers] = process.argv.slice(2);

const arrOfNumbers = numbers.map((item) => Number(item));

module.exports = new Calculator(operation, arrOfNumbers);
