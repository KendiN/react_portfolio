# Q&A

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### What is NPM?
NPM (Node Package Manager) is a is a package manager for Javascript which is used to manage, install and share packages for Node.js. It also provides dependency management by automatically handling a project's dependencies, ensuring that the right library versions are installed and avoiding conflicts between various packages.

### What is SPA?

SPA (Single Page Application) is a web application which that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server. SPA leverages technologies such as AJAX, HTML5 and even Fetch API to retrieve data from the server without the page fully reloading. This allows for dynamic updates and provides users with a seamless and smooth experience.
SPAs also implement client-side routing which enables the application to update the content without navigating to a new page on the server. SPA faces challenges with search engine optimization (SEO), potential initial load time issues due to larger initial JavaScript payloads, and the need for careful management of client-side state.

### What is the event loop?
The event loop stands as a fundamental concept in JavaScript's design, enabling it to proficiently handle asynchronous operations. It is a component of the runtime environment and is in responsible for controlling how code is executed, responding to events, and maintaining the flow of the program. The event loop is frequently related to Node.js environments and web browsers. 
The call stack is a data structure used by the JavaScript runtime to record the execution of function calls. A function gets pushed to the top of the call stack whenever it is invoked. The function at the top of the stack is the one currently being executed. Asynchronous operations are not immediately executed. Instead, their associated callback functions are placed in a callback queue. The event loop constantly checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack, initiating its execution.

### What is the difference between export x and export default x? How do you import them differently?
In JavaScript and particularly in the context of modules, the `export` and `export default` statements are used to expose functionality from one module to another. Here's a breakdown of their differences and how you import them:

`export x`
   - Used to export named exports from a module.
   - You can have multiple named exports in a single module.
   - When importing, you need to use the exact name of the exported variable, surrounded by curly braces `{}`.

   Example of exporting:
   ```javascript
   // module.js
   export const foo = "Hello";
   export const bar = "World";
   ```

   Example of importing:
   ```javascript
   // anotherModule.js
   import { foo, bar } from "./module";
   console.log(foo, bar); // Outputs: Hello World
   ```

`export default x`
   - Used to export a default export from a module.
   - There can only be one default export per module.
   - When importing, you can choose any name for the variable because it is the default export.

   Example of exporting:
   ```javascript
   // module.js
   const myDefaultExport = "This is the default export";
   export default myDefaultExport;
   ```

   Example of importing:
   ```javascript
   // anotherModule.js
   import myCustomName from "./module";
   console.log(myCustomName); // Outputs: This is the default export
   ```

A module can have both named exports and a default export When importing, you can use a combination of named imports and the default import.

   Example of exporting:
   ```javascript
   // module.js
   export const namedExport1 = "Named Export 1";
   export const namedExport2 = "Named Export 2";
   const defaultExport = "Default Export";
   export default defaultExport;
   ```

   Example of importing:
   ```javascript
   // anotherModule.js
   import { namedExport1, namedExport2, default as myDefaultExport } from "./module";
   console.log(namedExport1, namedExport2, myDefaultExport);
   ```

