console.log("Hello World!");

let name1 = "Aisha";  // can change,block
const age1 = 21;      // cannot change ,block
var city = "Amman";  // old way,function

console.log(name1, age1, city);

// Primitive
let str = "Hello";    // String
let num1 = 10;         // Number
let flag = true;      // Boolean
let empty = null;     // Null
let notDefined;       // Undefined
// we can change the content

// Non-primitive (complex data type - contian multiple premitive values)
let arr = [1, 2, 3];
let person1 = {name1: "Aisha", age1: 21};

// Implicit
let result = "5" + 2;      // "52" (string)
let diff = "5" - 2;        // 3 (number)

// Explicit
let strNum = "5";
let num = Number(strNum);  // 5


console.log("Console output");      // Console
document.write("Document output");  // Web page

alert("Hello!");                   // Message
let confirmResult = confirm("Are you sure?");  // Yes/No
let name2 = prompt("Enter your name");          // Input

let age2 = prompt("Enter your age:");
if(age2 >= 18){
  alert("You are an adult.");
} else {
  alert("You are underage.");
}

// Function
function greet(name1){
    return "Hello " + name1;
}
alert(greet(name1));

// Loop
for(let i=1; i<=3; i++){
    console.log(i);
}

// Array
let colors1 = ["red", "blue", "green"];
console.log(colors1[1]);

// Object definition
let person2 = {name: "Aisha", age: 21};
console.log(person2);


// Function
function greet(name1){
    return "Hello " + name1;
}
alert(greet(name1));

// Loop
for(let i=1; i<=3; i++){
    console.log(i);
}

// Array
let colors = ["red", "blue", "green"];
console.log(colors[1]);

// access property value of an object
let person = {name: "Waad", age: 22};
console.log(person.name);

let name = "Raghad";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);

let text = `This is line 1
This is line 2`;
console.log(text);

let score = Number(prompt("Enter your score:"));

if(score >= 90){
  alert("Grade: A");
} else if(score >= 75){
  alert("Grade: B");
} else if(score >= 50){
  alert("Grade: C");
} else {
  alert("Grade: F");
}

// Switch example
let day = prompt("Enter a number (0-6) for the day:");
switch(day){
    case "0": alert("Sunday"); break;
    case "1": alert("Monday"); break;
    case "2": alert("Tuesday"); break;
    default: alert("Other day");
}
