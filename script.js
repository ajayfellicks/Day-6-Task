//!OOPS TASK
//!Task 1
//a) Write a constructor for the class Movie,
//which takes a String representing the title of the movie,a String
//representing the studio, and a String representing the rating as
//its arguments, and sets the respective class properties to these values.

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj = new movie("Glass Onion", "Lionsgate", "PG­13");
console.log(obj);

//b) The constructor for the class Movie will set the class
//property rating to "PG" as default when no rating is provided.

class movieTwo {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj1 = new movieTwo("shrek", "DreamWorks Pictures");
console.log(obj1);

//c) Write a method getPG, which takes an array of base type
//Movie as its argument, and returns a new array of only
//those movies in the input array with a rating of "PG".
//You may assume the input array is full of Movie instances.
//The returned array need not be full.

class movieThree {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    return movies.filter((movies) => movies.rating === "PG");
  }
}
const movies = [
  new movie("Glass Onion", "Lionsgate", "PG­13"),
  new movie("shrek", "DreamWorks Pictures", "PG"),
  new movie("Casino Royale", "Eon Productions", "PG­13"),
];

//d) Write a piece of code that creates
//an instance of the class Movie with the
//title “Casino Royale”, the studio “Eon Productions”,
//and the rating “PG­13”

class movieFour {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj2 = new movieFour("Casino Royale", "Eon Productions", "PG­13");
console.log(obj2);

//!Task 2
//Convert the UML diagram to Typescript class. - use number for double

/*
class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get color() {
    return this.color;
  }

  set color(c) {
    this.color = c;
  }

  get toString() {
    return `"Circle[radius= ${this.radius},color = ${this.color}]"`;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}

let obj3 = new circle(1.0, "red");
console.log(obj3.Radius);
console.log(obj3.color);
console.log(obj3.toString);
console.log(obj3.area);
console.log(obj3.circumference)

*/

//!Task 3
//Write a “person” class to hold all the details.

class Person {
  constructor(name, age, gender, martialstatus, contact, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.martialstatus = martialstatus;
    this.contact = contact;
    this.email = email;
  }
}

const obj4 = new Person(
  "gokul",
  22,
  "male",
  "single",
  9937648172,
  "gokulsample@gmail.com"
);

console.log(obj4);
