


class Game {
  constructor(stacks, reader, completionCallback) {
    this.stacks = stacks;
    this.reader = reader;
    this.completionCallback = completionCallback;
  }

  run() {
    this.promptMove();
  }

  promptMove() {
    console.log(this.stacks.toString());
    this.reader.question("Which stack do you want to take from?\n> ", (fromRes) => {
      let fromStack = parseInt(fromRes);
      this.reader.question("Which stack do you want to move to?\n> ", (toRes) => {
        let toStack = parseInt(toRes);
        if(!this.move(fromStack, toStack)) {
          console.log("INVALID MOVE");
        }
        if(!this.isFinished()){
          this.run();
        } else {
          console.log(this);
          this.completionCallback();
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

module.exports = Game;
