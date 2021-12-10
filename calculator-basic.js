console.log("calculator");

// sum+
// sub-
// mult*
// div/

// console.log(process.argv);

// console.log(process.argv.slice(2));

const [operation, ...numbers] = process.argv.slice(2);

const arrOfNumbers = numbers.map((item) => Number(item));

// console.log(operation);
// console.log(numbers);
// console.log(arrOfNumbers);

// if (operation === "sum") {
//   let result = arrOfNumbers.reduce((total, number) => {
//     return total + number;
//   }, 0);
//   console.log(result);
// }

// if (operation === "sub") {
//   let result = arrOfNumbers.reduce((total, number) => {
//     return total - number;
//   });
//   console.log(result);
// }

// if (operation === "mult") {
//   let result = arrOfNumbers.reduce((total, number) => {
//     return total * number;
//   });
//   console.log(result);
// }

// if (operation === "div") {
//   let result = arrOfNumbers.reduce((total, number) => {
//     return total / number;
//   });
//   console.log(result);
// }

const sum = (operation, arrOfNumbers) => {
  if (operation === "sum") {
    let result = arrOfNumbers.reduce((total, number) => {
      return total + number;
    }, 0);
    console.log(result);
    return true;
  }
  return null;
};

const sub = (operation, arrOfNumbers) => {
  if (operation === "sub") {
    let result = arrOfNumbers.reduce((total, number) => {
      return total - number;
    });
    console.log(result);
    return true;
  }
  return null;
};

const mult = (operation, arrOfNumbers) => {
  if (operation === "mult") {
    let result = arrOfNumbers.reduce((total, number) => {
      return total * number;
    });
    console.log(result);
    return true;
  }
  return null;
};

const div = (operation, arrOfNumbers) => {
  if (operation === "div") {
    let result = arrOfNumbers.reduce((total, number) => {
      return total / number;
    });
    console.log(result);
    return true;
  }
  return null;
};

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
