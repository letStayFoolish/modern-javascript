# Modern JavaScript Development: Modules and Tooling

## An overview of modern JavaScript Development

Dividing projects (code) into modules.

**Development** -> **Building Process** -> **Production**

Development: Modules, packages,...;

Building: Bundling -> Transpiling (Babel)/Polyfilling;

Production: JavaScript bundle.

### Modules

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