# Q&A

Visit Site: https://kendin.github.io/react_portfolio/

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

### Why do you use className as a property in React and not class?
In React, the reason className is used instead of class as a property to define HTML classes is due to JSX syntax. JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files, particularly when building React components. JSX makes it easier to define the structure of UI components and is a popular choice in the React ecosystem.
Here is an example;

```javascript
import React from 'react';

const MyComponent = () => {
  return (
    <div className="my-class">
      <p>Hello, world!</p>
    </div>
  );
};
export default MyComponent;
```

React will translate this JSX code into regular JavaScript, and eventually into HTML when rendering the component to the DOM. During this process, className will be transformed into class in the resulting HTML markup, ensuring compatibility with standard HTML and CSS while maintaining consistency with JavaScript syntax within JSX.

### Why should you not write the following? What will happen?

```javascript
<button onClick={setCounter(counter + 1)}> +1 </button>
```

This is problematic since it passes the result of executing setCounter(counter + 1) rather than a function to the onClick prop. This leads to a number of problems:
Immediate Invocation: In this code, setCounter(counter + 1) is invoked immediately when the component renders. This means that every time the component renders, this expression will be evaluated, causing setCounter to be called with a new value for counter.
State Update during Rendering: When setCounter(counter + 1) is called inside the JSX, it triggers a state update. However, state updates should not be performed during rendering because they can cause unnecessary re-renders and lead to performance issues, infinite render loops, or stale state values.
Infinite Render Loop: Since setCounter(counter + 1) causes a state update, it triggers a re-render of the component. This re-render will again execute the expression setCounter(counter + 1), leading to an infinite loop of re-renders and updates.
The correct approach is to define an event handler function or pass an inline arrow function as illustrates: 

```javascript
<button onClick={() => setCounter(counter + 1)}> +1 </button>
```

The onClick handler is a function that will be executed when the button is clicked, and it correctly updates the state of counter based on its previous value without causing unintended side effects or infinite loops.

### What is object deconstruction and how is it connected to React components (example)?
Object destructuring is a JavaScript feature that allows you to extract properties from objects and assign them to variables with the same name. It provides a concise and readable way to work with object properties. In the context of React components, object destructuring is often used to extract values from props or state objects.
An example within a React component is as follows:

```javascript
import React from 'react';

// Example: Destructuring props in a functional component
const MyComponent = ({ prop1, prop2 }) => {
  return (
    <div>
      <p>{prop1}</p>
      <p>{prop2}</p>
    </div>
  );
};

// Usage of the component
const App = () => {
  const data = {
    prop1: 'Value 1',
    prop2: 'Value 2',
  };

  return <MyComponent {...data} />;
};
```

The MyComponent functional component receives an object as its props. Instead of accessing props.prop1 and props.prop2 directly, object destructuring is used in the function parameters of MyComponent to extract these properties directly.
The App component then uses the MyComponent and spreads the data object into its props. This allows the properties of the data object to be passed as individual props to MyComponent.

### How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
This is made possible by the way React processes JSX and JavaScript under the hood. JSX is a syntax extension for JavaScript that looks similar to XML or HTML. When you write JSX in your React components, it gets transformed into JavaScript code before being executed. The transformation is typically done by a tool like Babel during the build process.
How JSX Works Under the Hood.
Transformation: When you write JSX in a React component, tools like Babel transform this JSX into standard JavaScript. Each HTML-like tag in JSX corresponds to a function call that creates a React element. 
React.createElement: The transpiled code uses React.createElement to create a virtual DOM representation of the JSX structure. The React.createElement function takes the HTML tag name, any attributes, and the content as parameters.

Virtual DOM: React uses this virtual DOM representation to efficiently update the actual DOM when there are changes in the component's state or props. It calculates the difference between the previous and current virtual DOM states and updates only the necessary parts of the actual DOM.
An example;

```javascript
import React from 'react';

const Counter = () => {
  const count = 0;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => console.log('Increment!')}>Increment</button>
    </div>
  );
};

export default Counter;
```

In this example, JSX is used to define the structure of the component, while JavaScript logic is embedded within the curly braces {} to handle dynamic content and event handling.

### What is async/await? Bring an example
async/await is a feature in JavaScript that simplifies working with asynchronous code. It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and maintain. The async keyword is used to define a function as asynchronous, and the await keyword is used to pause the execution of the function until a promise is settled (resolved or rejected).
Example:

```javascript
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```

### What is a Promise? Bring an example
A Promise is a built-in JavaScript object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are a way to handle asynchronous code more easily and provide a cleaner alternative to using callbacks.
A Promise has three states:
•	Pending: The initial state, representing that the asynchronous operation is still in progress.
•	Fulfilled: The operation completed successfully, and the promise has a resulting value.
•	Rejected: The operation failed, and the promise has a reason for the failure.
An example:

```javascript
function getData(){
  return new Promise((resolve, reject) =>;
  {
    setTimeout(() => {
    const success = true;
      if (success) {
      resolve (‘Data fetched successsfully’);
      } else {
      reject (‘Error’);
      }
    }, 1000);
  });
}
```

