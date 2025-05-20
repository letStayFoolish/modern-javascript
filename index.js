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
