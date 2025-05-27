# Modern JavaScript Development: Modules and Tooling

## An overview of modern JavaScript Development

Dividing projects (code) into modules.

**Development** -> **Building Process** -> **Production**

Development: Modules, packages,...;

Building: Bundling -> Transpiling (Babel)/Polyfilling;

Production: JavaScript bundle.

### Modules

#### ES6 Modules 

Reusable piece of code that **encapsulates** implementation details. Usually **standalone file**. Includes `import` and `export`.

File downloading **asynchronously** if set to `type="module"`.

**Parsing** document: reading the code but not executing it!

Modules are imported **synchronously** before **execution**.

Imports are creating live connections **NOT** copies.

Importing **everything** using `*` + `as` Something.
```js
import * as Something from "./path/file.js";
// code...
```
`default` exports: are used if we want **only** one thing per module.

`named` exports: are used ...

Not often mixed `named` and `default` exports within one module.

### Top-level Await (ES2022)

In module we can use top-level `await`, without `async` function. That `await` will be blocking the code coming after - acting like synchronous code.


### The Module Pattern

```js
// IFEE
(function () {
    const res = "a";
    
    console.log(res);
})(); // "a"
```

Everything that's in the module is private to very that **module**! Scoped only to that module!

**Closures** allow functions to have access to all variables that were presented at function birthplace.

### CommonJS Module

```js
// Exporting
// export.addToCart = function () {};

// Import 
const { addToCart } = require("./path/file.js");
```

### Babel and Polyfilling

To configure the **babel** file, we have to start from question: What Browsers should be supported?

Instead of using bunch of plugins for each feature, Babel uses **presets**.

### Writing Modern And Clean Code

* **Readable Code**;
* **General**: DRY, encapsulate, don't use `var`, `===` and `!==`;
* **Functions**: **only one thing**, <= 3 parameters in function, return same data type as received, arrow fu `() => {}`;
* **OOP**: use ES6 classes, method chaining, **don't mutate**, for methods do not use arrow functions.

#### Avoid nested code
* use ternary (doesn't create a new block) or logical operators instead of `if`;
* Use multiple `if` instead of `if/else if`;
* Avoid `for` loops, use array methods instead;
* Avoid callback-based asynchronous APIs.

#### Asynchronous Code
* Consume `Promise`s with `async/await`;
* When possible, run promises in **parallel** with `Promise.all`;
* Handle errors and promises rejections;

### Imperative vs Declarative Code

**Imperative** programmers explain **"HOW to do things"**.
We explain the computer *every single step* it has to follow to achieve a result.

**Declarative** programmers tell **"WHAT to do"**. We simply describe the way the computer should achieve the result. The **HOW** gets abstracted away.

```js
const arr = [1, 2, 3, 4];
const doubled = [];

// Imperative:
for(let i = 0; i < arr.length; i++){
    doubled[i] = arr[i] * 2;
}
// Declarative:
doubled = arr.map((i) => i * 2);
```
### Functional Programming (Declarative Paradigm)

Combining many **pure functions**, avoiding **side effects** and **mutating** data.

**Side effect**: Mutation of any data that is **outside** the function (logging to the console, writing to DOM, etc...).

**Pure functions**: Functions without side effects.

**Immutability**: State (data) is **never** modified. Instead, state is **copied** and the copy is mutated and returned. (in React state is completely immutable).

**Avoid data transformations** (use `map()`, `filter()` and `reduce()`).

#### Declarative Syntax

* Use object and array destructuring;
* Use spread operator (...);
* Use ternary operators;
* Use template literals.