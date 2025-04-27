import { Exercise } from '../types';

export const exercises: Exercise[] = [
  // JavaScript Basics: Variables
  {
    id: 'var-1',
    lessonId: 'js-basics-1',
    title: 'Declare a Variable',
    description: 'Declare a variable named "greeting" and assign it the value "Hello, world!"',
    hint: 'Use the "const" keyword to declare a variable that won\'t change.',
    initialCode: '// Declare your variable here',
    testFunction: `
      return code.includes('const greeting') && code.includes('"Hello, world!"');
    `
  },
  {
    id: 'var-2',
    lessonId: 'js-basics-1',
    title: 'Reassign a Variable',
    description: 'Declare a variable with "let" named "count" with initial value 5, then change its value to 10.',
    hint: 'First declare the variable with let, then on the next line assign a new value.',
    initialCode: '// Write your code here',
    testFunction: `
      return code.includes('let count = 5') && code.includes('count = 10');
    `
  },
  {
    id: 'var-3',
    lessonId: 'js-basics-1',
    title: 'Constant vs Variable',
    description: 'Declare a constant named "PI" with value 3.14 and a variable named "radius" with value 5.',
    hint: 'Use "const" for PI and "let" for radius.',
    initialCode: '// Declare your variables here',
    testFunction: `
      return code.includes('const PI = 3.14') && code.includes('let radius = 5');
    `
  },
  
  // JavaScript Basics: Data Types
  {
    id: 'dt-1',
    lessonId: 'js-basics-2',
    title: 'String Operations',
    description: 'Create a string variable called "name" with your name, and another string "greeting" that uses "name" in a template literal to say "Hello, [name]!"',
    hint: 'Use backticks (`) to create a template literal with ${name}.',
    initialCode: '// Write your code here',
    testFunction: `
      return code.includes('const name =') && 
             code.includes('\`Hello, \${name}!\`');
    `
  },
  {
    id: 'dt-2',
    lessonId: 'js-basics-2',
    title: 'Number Operations',
    description: 'Create two number variables, "x" and "y", and calculate their sum, difference, product, and quotient.',
    hint: 'Store each result in a separate variable.',
    initialCode: '// Write your code here',
    testFunction: `
      return code.includes('const x =') && 
             code.includes('const y =') && 
             code.includes('x + y') &&
             code.includes('x - y') &&
             code.includes('x * y') &&
             code.includes('x / y');
    `
  },
  {
    id: 'dt-3',
    lessonId: 'js-basics-2',
    title: 'Boolean Logic',
    description: 'Create a boolean variable "isAdult" based on whether an "age" variable is 18 or older.',
    hint: 'Use a comparison operator to set the boolean value.',
    initialCode: 'const age = 20;\n// Create the isAdult variable here',
    testFunction: `
      return code.includes('const isAdult =') && 
             (code.includes('age >= 18') || code.includes('age > 17'));
    `
  },
  {
    id: 'dt-4',
    lessonId: 'js-basics-2',
    title: 'Object Creation',
    description: 'Create an object called "person" with properties for name, age, and a boolean "isStudent".',
    hint: 'Use curly braces to define an object with key-value pairs.',
    initialCode: '// Create your object here',
    testFunction: `
      return code.includes('const person =') && 
             code.includes('name:') &&
             code.includes('age:') &&
             code.includes('isStudent:');
    `
  },
  
  // JavaScript Basics: Functions
  {
    id: 'func-1',
    lessonId: 'js-basics-3',
    title: 'Function Declaration',
    description: 'Declare a function called "greet" that takes a name parameter and returns a greeting string.',
    hint: 'The function should return "Hello, [name]!"',
    initialCode: '// Declare your function here',
    testFunction: `
      return code.includes('function greet') && 
             code.includes('return') &&
             code.includes('Hello') &&
             code.includes('name');
    `
  },
  {
    id: 'func-2',
    lessonId: 'js-basics-3',
    title: 'Arrow Functions',
    description: 'Create an arrow function that calculates the square of a number.',
    hint: 'The arrow function should take one parameter and return its square.',
    initialCode: '// Write your arrow function here',
    testFunction: `
      return (code.includes('=>') && 
             code.includes('*') &&
             code.includes('return')) ||
             code.includes('=> num * num') ||
             code.includes('=> n * n');
    `
  },
  {
    id: 'func-3',
    lessonId: 'js-basics-3',
    title: 'Function with Default Parameters',
    description: 'Create a function called "welcome" that takes a name parameter with default value "Guest".',
    hint: 'Use the default parameter syntax: parameter = defaultValue',
    initialCode: '// Write your function here',
    testFunction: `
      return code.includes('function welcome') && 
             code.includes('= "Guest"') &&
             code.includes('return');
    `
  },
  {
    id: 'func-4',
    lessonId: 'js-basics-3',
    title: 'Function Expression',
    description: 'Create a function expression assigned to a variable "multiply" that multiplies two numbers.',
    hint: 'Use the syntax: const functionName = function(parameters) { body }',
    initialCode: '// Write your function expression here',
    testFunction: `
      return code.includes('const multiply =') && 
             code.includes('function') &&
             code.includes('*') &&
             code.includes('return');
    `
  },
  {
    id: 'func-5',
    lessonId: 'js-basics-3',
    title: 'Callback Function',
    description: 'Create a function "processArray" that takes an array and a callback function as parameters, and applies the callback to each element.',
    hint: 'Use the forEach method to apply the callback to each array element.',
    initialCode: '// Write your function here',
    testFunction: `
      return code.includes('function processArray') && 
             code.includes('callback') &&
             code.includes('forEach');
    `
  },
  
  // Arrays and Array Methods
  {
    id: 'arr-1',
    lessonId: 'js-intermediate-1',
    title: 'Create and Access Array',
    description: 'Create an array of 5 colors and access the third color (index 2).',
    hint: 'Remember that array indexing starts at 0, so the third element is at index 2.',
    initialCode: '// Create your array here\n\n// Access the third color',
    testFunction: `
      return code.includes('[') && 
             code.includes(']') &&
             code.includes('[2]');
    `
  },
  {
    id: 'arr-2',
    lessonId: 'js-intermediate-1',
    title: 'Array Map Method',
    description: 'Use the map method to create a new array with the lengths of each string in the given array.',
    hint: 'Remember that map creates a new array with the results of calling a function on every element.',
    initialCode: 'const words = ["hello", "world", "javascript", "array"];\n\n// Use map to create a new array with the lengths',
    testFunction: `
      return code.includes('map') && 
             code.includes('.length');
    `
  },
  {
    id: 'arr-3',
    lessonId: 'js-intermediate-1',
    title: 'Array Filter Method',
    description: 'Use the filter method to create a new array with only the even numbers from the given array.',
    hint: 'Use the modulo operator (%) to check if a number is even.',
    initialCode: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// Use filter to create a new array with only even numbers',
    testFunction: `
      return code.includes('filter') && 
             code.includes('% 2 === 0');
    `
  },
  {
    id: 'arr-4',
    lessonId: 'js-intermediate-1',
    title: 'Array Reduce Method',
    description: 'Use the reduce method to find the sum of all numbers in the given array.',
    hint: 'Remember that reduce executes a reducer function on each element, resulting in a single output value.',
    initialCode: 'const numbers = [1, 2, 3, 4, 5];\n\n// Use reduce to calculate the sum',
    testFunction: `
      return code.includes('reduce') && 
             (code.includes('acc + ') || code.includes('sum + ') || code.includes('result + '));
    `
  },
  
  // Objects and Object Methods
  {
    id: 'obj-1',
    lessonId: 'js-intermediate-2',
    title: 'Create and Access Object',
    description: 'Create an object representing a book with title, author, and year properties. Then access the author property.',
    hint: 'Use curly braces to define an object with key-value pairs.',
    initialCode: '// Create your book object here\n\n// Access the author property',
    testFunction: `
      return code.includes('{') && 
             code.includes('}') &&
             code.includes('title') &&
             code.includes('author') &&
             code.includes('year') &&
             code.includes('.author');
    `
  },
  {
    id: 'obj-2',
    lessonId: 'js-intermediate-2',
    title: 'Object Method',
    description: 'Add a method called "getFullInfo" to the book object that returns a string with all the book information.',
    hint: 'Methods are functions that are properties of an object.',
    initialCode: 'const book = {\n  title: "JavaScript: The Good Parts",\n  author: "Douglas Crockford",\n  year: 2008,\n  // Add the getFullInfo method here\n};',
    testFunction: `
      return code.includes('getFullInfo') && 
             code.includes('function') &&
             code.includes('return') &&
             code.includes('this.title') &&
             code.includes('this.author') &&
             code.includes('this.year');
    `
  },
  {
    id: 'obj-3',
    lessonId: 'js-intermediate-2',
    title: 'Object Destructuring',
    description: 'Use object destructuring to extract the title, author, and year from the book object into separate variables.',
    hint: 'Use the syntax: const { property1, property2 } = objectName;',
    initialCode: 'const book = {\n  title: "JavaScript: The Good Parts",\n  author: "Douglas Crockford",\n  year: 2008\n};\n\n// Destructure the object here',
    testFunction: `
      return code.includes('const {') && 
             code.includes('title') &&
             code.includes('author') &&
             code.includes('year') &&
             code.includes('}');
    `
  },
  {
    id: 'obj-4',
    lessonId: 'js-intermediate-2',
    title: 'Object.keys and Object.values',
    description: 'Use Object.keys() and Object.values() to get arrays of the keys and values of the given object.',
    hint: 'Object.keys() returns an array of the object\'s property names, while Object.values() returns an array of the property values.',
    initialCode: 'const person = {\n  name: "Alice",\n  age: 30,\n  city: "New York"\n};\n\n// Get the keys and values here',
    testFunction: `
      return code.includes('Object.keys') && 
             code.includes('Object.values');
    `
  },
  
  // Asynchronous JavaScript
  {
    id: 'async-1',
    lessonId: 'js-intermediate-3',
    title: 'Create a Promise',
    description: 'Create a promise that resolves after 2 seconds with the message "Promise resolved!".',
    hint: 'Use the Promise constructor with setTimeout inside.',
    initialCode: '// Create your promise here',
    testFunction: `
      return code.includes('new Promise') && 
             code.includes('setTimeout') &&
             code.includes('resolve') &&
             code.includes('Promise resolved');
    `
  },
  {
    id: 'async-2',
    lessonId: 'js-intermediate-3',
    title: 'Using then/catch',
    description: 'Use the then and catch methods to handle the promise resolution and any errors.',
    hint: 'Chain .then() to handle success and .catch() to handle errors.',
    initialCode: 'const promise = new Promise((resolve, reject) => {\n  const success = Math.random() > 0.5;\n  setTimeout(() => {\n    if (success) {\n      resolve("Success!");\n    } else {\n      reject("Error!");\n    }\n  }, 1000);\n});\n\n// Handle the promise here',
    testFunction: `
      return code.includes('.then') && 
             code.includes('.catch');
    `
  },
  {
    id: 'async-3',
    lessonId: 'js-intermediate-3',
    title: 'Async/Await',
    description: 'Convert the promise-handling code to use async/await syntax.',
    hint: 'Use the async keyword before a function and the await keyword before a promise.',
    initialCode: 'const fetchData = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve("Data received"), 1000);\n  });\n};\n\n// Write an async function to use the fetchData function with await',
    testFunction: `
      return code.includes('async function') && 
             code.includes('await') &&
             code.includes('fetchData()');
    `
  },
  
  // Advanced JavaScript: Closures
  {
    id: 'closure-1',
    lessonId: 'js-advanced-1',
    title: 'Create a Counter Closure',
    description: 'Create a function "createCounter" that returns a counter function. Each time the counter is called, it should increment and return the count.',
    hint: 'The inner function needs to access a variable in the outer function\'s scope.',
    initialCode: '// Write your createCounter function here',
    testFunction: `
      return code.includes('function createCounter') && 
             code.includes('return function') &&
             code.includes('return') &&
             (code.includes('count++') || code.includes('count += 1') || code.includes('count = count + 1'));
    `
  },
  {
    id: 'closure-2',
    lessonId: 'js-advanced-1',
    title: 'Private Variables with Closures',
    description: 'Create a "createBank" function that manages a private balance and returns methods to deposit, withdraw, and check the balance.',
    hint: 'The balance should not be directly accessible from outside the closure.',
    initialCode: '// Write your createBank function here',
    testFunction: `
      return code.includes('function createBank') && 
             code.includes('let balance') &&
             code.includes('deposit') &&
             code.includes('withdraw') &&
             code.includes('getBalance');
    `
  },
  {
    id: 'closure-3',
    lessonId: 'js-advanced-1',
    title: 'Function Factory with Closures',
    description: 'Create a function "createMultiplier" that takes a factor and returns a function that multiplies its input by that factor.',
    hint: 'The returned function should "remember" the factor passed to createMultiplier.',
    initialCode: '// Write your createMultiplier function here',
    testFunction: `
      return code.includes('function createMultiplier') && 
             code.includes('return function') &&
             code.includes('*');
    `
  },
  
  // Advanced JavaScript: Prototypes
  {
    id: 'proto-1',
    lessonId: 'js-advanced-2',
    title: 'Constructor Function with Prototype',
    description: 'Create a Person constructor function with name and age properties, and add a greet method to its prototype.',
    hint: 'Define the constructor function first, then add methods to Person.prototype.',
    initialCode: '// Write your code here',
    testFunction: `
      return code.includes('function Person') && 
             code.includes('this.name') &&
             code.includes('this.age') &&
             code.includes('Person.prototype.greet');
    `
  },
  {
    id: 'proto-2',
    lessonId: 'js-advanced-2',
    title: 'Create a Prototype Chain',
    description: 'Create an Animal constructor with a speak method, and a Dog constructor that inherits from Animal.',
    hint: 'Use Animal.call(this, ...) inside Dog and set up the prototype chain with Object.create().',
    initialCode: '// Write your code here',
    testFunction: `
      return code.includes('function Animal') && 
             code.includes('function Dog') &&
             code.includes('Animal.call') &&
             code.includes('Dog.prototype = Object.create(Animal.prototype)');
    `
  },
  {
    id: 'proto-3',
    lessonId: 'js-advanced-2',
    title: 'ES6 Classes',
    description: 'Convert the Animal and Dog constructor functions to ES6 classes with inheritance.',
    hint: 'Use the class keyword and extends for inheritance.',
    initialCode: '// Write your ES6 classes here',
    testFunction: `
      return code.includes('class Animal') && 
             code.includes('class Dog extends Animal') &&
             code.includes('super');
    `
  },
  
  // Advanced JavaScript: Modules
  {
    id: 'module-1',
    lessonId: 'js-advanced-3',
    title: 'Export Module Members',
    description: 'Create named exports for PI, square, and cube functions, and a default export for a sum function.',
    hint: 'Use "export" for named exports and "export default" for the default export.',
    initialCode: '// Write your module exports here',
    testFunction: `
      return code.includes('export const PI') && 
             code.includes('export function square') &&
             code.includes('export function cube') &&
             code.includes('export default function sum');
    `
  },
  {
    id: 'module-2',
    lessonId: 'js-advanced-3',
    title: 'Import Module Members',
    description: 'Write import statements to import the default and named exports from a math.js module.',
    hint: 'Use "import name from" for default exports and "import { name }" for named exports.',
    initialCode: '// Write your import statements here',
    testFunction: `
      return code.includes('import sum from') && 
             code.includes('import { PI, square, cube }');
    `
  },
  {
    id: 'module-3',
    lessonId: 'js-advanced-3',
    title: 'Dynamic Import',
    description: 'Write code that dynamically imports a module when a button is clicked.',
    hint: 'Use the import() function which returns a promise.',
    initialCode: '// Write your code for dynamic import here',
    testFunction: `
      return code.includes('import(') && 
             code.includes('then') &&
             (code.includes('addEventListener') || code.includes('onClick'));
    `
  }
];