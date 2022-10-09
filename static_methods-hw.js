// * ===== W2D3 HOMEWORK =====

// ===== STATIC METHODS AND PROPERTIES =====

// * There is only one Governor in the state
// TODO: a. Add static methods and properties you'd expect a Governor to have.
// ! Log the properties and test the methods (don't instantiate)

// https://www.nga.org/governors/powers-and-authority/

class Governor {
  // parameter
  constructor(state, name, party, inauguration, term) {
    this.state = state; // property
    this.name = name;
    this.party = party;
    this.inauguration = inauguration;
    this.term = term;
  }
  // Method
  static executiveOrders() {
    console.log("The authority for governors to issue executive orders.");
  }

  static emergencyPowers() {
    console.log(
      "As chief executive, governors are responsible for ensuring their state is adequately prepared for emergencies and disasters of all types and sizes."
    );
  }
  static veto() {
    console.log(
      "All 50 state governors have the power to veto whole legislative measures."
    );
  }
}

Governor.executiveOrders();
Governor.emergencyPowers();
Governor.veto();

// ===== INHERITANCE =====

// * Your base class

// Person{
//     constructor(){

//     }
// }

// TODO: a. Think of three properties all people share, set them with the constructor
// TODO: b. Think of three methods all people share
// TODO: c. Create a PostalWorker class that inherits from person, add some methods
// TODO: d. Create a Chef class that inherits from person, add some methods
// TODO: e. Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
