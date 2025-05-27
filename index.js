'use strict';
import * as CoreJS from 'core-js';
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
