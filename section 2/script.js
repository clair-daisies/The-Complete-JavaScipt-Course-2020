/***************VARIABLE MUTATION AND TYPE COERCION 
 var firstName = "Mary";
var age = 23;
console.log(name + "is " + age + " years old");

//  TYPE COERCION: JS automatically changes datatype from one to another as needed//

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is she married? " +
    isMarried
);

// VARIABLE MUTATION: to change the value of variable //
age = "twenty-three";
job = "dancer";
console.log(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is she married? " +
    isMarried
);

var lastName = prompt("What is her last name?");
console.log(firstName + " " + lastName);
*/

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀 
****************/
/********Coding problem 1-Solution 
var massMark, massJohn, heightMark, heightJohn, bmiMark, markHigherBMI;
massMark = 89;
heightMark = 1.55;

massJohn = 90;
heightJohn = 1.89;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's " + markHigherBMI);
*/

/**********If-Else statements */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " is not Married and hopefully gets married soon!");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " is not Married and hopefully gets married soon!");
}

var massMark, massJohn, heightMark, heightJohn, bmiMark, markHigherBMI;
massMark = 89;
heightMark = 2.5;

massJohn = 90;
heightJohn = 1.89;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than that of John!");
} else {
  console.log("John's BMI is higher than that of Mark!");
}
*/

/********BOOLEAN LOGIC ******/
/*
var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else if(age >= 20 && age < 30){
  console.log(firstName + " is a  young man.");
} else{
  console.log(firstName + " is a man.")
}
*/

/************* TERNARY OPERATOR ***********/
/*
var firstName = "John";
var age = 26;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(firstName + " drinks " + drink);
*/
// ***** SWITCH STATEMENT ******
/*
var name = "John";
var job = "doctor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(name + " teaches science!");
    break;
  case "doctor":
    console.log(name + " checks patients");
    break;
  case "web developer":
    console.log(name + "makes websites and web apps");
    default:
      console.log(name + " does something alright!")
}

var firstName = "John";
var age = 16;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a man");
}

// ****** TRUTHY AND FALSY VALUES
 => In JS a value is considered FALSY VALUE if it is evaluated false in if-else statement : 0, "", null, undefined, NAN.
=> truthy values: NOT falsy values

//EQUALITY OPERATORS
== does TYPE COERCION
=== NO TYPE COERCION
*/

// **** CODING CHALLENGE 2 *******
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
//CODING CHALLENGE 2 SOLUTIONS
/*
var avgJohn, avgMike, avgMary;
avgJohn = (89 + 120 + 103) / 3;
avgMike = (126 + 94 + 123) / 3;
avgMary = (97 + 134 + 105) / 3;
console.log(
  "John's team: " + avgJohn,
  "Mike's team: " + avgMike,
  "Mary's team : " + avgMary
);
switch (true) {
  case avgJohn > avgMike && avgJohn > avgMary:
    console.log("John's team is the winner with points:" + avgJohn);
    break;
  case avgMike > avgJohn && avgMike > avgMary:
    console.log("Mike's team is the winner with points:" + avgMike);
    break;
  case avgMary > avgJohn && avgMary > avgMike:
    console.log("Mary's team is the winner with points:" + avgMary);
    break;
  default:
    console.log("It's a draw");
}
*/

//****** FUNCTIONS ******/
/*
function calculateAge(birthYear) {
  return 2020 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageJane = calculateAge(1995);
var ageJerry = calculateAge(1993);
console.log(ageJohn, ageJane, ageJerry);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1948, "Jennifer");
*/

/************** function statements and expressions *****/
// function expression:
/*
var functionNAme = function(argument1, argument2) {
  //here goes function block

  //RETURN KEYWORK TERMINATES FUNCTION
};

//function declaration
function functionNAme(argument1, argument2) {
  //here goes function block
}

// EXPRESSION: JS expressions are piece of code that always producce a value; It doesn't matter how long the code is as long as it produces a single result, it is an expression.
// STATEMENTS:  They don't produce immediate value. eg if-else statement, function declarations

*/

/*********** ARRAYS *******/
/* arrays are like collection of variables that can even have different data types*/
/*
//initialize new array
var arrayName = ["element", 1, "another element"];
var arrayName2 = new Array("element1", "element2", "element2");

//mutate array data
arrayName[1] = "element1";
arrayName[arrayName.length] = "Something";

//METHODS FOR ARRAY
var john = ["John", "Smith", 1990, "teacher", false];

// PUSH -adds an element at the end of an array
john.push("blue");

//UNSHIFT - adds new element at the beginning of the array
john.unshift("Mr.");
console.log(john);

//POP - removes element from the end of an array
john.pop();

//SHIFT - removes element from the beginning of an array
john.shift();
console.log(john);

//INDEXOF - indexOf returns the position of an arguement we passed inside of an array
var index1990 = john.indexOf(1990);
console.log(index1990);

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "john is a designer";

console.log(isDesigner);
*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/* ******* MY SOLUTION ******** */
/*
var bill = [124, 48, 268];
var tips = [];

function tipCalculator() {
  for (var i = 0; i < bill.length; i++) {
    if (bill[i] < 50) {
      tips[i] = 0.2 * bill[i];
    } else if (bill[i] >= 50 && bill[i] < 200) {
      tips[i] = 0.15 * bill[i];
    } else {
      tips[i] = 0.1 * bill[i];
    }
    bill[i] = bill[i] + tips[i];
  }
  tips.push(tips[i]);
  console.log(tips);
  console.log(bill);
}

tipCalculator();
*/
/********* COURSE'S SOLUTION ******/
/*
function tipsCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipsCalculator(bills[0]),
  tipsCalculator(bills[1]),
  tipsCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(finalValues);
*/
