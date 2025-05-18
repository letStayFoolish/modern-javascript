"use strict"

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
