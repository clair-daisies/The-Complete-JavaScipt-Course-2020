///////////////////////////////////////
// Lecture: Hoisting

//FUNCTIONS
//Hoisting only works in function declaration
/*
calculateAge(1990);
function calculateAge(year) {
  console.log(2020 - year);
}

//Hoisting doesn't works in function expression

//console.log(retirement(1995));
var retirement = function(year) {
  console.log(65 - (2020 - year));
};

//VARIABLES
// console.log(age);
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping

// First scoping example
/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}
*/
// Example to show the differece between execution stack and scope chain
/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(1982);
console.log(this);
function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}
*/
var john = {
  name: "John",
  birthYear: 1990,
  calculateAge: function(year) {
    //function expression
    console.log(this);
    console.log(2020 - this.birthYear);

    function innerFunction() {
      console.log(this);
    }
    innerFunction(); //this is not a method but a rugular function call hence it points to the window object.
  }
};
john.calculateAge();

var mike = {
  name: "Mike",
  birthYear: 1984
};

//METHOD BORROWING
mike.calculateAge = john.calculateAge;
mike.calculateAge();
