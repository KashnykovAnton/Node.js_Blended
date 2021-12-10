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

module.exports = div;
