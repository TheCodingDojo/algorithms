/* 
  BehaviorSubject is a design pattern for keeping track of a value that changes
  over time where multiple different parts of your app need to know when the
  value changes because they need to perform some task when that happens.

  As an analogy, think of multiple researches that are all studying the same
  behavior subject (say an animal) to try to understand it's behavior, but each
  researcher is studying the behavior for different reasons. That means each
  researcher needs to be alerted when the behavior changes so they can study
  respond to that behavior event by studying it in their specific way.
*/

class BehaviorSubject {
  constructor(startVal) {
    this.value = startVal;
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    this.emit();
  }

  emit() {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](this.value);
    }
  }

  getValue() {
    return this.value;
  }

  /**
   * Updates the value and notifies all subscribers.
   * @param {any} value The new value.
   */
  next(value) {
    this.value = value;
    this.emit();
  }
}
