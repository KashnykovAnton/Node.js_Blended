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

module.exports = sum;
