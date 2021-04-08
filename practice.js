/*
Career options: 
Type of work: 
entrepreneurship,startups,freelance,the big tech companies, ad agencies, remote work
Job titles:
software developer, backend developer, web developer, full stack developer, mobile 
developer, software engineer

ZTM web dev:
web foundations, HTML5, CSS3, Bootstrap, CSS grid, careers, node.js, javascript, 
React js, NPM/ NPM scripts, Git/ Github, Developer Enviroment,
Databases., Production (Heroku)


Who is this google fellow? (browser) => ISP $ => DNS here is his IP adress 172.217.7.23
Server => ISP => Browser

Browser => request 172.217.7.23  => google servers => HTML,CSS, JS

ISP network => Internet Backbone => Wireless Transmitter => Line of sight backhaul 
=> Line of sight transmission => wireless home modem => Home LAN (local area network)

The internet backbone => Submarine cables network

traceroute google.com
tracert google.com
home router => google server over a number x of hops

-Location of server
- How many tris
-Size of files

Full Stack Developer:
Front-end: HTML, CSS and JS + React 
BAckend: SErver: Node.js, Express.js
Database: Postgresql

WWW vs the internet
ARPANET
Vox: maps that explain the internet
First webpage: info.cern.ch tim berners lee
HTML CSS and JS
Developer tools: elements tab: css styles 
JS: console => alert("hi there")

Different browsers: 
chrome, internet explorer, firefox, safari

=> google servers => HTML, CSS, JS
Compatibility: mobile devices and responsiveness. DIsplay on all screens. 

Developer history:
old = LAMP stack: Apache server, PHP, Database: mysql 
new: Node server, node.js, express.js Database: postgresql, MongoDB

Adding CSS and JS to tim's website

04 04 2021

download Sublime text Editor
DOCTYPE html layout

W3 schools 
<!DOCTYPE html>
*/

function sum(x,y) {
    return x+y;
}
sum(1,2); //3

let description = "hello"

"Nice!".length //5
description.length //5

"hello world".includes("world") //true
"hello world".includes("bannana") //false

"hello".includes("hello");

let hello = "hello".toUpperCase(); //HELLO
"HELLO".toLowerCase(); //hello;

function sum(a,b) {
    return a+b;
}
sum(4,5)//9


console.log(variable_or_expression);
console.log(hello);


//chracter access
let language = [1,2,3,4,5,6,7,8,9]
let language = "javascript"
language[0];
language[1];
language[2];

console.log(language[1]);
language[ language.length - 2 ]
language[language.length -4]; //r


//Signature
substring(indexStart, indexEnd);

const language = "JAVASCRIPT";
language.substring(1, 4); 
language.substring(4);

"Hello" + " world";
3+4;

`template`
`Hello
Again`
let language = "javascript"
`I am learning ${language}`


String.prototype.substring()

String.prototype.something()

//Mozilla developer network has great docs

const phoneNum = '+1080510';
phoneNum.startsWith("+") //true
phoneNum.startsWith("10") //false
phoneNum.endsWith("10") // true

let email = "mick@gmail.com     ";

email.trim();
String.trim();

let answer = 42;
answer.toString(); // "42"

answer.toString();
Number.parseInt("42", 10); //42
Number.parseInt("422", 10) // 422

function convertStringToNumber(string){
    return Number.parseInt(string, 10);
}
// * multiply, / divide, % Division remainder
// 8%2;
// 7%2 // remainder 1
// 8/2 = 4

// 6% 2 === 0; //true therefore 6 is even
// 5 % 2 === 0 //false therefore 5 is odd
// Note that the === that you're seeing is in fact 3 equal signs after each other ===

let name = "micky D";
console.log(name);

let language = "C++";
language = "Javascript";

let sum = 0;
sim += 1;
sum;

//const

const language = "C++";
console.log(language);

language = "C++"; // this will break your script

//let vs const always go with const unless you need to reassign the variable later on.

//replace the vars you see with let or const


function defineVariable(){
    //define a variable "count" with value 0
    let count = 0;
    //then increment it
    count += 1;
    //finally return it
    return count;
}

function vari = {
    let count = 0;
    count += 1;
    return count;
}


if (condition) {
    //do something
}


if (grade >= 10) {
    //passing
}



const grade = 15;

if (grade >= 10) {
    //passing
} else {
    //failing
}

// returning booleans


function isPassing(grade) {
    if(grade >= 10) {
        return true;
    } else {
        return false;
    }
}

isPassing(14);

function isPassing(grade ) {
    return grade >= 10;
}




// Returns a number between 0 and 1
Math.random();

Math.random();
// ☝️ Math is the library


console.log('Hi there!');
// Prints: Hi there!

let amount = 6;
let price = 4.99;


let message = 'good nite';
console.log(message.length);
// Prints: 9
 
console.log('howdy'.length);
// Prints: 5

let lateToWork = true;

console.log(Math.random());
// Prints: 0 - 0.9

Math.random();

let x = null;

console.log(Math.floor(5.95)); 
// Prints: 5


let x = null;

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";

// Addition
5 + 5
// Subtraction
10 - 5
// Multiplication
5 * 10
// Division
10 / 5
// Modulo
10 % 5



// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);
 
// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 367 % 7 ;
 
console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");

let number = 100;
 
// Both statements will add 10
number = number + 10;
number += 10;
 
console.log(number); 
// Prints: 120
