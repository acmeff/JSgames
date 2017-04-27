const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class Game {
  constructor(stacks) {
    this.stacks = stacks;
  }

  run(completionCallback) {
    this.promptMove(completionCallback);
  }

  promptMove(completionCallback) {
    console.log(this);
    reader.question("Which stack do you want to take from?\n> ", (fromRes) => {
      let fromStack = parseInt(fromRes);
      reader.question("Which stack do you want to move to?\n> ", (toRes) => {
        let toStack = parseInt(toRes);
        if(!this.move(fromStack, toStack)) {
          console.log("INVALID MOVE");
        }
        if(!this.isFinished()){
          this.run(completionCallback);
        } else {
          console.log(this);
          completionCallback();
        }
      });
    });
  }

  move(fromStack, toStack){
    if(!this.stacks[fromStack] || !this.stacks[toStack] ||
      this.stacks[toStack][0] < this.stacks[fromStack][0]) {
      return false;
    }
    let disc = this.stacks[fromStack].pop();
    this.stacks[toStack].push(disc);
    return true;
  }

  isFinished() {
    let fin = false;
    for(let i = 1; i < this.stacks.length;i++) {
      if(this.stacks[i].length > 0){
        if(fin)
          return false;
        fin = true;
      }
    }
    return fin && this.stacks[0].length === 0;
  }
}

let g = new Game([[3,2,1],[],[]]);
g.run(() => console.log("IT WORKS!"));
