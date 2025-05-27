'use strict';
console.log('Happy developing ✨');

const logThis = () => {
    console.log('This: ', this);
};

logThis();
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
};

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log(data);
console.log('Something');

const newData = [1, 5, 112, 56, 98];

console.log(newData.at(3)); // 56
console.log(newData.at(-1)); // 98

const fetchedData = await fetchData();
console.log('Fetched title: ', fetchedData.at(1).title);
