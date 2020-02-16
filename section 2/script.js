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
