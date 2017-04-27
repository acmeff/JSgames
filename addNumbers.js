const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", (response) => {
      let currInt = parseInt(response);
      sum += currInt;
      console.log(`Current sum = ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });

  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));
