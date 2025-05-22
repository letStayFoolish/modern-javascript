'use strict';

console.log('Happy developing ✨');
const myName = 'Nemanja'; // global EC

const outer = function (value) {
    let myAge = 35;

    function inner() {
        const currentYear = 2025;
        console.log({ value });
        // console.log(calculateBirthYear); // Error: if const: Cannot access 'calculateBirthYear' before initialization
        // console.log(calculateBirthYear); // Error: if var: Undefined

        const calculateBirthYear = currentYear - myAge;
        // var calculateBirthYear = currentYear - myAge;

        console.log(`You are born in ${calculateBirthYear}`);
    }

    inner();
};

outer(22);

const x = outer();

// Scoping in action
// function declaration
function calcAge(birthYear) {
    const age = 2025 - birthYear;
    const lastName = 'Garmaev';
    console.log('calcAge scope: ' + lastName); // lookup in the global scope

    function printAge() {
        var isVisible = true; // function scoped
        const str = `${lastName}, you are ${age} years old.`; // lastName - global scope; age - calcAge scope
        console.log(str);
    }

    // console.log(isVisible); // Uncaught ReferenceError: isVisible is not defined
    // console.log(str); // ReferenceError: str is not defined

    printAge();

    return age;
}

// printAge(); // functions are also block-scoped! (if "strict mode" is on)

const lastName = 'Karaklajic';
console.log('global scope: ' + lastName); // global scope
calcAge(1990);


// Hoisting and TDZ
console.log(addDecl(25)); // 30
// console.log(addExpression(32)); // ReferenceError: Cannot access 'addExpression' before initialization
// console.log(addArrow(7)); // ReferenceError: Cannot access 'addArrow' before initialization

// Function Declaration
function addDecl (value) {
    let res = 5;
    return res += value;
}
// Function Expression
const addExpression = function (value) {
    let res = 5;
    return res += value;
}
// Arrow Function
const addArrow = (value) => {
    let res = 5;
    return res += value;
}

function testingThisKeyword () {
    console.log(this) // undefined
}

testingThisKeyword();
console.log(this)

const arrowThisKeyword = () => {
    console.log(4 + 5);
    console.log(this) // Lexical - `window` object;
}
function testDeclThis () {
    console.log("Testing `this` keyword calling arrow func within the function declaration.")
    const arr = () => {
        console.log(this)
    };
    arr(); // undefined
};

arrowThisKeyword();
testDeclThis();


const chili = {
    firstName: "Nemanja",
    logName: function () {
        console.log(this);
        console.log(this.firstName)
    }
}

chili.logName(); // "Nemanja"

const ira = {
    firstName: "Irina",
}

// `this`-keyword is dynamic and it depends on how the function is called!!!
ira.logName = chili.logName;
ira.logName(); // "Irina"

const fu = chili.logName;
fu(); // undefined -> Error: Cannot read properties of undefined (reading 'firstName') => undefined.logName();

