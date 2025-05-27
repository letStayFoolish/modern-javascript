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
