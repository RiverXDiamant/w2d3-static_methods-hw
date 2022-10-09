// * ===== W2D3 HOMEWORK =====

// ===== STATIC METHODS AND PROPERTIES =====

// * There is only one Governor in the state
// TODO: a. Add static methods and properties you'd expect a Governor to have.
// ! Log the properties and test the methods (don't instantiate)

class Governor {
  // parameter
  constructor(name, state, party, inauguration, term) {
    this.name = name;
    this.state = state; // property
    this.party = party;
    this.inauguration = inauguration;
    this.term = term;
  }
  // Method
  static executiveOrders() {
    console.log(`A Governor can issue an executive order.`);
  }

  static emergencyPowers() {
    console.log(
      `A Governor has Emergency Powers in the event of disasters of all types and sizes.`
    );
  }
  static veto() {
    console.log(`A Governor has the power to veto whole legislative measures.`);
  }
}

const governorOne = new Governor();
console.log(governorOne);
Governor.executiveOrders();
Governor.emergencyPowers();
Governor.veto();

// ===== INHERITANCE =====

// * Your base class

// Person{
//     constructor(){

//     }
// }

// TODO: a. Three properties all people share, set them with the constructor
// TODO: b. Three methods all people share
// TODO: c. Create a PostalWorker class that inherits from person, add some methods
// TODO: d. Create a Chef class that inherits from person, add some methods
// ! Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
  constructor(name, location, title) {
    this.name = name;
    this.location = location;
    this.title = title;
  }
  greet() {
    console.log(`Hello! My name is ${this.name}.`);
  }
  working() {
    console.log(`I am on my way to work.`);
  }
  lunchBreak() {
    console.log(`I am on a lunch break.`);
  }
}

class PostalWorker extends Person {
  constructor(name, location, title, shift) {
    super(name, location, title);
    this.shift = shift;
  }
  clockIn() {
    console.log(`I have clocked in.`);
  }
  clockOut() {
    console.log(`I have clocked out.`);
  }
  goingHome() {
    console.log("I am on my way home.");
  }
}

class Chef extends Person {
  constructor(name, location, title, restaurant) {
    super(name, location, title);
    this.restaurant = restaurant;
  }
  jobTitle() {
    console.log(`I am the ${this.title} at ${this.restaurant}.`);
  }
  recipe() {
    console.log("I am creating a new recipe.");
  }
  shopping() {
    console.log("I am at the store shopping for ingredients.");
  }
}

const johnQ = new PostalWorker(
  "John Q",
  "Queens, New York",
  "Data Conversion Operator",
  "Thu-Sun 7am-7pm"
);
const mariahSmith = new PostalWorker(
  "Mariah Smith",
  "Salt Lake City, UT",
  "Mail Carrier",
  "Mon-Thu 7am-7pm"
);
const keliWashington = new Chef(
  "Keli Washington",
  "Laguna Beach, CA",
  "Sous Chef",
  "La Maison Blanche"
);
const danteSanders = new Chef(
  "Dante Sanders",
  "Buckhead, GA",
  "Head Chef",
  "Tuscany Courtyard"
);

console.log(johnQ);
johnQ.greet();
johnQ.working();
johnQ.lunchBreak();
johnQ.clockIn();
johnQ.clockOut();
johnQ.goingHome();

console.log(mariahSmith);
mariahSmith.greet();
mariahSmith.working();
mariahSmith.lunchBreak;
mariahSmith.clockIn();
mariahSmith.clockOut();
mariahSmith.goingHome();

console.log(keliWashington);
keliWashington.greet();
keliWashington.working();
keliWashington.lunchBreak();
keliWashington.jobTitle();
keliWashington.recipe();
keliWashington.shopping();

console.log(danteSanders);
danteSanders.greet();
danteSanders.working();
danteSanders.lunchBreak();
danteSanders.jobTitle();
danteSanders.recipe();
danteSanders.shopping();
