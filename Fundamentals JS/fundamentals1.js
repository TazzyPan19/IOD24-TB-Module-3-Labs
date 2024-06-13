// NOTE Question 1: What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
" -9 " + 5 // -9 5
" -9 " - 5 // -14
null + 1 // 1
undefined + 1 // Nan
undefined == null // 0
undefined === null // false
" \t \n" - 2 // -2

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);
console.log('');

// NOTE Question 2: Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four

var anwser2 = 'lessThan1 and addition are wrong because they are taken as strings instead of numerical values';

console.log(anwser2);
console.log('');

// NOTE Question 3: Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // Invaild 0 is false
if ("0") console.log('#2 zero is true') // Vaild
if (null) console.log('null is true') // Invaild null is false and undefined
if (-1) console.log('negative is true') // Vaild
if (1) console.log('positive is true') // Vaild

console.log(Boolean());
console.log(" ")

// NOTE Question 4: Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. 
// What does the ‘+=’ do?

let a = 2, b = 3;
result1 = a + b < 10 ? 'less than 10' : 'greater than 10';
result2 = a += b < 10 ? 'less than 10' : 'greater than 10';

console.log(result1);
console.log(result2);
console.log(" ")

// NOTE Question 5: Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

// Function Expression Syntax
function getGreeting(name) {
    return 'Hello ' + name + '!';
}

// Function Arrow Expression
getGreeting = (name) => { return 'Hello ' + name + '!' };
    
console.log(getGreeting("Tom"));