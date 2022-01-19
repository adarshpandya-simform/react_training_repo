import { makeAutoObservable } from "mobx";

// model the application state
class Timer {
  secondPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondPassed += 1;
  }

  reset() {
    this.secondPassed = 0;
  }
}

const timer = new Timer();

export default timer;
