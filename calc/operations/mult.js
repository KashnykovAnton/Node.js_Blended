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

module.exports = mult;
