class Observable {
  constructor(functionThatTakesObserver) {
    this._functionThatTakesObserver = functionThatTakesObserver;
  }

  subscribe(observer) {
    return this._functionThatTakesObserver(observer);
  }
}

const testObservable = new Observable((observer) => {
  observer.next("data 1");
  observer.next("data 2");

  setInterval(() => {
    if (Math.random() < 0.5) {
      observer.next("async data refreshed");
    } else {
      observer.error("error getting data");
    }
    observer.complete();
  }, 5000);
});

const observer1 = {
  next(data) {
    console.log("\nobserver1️⃣ ", data);
  },
  error(e) {
    console.log("\nobserver1️⃣ ", e);
  },
  complete() {
    console.log(`observer1️⃣  complete\n${"-".repeat(20)}`);
  },
};

const observer2 = {
  next(data) {
    console.log("\nobserver2️⃣ ", data);
  },
  error(e) {
    console.log("\nobserver2️⃣ ", e);
  },
  complete() {
    console.log(`observer2️⃣  complete\n${"~".repeat(20)}`);
  },
};

testObservable.subscribe(observer1);
testObservable.subscribe(observer2);
