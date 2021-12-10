const actionHandler = require('./actionHandler')

const [operation, ...numbers] = process.argv.slice(2);

const arrOfNumbers = numbers.map((item) => Number(item));

actionHandler(operation, arrOfNumbers)