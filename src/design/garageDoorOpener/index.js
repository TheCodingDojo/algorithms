/* 
  Design a class to represent a garage door opener clicker with a single
  "button" for functionality.

  When the door is closed and the button is "pressed", the door should start
  start opening and take 10 seconds to open. The opposite should happen when the
  button is "pressed" when the door is already open.

  When the button is "pressed" and the door is already in the process of
  being opened or closed, it should pause the opening / closing process
  until the next button "press", which would unpause the process except it
  would reverse whatever process was paused (open or close).
*/

class GarageDoorOpener {
  constructor() {
    this.percentOpen = 0;
    this.intervalId = null;
    this.prevAction = "close";
  }

  pressButton() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else if (this.prevAction === "close") {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.prevAction = "open";

    this.intervalId = setInterval(() => {
      this.percentOpen += 10;

      if (this.percentOpen === 100) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }

      console.log("percent open:", this.percentOpen);
    }, 1000);
  }

  close() {
    this.prevAction = "close";

    this.intervalId = setInterval(() => {
      this.percentOpen -= 10;

      if (this.percentOpen === 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }

      console.log("percent open:", this.percentOpen);
    }, 1000);
  }
}

const garageClicker = new GarageDoorOpener();

// Should start opening.
garageClicker.pressButton();

setTimeout(() => {
  // Should pause.
  garageClicker.pressButton();

  setTimeout(() => {
    // Should close.
    garageClicker.pressButton();

    // Should Pause
    setTimeout(() => {
      garageClicker.pressButton();

      setTimeout(() => {
        // Should open.
        garageClicker.pressButton();

        setTimeout(() => {
          // Should close.
          garageClicker.pressButton();
        }, 10000);
      }, 1000);
    }, 4000);
  }, 1000);
}, 5000);
