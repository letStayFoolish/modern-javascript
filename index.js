'use strict';
console.log('Happy developing ✨');

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const logThis = () => {
    console.log('This: ', this);
};

logThis();
const fetchData = async () => {
    const response = await fetch(POSTS_URL);
    const data = await response.json();
    return data;
};

const response = await fetch(POSTS_URL);
const data = await response.json();
console.log(data);
console.log('Something');

const newData = [1, 5, 112, 56, 98];

console.log(newData.at(3)); // 56
console.log(newData.at(-1)); // 98

const fetchedData = await fetchData();
console.log('Fetched title: ', fetchedData.at(1).title);

const limit = newData?.at(3) ?? 0;

console.log({ limit });

const myPerson = Object.freeze({
    name: 'Nemanja',
    age: 25,
    address: {
        city: 'Zagreb',
        country: 'Croatia',
    },
});

// const myArr = Object.freeze([{ name: 'Nemanja' }, { name: 'Ira' }]);
// =========================== Testing Out ========================== //
// myArr[2] = { name: 'Kosta' }; // TypeError: Cannot add property 2, object is not extensible
// console.log({ myArr });
// myArr.push(4); // TypeError: Cannot add property 2, object is not extensible
// myPerson.name = 'Jelena'; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'

const budget = Object.freeze([
    { user: 'John', value: 200 },
    { user: 'Milan', value: 5000 },
]); // Immutable object

// Impure Function Example: attempts mutating an object allocated outside the function
// const addExpenses = function (value, user) {
//     const newUser = user.toLowerCase();
//
//     budget.push({ user: newUser, value });
// };

// Pure Function Example:
const addExpenses = function (state, value, user) {
    // no side effect to the original (outside) arrays/objects;
    const copyArr = [...state];

    const newUser = user.toLowerCase();

    // copyArr.push({ user: newUser, value });

    // no side effect to the original (outside) arrays/objects;
    return [...copyArr, { user: newUser, value }];
};

const newBudget = addExpenses(budget, 150, 'Petar');

// addExpenses(150, 'Petar');
console.log(budget);
console.log(newBudget);

// Example #2
// Mutating variable within for-loop block:
const logBigExpenses = function () {
    let output = '';

    for (const entry of budget) {
        output += `${entry.user}: ${entry.value} \n`;
    }

    console.log(output);
    return output;
};

// Better way to do it:
const logBigExpenses2 = () =>
    budget.map((entry) => {
        console.log(`${entry.user}: ${entry.value} \n`);

        const { user, value } = entry;
        const newValue = value + 7;
        return { user, value: newValue };
    });

// logBigExpenses();
const exp = logBigExpenses2();
console.log(exp);
