const HanoiGame = require("./game");


const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let g = new HanoiGame([[3,2,1],[],[]], reader, () => console.log("Would you like to play again?"));
g.run();
