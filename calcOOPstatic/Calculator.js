// console.log("Hello calcOOP!");

class Calculator {
  static sum = (operation, arrOfNumbers) => {
    if (operation === "sum") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total + number;
      }, 0);
      console.log(result);
      return true;
    }
    return null;
  };

  static sub = (operation, arrOfNumbers) => {
    if (operation === "sub") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total - number;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  static mult = (operation, arrOfNumbers) => {
    if (operation === "mult") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total * number;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  static div = (operation, arrOfNumbers) => {
    if (operation === "div") {
      let result = arrOfNumbers.reduce((total, number) => {
        return total / number;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  static actionHandler = (operation, arrOfNumbers) => {
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

  static init = (operation, arrOfNumbers) => {
    this.actionHandler(operation, arrOfNumbers);
  };
}

const [operation, ...numbers] = process.argv.slice(2);

const arrOfNumbers = numbers.map((item) => Number(item));

module.exports = Calculator.init(operation, arrOfNumbers);
