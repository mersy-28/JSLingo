import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'js-basics-1',
    title: 'JavaScript Basics: Variables',
    description: 'Learn about variables, let, const, and var in JavaScript',
    difficulty: 'Beginner',
    exercises: 3,
    content: `
      <h2>JavaScript Variables</h2>
      <p>Variables are containers for storing data values. In JavaScript, there are three ways to declare a variable:</p>
      
      <ul>
        <li><code>var</code> - The traditional way to declare variables (function-scoped)</li>
        <li><code>let</code> - Block-scoped variable that can be reassigned</li>
        <li><code>const</code> - Block-scoped variable that cannot be reassigned</li>
      </ul>
      
      <h3>Examples:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Using let (preferred for variables that will change)
let name = "Alice";
name = "Bob"; // This is valid - we can change it

// Using const (preferred for variables that won't change)
const pi = 3.14159;
// pi = 3; // This would cause an error!

// Using var (older style, try to avoid)
var age = 25;</code></pre>
      </div>
      
      <h3>Best Practices:</h3>
      <ul>
        <li>Use <code>const</code> by default</li>
        <li>Use <code>let</code> when you need to reassign values</li>
        <li>Avoid <code>var</code> in modern JavaScript</li>
      </ul>
    `
  },
  {
    id: 'js-basics-2',
    title: 'JavaScript Basics: Data Types',
    description: 'Explore the different data types in JavaScript',
    difficulty: 'Beginner',
    exercises: 4,
    content: `
      <h2>JavaScript Data Types</h2>
      <p>JavaScript has several built-in data types:</p>
      
      <h3>Primitive Types:</h3>
      <ul>
        <li><strong>String</strong>: Text values like "Hello World"</li>
        <li><strong>Number</strong>: Numeric values like 42 or 3.14</li>
        <li><strong>Boolean</strong>: true or false</li>
        <li><strong>Undefined</strong>: A variable without a value</li>
        <li><strong>Null</strong>: Intentional absence of any object value</li>
        <li><strong>Symbol</strong>: Unique and immutable values (ES6)</li>
        <li><strong>BigInt</strong>: For very large integers (newer)</li>
      </ul>
      
      <h3>Reference Types:</h3>
      <ul>
        <li><strong>Object</strong>: Collections of properties</li>
        <li><strong>Array</strong>: Ordered collections (a special type of object)</li>
        <li><strong>Function</strong>: Code that can be called (also a special type of object)</li>
      </ul>
      
      <h3>Examples:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Strings
const greeting = "Hello";
const name = 'World';
const message = \`\${greeting} \${name}!\`; // Template literal

// Numbers
const integer = 42;
const float = 3.14;

// Boolean
const isActive = true;

// Null and Undefined
const empty = null;
let notDefined;  // Value is undefined

// Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Arrays
const fruits = ["Apple", "Banana", "Cherry"];</code></pre>
      </div>
    `
  },
  {
    id: 'js-basics-3',
    title: 'JavaScript Basics: Functions',
    description: 'Learn how to create and use functions in JavaScript',
    difficulty: 'Beginner',
    exercises: 5,
    content: `
      <h2>JavaScript Functions</h2>
      <p>Functions are blocks of code designed to perform particular tasks. They are executed when called (invoked).</p>
      
      <h3>Function Declaration:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function
greet("Alice"); // Returns: "Hello, Alice!"</code></pre>
      </div>
      
      <h3>Function Expression:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">const greet = function(name) {
  return "Hello, " + name + "!";
};

// Calling the function
greet("Bob"); // Returns: "Hello, Bob!"</code></pre>
      </div>
      
      <h3>Arrow Functions (ES6):</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// One parameter, simple return
const greet = name => "Hello, " + name + "!";

// Multiple parameters
const add = (a, b) => a + b;

// Multiple statements need curly braces and return
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};</code></pre>
      </div>
      
      <h3>Parameters and Arguments:</h3>
      <ul>
        <li><strong>Parameters</strong> are variables listed as part of the function definition.</li>
        <li><strong>Arguments</strong> are the values passed to the function when it is called.</li>
      </ul>
      
      <h3>Default Parameters (ES6):</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function greet(name = "stranger") {
  return "Hello, " + name + "!";
}

greet(); // Returns: "Hello, stranger!"
greet("Carol"); // Returns: "Hello, Carol!"</code></pre>
      </div>
    `
  },
  {
    id: 'js-intermediate-1',
    title: 'Arrays and Array Methods',
    description: 'Learn how to work with arrays and their built-in methods',
    difficulty: 'Intermediate',
    exercises: 4,
    content: `
      <h2>JavaScript Arrays</h2>
      <p>Arrays are ordered collections of items that can hold different data types.</p>
      
      <h3>Creating Arrays:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Array literal (recommended)
const fruits = ["Apple", "Banana", "Cherry"];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);</code></pre>
      </div>
      
      <h3>Accessing Array Elements:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Cherry"

// Get array length
console.log(fruits.length); // 3</code></pre>
      </div>
      
      <h3>Common Array Methods:</h3>
      
      <h4>Adding/Removing Elements:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">const numbers = [1, 2, 3];

// Add to end
numbers.push(4); // [1, 2, 3, 4]

// Remove from end
numbers.pop(); // [1, 2, 3]

// Add to beginning
numbers.unshift(0); // [0, 1, 2, 3]

// Remove from beginning
numbers.shift(); // [1, 2, 3]

// Add/remove at specific position
numbers.splice(1, 1); // [1, 3] (removed 1 element at index 1)
numbers.splice(1, 0, 2); // [1, 2, 3] (added 2 at index 1)</code></pre>
      </div>
      
      <h4>Iterating Over Arrays:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">const fruits = ["Apple", "Banana", "Cherry"];

// forEach
fruits.forEach(fruit => {
  console.log(fruit);
});

// map - creates a new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
// ["APPLE", "BANANA", "CHERRY"]

// filter - creates a new array with elements that pass the test
const longFruits = fruits.filter(fruit => fruit.length > 5);
// ["Banana", "Cherry"]

// find - returns the first element that passes the test
const fruit = fruits.find(fruit => fruit.startsWith("B"));
// "Banana"

// some - tests if at least one element passes the test
const hasA = fruits.some(fruit => fruit.includes("A"));
// true

// every - tests if all elements pass the test
const allLongNames = fruits.every(fruit => fruit.length > 3);
// true</code></pre>
      </div>
    `
  },
  {
    id: 'js-intermediate-2',
    title: 'Objects and Object Methods',
    description: 'Learn about JavaScript objects and their properties',
    difficulty: 'Intermediate',
    exercises: 4,
    content: `
      <h2>JavaScript Objects</h2>
      <p>Objects are collections of related data and functionality, stored as key-value pairs.</p>
      
      <h3>Creating Objects:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Object literal (most common)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "music", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
};

// Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;</code></pre>
      </div>
      
      <h3>Accessing Object Properties:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Dot notation
console.log(person.firstName); // "John"
console.log(person.address.city); // "Anytown"

// Bracket notation (useful for dynamic keys)
console.log(person["lastName"]); // "Doe"

const key = "age";
console.log(person[key]); // 30</code></pre>
      </div>
      
      <h3>Object Methods:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">const person = {
  firstName: "John",
  lastName: "Doe",
  // Method defined within the object
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  // Shorthand method (ES6)
  greet() {
    return "Hello, my name is " + this.fullName();
  }
};

console.log(person.fullName()); // "John Doe"
console.log(person.greet()); // "Hello, my name is John Doe"</code></pre>
      </div>
      
      <h3>Working with Objects:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Get all keys
console.log(Object.keys(person)); // ["firstName", "lastName", "age", "hobbies", "address"]

// Get all values
console.log(Object.values(person)); // ["John", "Doe", 30, Array(3), Object]

// Get key-value pairs
console.log(Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ...]

// Merge objects
const personDetails = { height: 180, weight: 75 };
const completePerson = { ...person, ...personDetails };
// or
Object.assign(person, personDetails);</code></pre>
      </div>
    `
  },
  {
    id: 'js-intermediate-3',
    title: 'Asynchronous JavaScript',
    description: 'Explore promises, async/await, and handling asynchronous operations',
    difficulty: 'Intermediate',
    exercises: 3,
    content: `
      <h2>Asynchronous JavaScript</h2>
      <p>JavaScript handles asynchronous operations using callbacks, promises, and async/await.</p>
      
      <h3>Callbacks:</h3>
      <p>A callback is a function passed as an argument to another function, to be executed later.</p>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data); // { name: "John", age: 30 }
});</code></pre>
      </div>
      
      <h3>Promises:</h3>
      <p>Promises represent a value that might be available now, later, or never.</p>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      
      if (success) {
        const data = { name: "John", age: 30 };
        resolve(data);
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data); // { name: "John", age: 30 }
    return data.name;
  })
  .then(name => {
    console.log(name); // "John"
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation completed");
  });</code></pre>
      </div>
      
      <h3>Async/Await:</h3>
      <p>Async/await is syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.</p>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">async function getData() {
  try {
    const data = await fetchData(); // fetchData returns a promise
    console.log(data);
    
    const response = await fetch('https://api.example.com/data');
    const jsonData = await response.json();
    console.log(jsonData);
    
    return jsonData;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the async function
getData().then(result => {
  console.log("Final result:", result);
});</code></pre>
      </div>
      
      <h3>Promise APIs:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Promise.all - waits for all promises to resolve
Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then(([result1, result2, result3]) => {
    console.log(result1, result2, result3);
  })
  .catch(error => {
    console.error("At least one promise failed:", error);
  });

// Promise.race - resolves/rejects as soon as one promise resolves/rejects
Promise.race([fetchData1(), fetchData2()])
  .then(result => {
    console.log("Fastest result:", result);
  })
  .catch(error => {
    console.error("Fastest promise failed:", error);
  });</code></pre>
      </div>
    `
  },
  {
    id: 'js-advanced-1',
    title: 'Advanced JavaScript: Closures',
    description: 'Learn about closures and their applications in JavaScript',
    difficulty: 'Advanced',
    exercises: 3,
    content: `
      <h2>JavaScript Closures</h2>
      <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.</p>
      
      <h3>How Closures Work:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++; // Access to the outer function's scope
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Each call to createCounter() creates a new scope
const counter2 = createCounter();
console.log(counter2()); // 1 (separate count variable)</code></pre>
      </div>
      
      <h3>Practical Uses of Closures:</h3>
      
      <h4>1. Data Encapsulation / Private Variables:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function createPerson(name) {
  // Private variables
  let _name = name;
  let _age = 0;
  
  return {
    getName: function() {
      return _name;
    },
    getAge: function() {
      return _age;
    },
    setAge: function(age) {
      if (age < 0) {
        console.error("Age cannot be negative");
        return;
      }
      _age = age;
    }
  };
}

const person = createPerson("John");
person.setAge(30);
console.log(person.getName()); // "John"
console.log(person.getAge()); // 30

// _name and _age cannot be accessed directly
console.log(person._age); // undefined</code></pre>
      </div>
      
      <h4>2. Function Factories:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15</code></pre>
      </div>
      
      <h4>3. Maintaining State in Event Handlers:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">function setupButtonClick(buttonId, message) {
  // The event handler forms a closure, capturing the message
  document.getElementById(buttonId).addEventListener('click', function() {
    alert(message);
  });
}

setupButtonClick('btn1', 'Button 1 was clicked');
setupButtonClick('btn2', 'Button 2 was clicked');</code></pre>
      </div>
    `
  },
  {
    id: 'js-advanced-2',
    title: 'Advanced JavaScript: Prototypes',
    description: 'Understand JavaScript prototypes and inheritance',
    difficulty: 'Advanced',
    exercises: 3,
    content: `
      <h2>JavaScript Prototypes</h2>
      <p>Prototypes are the mechanism by which JavaScript objects inherit features from one another.</p>
      
      <h3>Prototype Basics:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
  return "Hello, my name is " + this.name;
};

// Creating instances
const john = new Person("John", 30);
const jane = new Person("Jane", 25);

console.log(john.greet()); // "Hello, my name is John"
console.log(jane.greet()); // "Hello, my name is Jane"

// All instances share the same method
console.log(john.greet === jane.greet); // true</code></pre>
      </div>
      
      <h3>Prototype Chain:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">console.log(john.__proto__ === Person.prototype); // true
console.log(john.__proto__.__proto__ === Object.prototype); // true
console.log(john.__proto__.__proto__.__proto__ === null); // true</code></pre>
      </div>
      
      <h3>Inheritance with Prototypes:</h3>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  return this.name + " is eating.";
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix constructor reference

// Add methods to Dog prototype
Dog.prototype.bark = function() {
  return this.name + " says woof!";
};

// Create instance
const rex = new Dog("Rex", "German Shepherd");

console.log(rex.eat()); // "Rex is eating."
console.log(rex.bark()); // "Rex says woof!"</code></pre>
      </div>
      
      <h3>Class Syntax (ES6):</h3>
      <p>ES6 introduced class syntax as syntactic sugar over prototypes.</p>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    return this.name + " is eating.";
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    return this.name + " says woof!";
  }
}

const rex = new Dog("Rex", "German Shepherd");
console.log(rex.eat()); // "Rex is eating."
console.log(rex.bark()); // "Rex says woof!"</code></pre>
      </div>
    `
  },
  {
    id: 'js-advanced-3',
    title: 'Advanced JavaScript: Modules',
    description: 'Learn about JavaScript modules and modular code organization',
    difficulty: 'Advanced',
    exercises: 3,
    content: `
      <h2>JavaScript Modules</h2>
      <p>Modules are a way to organize code into reusable, encapsulated pieces.</p>
      
      <h3>ESM (ECMAScript Modules):</h3>
      <p>The standard module system in modern JavaScript.</p>
      
      <h4>Exporting:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// math.js
// Named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export (only one per module)
export default function multiply(a, b) {
  return a * b;
}</code></pre>
      </div>
      
      <h4>Importing:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// app.js
// Import default export
import multiply from './math.js';

// Import named exports
import { PI, add, subtract } from './math.js';

// Import all exports as a namespace
import * as math from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(2, 4)); // 8
console.log(math.PI); // 3.14159</code></pre>
      </div>
      
      <h3>Common Module Patterns:</h3>
      
      <h4>1. Feature-based Organization:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// user/user-model.js
export class User { ... }

// user/user-service.js
import { User } from './user-model.js';
export class UserService { ... }

// user/index.js (re-exporting)
export { User } from './user-model.js';
export { UserService } from './user-service.js';

// In another file
import { User, UserService } from './user';</code></pre>
      </div>
      
      <h4>2. Utility Modules:</h4>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// utils/date-utils.js
export function formatDate(date) { ... }
export function parseDate(dateString) { ... }

// utils/string-utils.js
export function capitalize(str) { ... }
export function truncate(str, length) { ... }

// utils/index.js
export * from './date-utils.js';
export * from './string-utils.js';

// In another file
import { formatDate, capitalize } from './utils';</code></pre>
      </div>
      
      <h3>Dynamic Imports:</h3>
      <p>Load modules conditionally using the dynamic import() function.</p>
      
      <div class="bg-gray-900 rounded-lg p-4 mb-6">
        <pre class="text-white"><code class="language-javascript">// Only load the module when needed
button.addEventListener('click', async () => {
  const { default: Chart } = await import('./chart.js');
  const chart = new Chart();
  chart.render('#container');
});</code></pre>
      </div>
    `
  }
];