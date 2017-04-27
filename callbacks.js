class Clock {
  constructor() {
    // 1. Create a Date object.
    let curr = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hr = curr.getHours();
    this.min = curr.getMinutes();
    this.sec = curr.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // let me = this;
    // 4. Schedule the tick at 1 second intervals.
    let call =this._tick.bind(this);
    setInterval(call , 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(`${this.hr}:${this.min}:${this.sec}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    let addMin = Math.floor(this.sec / 60);
    this.sec = (this.sec + 1) % 60;
    if(addMin > 0) {
      let addHour = Math.floor(this.min / 60);
      this.min = (addMin + this.min) % 60;
      this.hour = (this.hour + addHour) % 24;
    }
    this.printTime();
  }
}

let c = new Clock();
