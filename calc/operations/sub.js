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

module.exports = sub;
