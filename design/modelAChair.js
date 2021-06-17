/* 
  This is more of a free-form algo to practice some OOP
  
  Create a chair class that has the following properties and functionality:

  color
  weight
  name
  Has a certain number of wheels (each wheel has a color and could be broken or not)
  Can be raised / lowered
  Can be reclined / not reclined
  Can be occupied / not occupied
  An instance of a person can perform a "sit" action and will update a chair to be occupied with said person

  Bonus: rig the chair with an eject functionality that ejects the current occupant out of the chair
*/

/* 
  Student solution goals:
    - creating the necessary props for the required functionality
    - methods aren't necessarily needed for every action if changing prop directly, but are encouraged and should be used for eject
    - nested object reference to keep track of occupant of chair / the chair the person is sitting on

  Example notes:

  There are many ways to do this, but in order to be safe and check things before attempting to do them, it
  can start to get complicated. Below example has pieces of multiple techniques so they can each be seen.

  A common pattern in OOP when one object is acting on another (e.g., person object raising a chair object),
  the object that is acting (person) on the other (chair), has a method to perform the action (raise chair),
  and the object that is being acted on (chair), has a prop that can be changed (isRaised). The isRaised prop
  is either changed directly (chair.isRaised = true) or via a method (chair.raise()), or a setter method
  that changes the isRaised prop to true.
  
  A setter method is an extra layer where some logic / checks can be optionally added before changing the prop.

  https://medium.com/javascript-in-plain-english/javascript-properties-getters-and-setters-619997b93612
  https://www.sitepoint.com/javascript-private-class-fields/
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.seat = null;
  }

  isSitting() {
    console.log(`isSitting: ${this.seat !== null}`);
    return this.seat !== null;
  }

  sit(seat) {
    if (this.isSitting()) {
      console.log("Already Sitting");
    } else {
      if (seat.isOccupied()) {
        console.log("Seat is taken.");
      } else {
        console.log("Sitt");
        this.seat = seat;
        seat.occupant = this; // this user is new occupant
      }
    }
  }

  // raises own seat by default, but allows person to raise any chair that's passed in
  raiseChair(chair = this.seat) {
    if (chair && typeof chair.raise === "function") {
      chair.raise();
    } else {
      throw new Error("chair cannot be raised.");
    }
  }

  lowerChair(chair = this.seat) {
    if (chair && chair.hasOwnProperty("isRaised")) {
      // changing isRaised directly, this bypasses any logic in any setter method (method to set value of isRaised)
      chair.isRaised = false;
      console.log(`${this.fullName} lowered ${chair.name}.`);
    } else {
      throw new Error("chair cannot be lowered.");
    }
  }

  setChairIsReclined(reclinedState, chair = this.seat) {
    if (chair && typeof chair.setIsReclined === "function") {
      chair.setIsReclined(reclinedState);
    } else {
      throw new Error("chair cannot be reclined.");
    }
  }

  // getter & setter example (not necessary)
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(fullName) {
    const names = fullName.split(" ");

    // empty string if names[0] is falsy
    this.firstName = names[0] || "";
    this.lastName = names[1] || "";
  }
}

class ChairWheel {
  constructor(color = "", isBroken = false) {
    this.color = color;
    this.isBroken = isBroken;
  }
}

class Chair {
  // example of a private property
  #isReclined = false;
  constructor(name, wheels = [], color = "black") {
    this.color = color;
    this.wheels = wheels;
    this.name = name;
    this.occupant = null;
    this.isRaised = false;
  }

  // both raise and lower methods could be replaced by a getter & setter like recline example
  // setter must be named differently than the prop, usually prop name prefixed with underscore
  raise() {
    if (this.isRaised) {
      console.log(`${this.name} already raised.`);
    } else {
      this.isRaised = true;
      console.log(`${this.name} raised.`);
    }
  }

  lower() {
    if (!this.isRaised) {
      console.log(`${this.name} already lowered.`);
    } else {
      this.isRaised = false;
      console.log(`${this.name} lowered.`);
    }
  }

  isOccupied() {
    console.log(`${this.name} is occupied: ${this.occupant !== null}`);
    return this.occupant !== null;
  }

  ejectOccupant() {
    if (this.isOccupied()) {
      // notice: not executing fullName because it is a getter method
      console.log(
        `${this.occupant.fullName} has been ejected out of their chair!`
      );

      const theDejectedOne = this.occupant;
      theDejectedOne.seat = null;
      this.occupant = null;

      return theDejectedOne;
    } else {
      console.log("No one to eject.");
      return null;
    }
  }

  // since it was added as a private prop, can only be accessed from outside via this method
  getIsReclined() {
    return this.#isReclined;
  }

  setIsReclined(val) {
    if (val === this.#isReclined) {
      console.log(`${this.name} isReclined is already: ` + this.#isReclined);
    } else {
      val
        ? console.log(`${this.name} reclined.`)
        : console.log(`${this.name} un-reclined.`);
      this.#isReclined = val;
    }
  }
}

const dude = new Person("Misbehaving", "Dude");

const timeOutChair = new Chair(
  "Time Out Chair",
  [
    new ChairWheel(),
    new ChairWheel(),
    new ChairWheel(),
    new ChairWheel(),
    new ChairWheel(),
  ],
  "Rebellion Red"
);

timeOutChair.setIsReclined(true);
timeOutChair.setIsReclined(false);
timeOutChair.raise();
timeOutChair.raise();
timeOutChair.lower();
// not sitting in it, but can still raise / lower
dude.raiseChair(timeOutChair);
dude.lowerChair(timeOutChair);

// trying to access private key from outside class throws an error
// timeOutChair.#isReclined;
console.log("--------------------------------");

dude.sit(timeOutChair);

dude.seat.raise();
// dude.raiseChair() is better than above because it checks if the chair can be raised, also can raise any chair
dude.raiseChair();

dude.lowerChair();

dude.setChairIsReclined(true);
dude.setChairIsReclined(true);

const ejectedDude = timeOutChair.ejectOccupant();
ejectedDude.isSitting();

dude.fullName = "NewFirstName NewLastName";
console.log(dude.fullName);
