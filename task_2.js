let developer1 = {
  firstName: "Maria",
  lastName: "Y.",
  country: "Cyprus",
  continent: "Europe",
  age: 30,
  language: "Javascript",
  getLocation: function () {
    console.log(`${this.continent}, ${this.country}`);
  },
};

let developer2 = {
  firstName: "Victoria",
  lastName: "T.",
  country: "Puerto Rico",
  continent: "Americas",
  age: 23,
  language: "Python",
  getLocation: function () {
    console.log(`${this.continent}, ${this.country}`);
  },
};

developer1.getLocation();
developer2.getLocation();
