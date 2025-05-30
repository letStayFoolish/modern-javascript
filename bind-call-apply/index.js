"use strict"

// bind
/**
 * `bind` creates a **new function** with a specific `this` value (and optionally, arguments).
 *
 * The function is **not called immediately**, but rather returned for later use.
 *
 * Syntax:
 * `const boundFunction = func.bind(thisArg, arg1, arg2, ...);`
 */


/*** call ***/
/**
 * `call` is used to **invoke a function immediately** while explicitly setting the `this` value.
 *
 * Arguments are passed **individually**, separated by commas.
 *
 * Syntax:
 *
 * `func.call(this, arg1, arg2, ...);`
 */
const person = {
    name: "Irina"
}

function greet (string, emoji) {
    console.log(`${string}, ${this.name} ${emoji}`)
};

// greet();
greet.call(person, "Hello", "😀");

// apply
/**
 * `apply` is similar to `call`, but the arguments are passed as a **single array**.
 *
 * Useful for functions that work with arrays, such as `Math.min` or `Math.max`.
 *
 * Syntax:
 *
 * `func.apply(thisArg, [arg1, arg2, ...])`;
 */
greet.apply(person, ["Hello", "😀"]);
