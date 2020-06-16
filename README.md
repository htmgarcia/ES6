# Learning ES6

**Important! Before to continue, you'll need to have nodejs and npm installed.**

## 1. Initial file structure

Set this initial structure:

- src/
- src/constLet.js
- output/
- index.html
- package.json

### src/ folder

Here the javascript files using ES6 standard are stored.

### src/constLet.js file

A simple file to place ES6 code. In this example, we use the code below:

```
let name = 'John Doe';

console.log('Hello ' + name + '!');
```

### output/ folder

Here the javascript files compatible with all the browsers are stored. In this example, the files inside src/ folder are converted with babeljs and stored here.
This is possible thanks to [this command](#3-create-a-command-to-run-the-devdependencies).

### index.html
 
A simple HTML5 file with the code below:

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>ES6</title>
</head>
<body>
<h1>Learning ES6</h1>

<script src="src/constLet.js"></script>
</body>
</html>
```

### package.json file

The file where node module dependencies and commands are defined.

## 2. Edit package.json file and install Babeljs

Edit package.json. Include only this content: 

`{}`

In terminal go to the folder where package.json is stored:

`> cd path/to/folder/`

Run this command to install the npm dependencies. We install 3 babel dependencies [as suggested here](https://babeljs.io/docs/en/usage):

`> npm install --save-dev @babel/core @babel/cli @babel/preset-env`

At this point, package.json was modified on the fly to include the babel dependencies.

```
{
  "devDependencies": {
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2"
  }
}
```

You'll notice a new folder named node_modules was created. **Don't touch this content!**

## 3. Create a command to run the devDependencies

Let's create the "build" command inside the "scripts" object. This code is added manually:

```
"scripts": {
  "build": "babel src -d output"
}
```

So far, package.json looks like:

```
{
  "devDependencies": {
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2"
  },
  "scripts": {
    "build": "babel src -d output"
  }
}
```

In console we run:

`> npm run build`

The command above executes "babel src -d output", which means the file constLet.js was copy-pasted inside output/ folder.

## 4. Make ES6 code compatible with all browsers

Create a file named .babelrc with the content below:

```
{
  "presets": ["@babel/preset-env"]
}
```

If you run the command again, it will do the same process from previous step, however this time will change the code from the constLet.js file stored in output/ folder to make it compatible with all the browsers.

## 5. Automatically execute a command

Add `--watch` to `"build"`:

`"build": "babel src -d output --watch"`

Then run again (just once):

`> npm run build`

From now on, every time you save changes on your javascript ES6 file, the command will run automatically.

## 6. Let and const

### The scope

The scope for **let** and **const** is type block, which is different to regular **var**. These type of variables are not reachable outside `{}`. In the example below `isAdult` is not reachable by `console.log()` and generates an error because is inside a conditional (aka "another block").

```
let age = 18;

if(age >= 18) {
    let isAdult = true;
}

console.log(isAdult);
```

To fix the example above, we put the last line inside the conditional:

```
let age = 18;

if(age >= 18) {
    let isAdult = true;
    console.log(isAdult);
}
```

### Redeclare variables in the same block

You can't redeclare variables if are living in the same block. As example:

```
let name = 'Juan Perez';
let name = 'John Doe';
```

**About let variables only.** You can override its value if you don't include `let` in the syntax:

```
let name = 'Juan Perez';
name = 'John Doe';
```


### Redeclare variables from different blocks

You CAN redeclare variables if are not living in the same block. As example:

```
let age = 18;

if(age >= 18) {
    const isAdult = true;
    console.log(isAdult);
}

const isAdult = 'Obviously';
console.log(isAdult);
```

In the code above, the first declaration of `isAdult` lives inside the conditional. This is what means "living inside a block". The second declaration is outside that block.

### When to use let and const?

Similar to PHP:

- **let** are variables. You can modify its value always.
- **const** are constants. Its value is the same always. Cannot change. 

Take in mind the ["living inside a block"](#redeclare-variables-from-different-blocks) approach if you need to use again the same variables or constants. 

### Const exception

When the const is an array, you can push new values. As example:

```
const colors = ['blue', 'red'];
colors.push('purple');

console.log(colors);
```

## 7. Template Strings

Wrap strings that contains variables with **`**. As example:

```
const name      = 'John Doe';
const age       = 33;
const country   = 'Mexico';

console.log(`His name is ${name}, is ${age} years old and is from ${country}`);
```

## 8. Arrow functions

Arrow functions follows the structure below:

```
(parameter) => {
    return `something`;
}
```

In a use case, using arrays and the `map()` method to have access to all the array values. One by one, similar to the `foreach()` method in PHP. As example:

```
const names = ['Miguel', 'Alberto', 'Oscar', 'Juan'];

const number_of_characters = names.map((name) => {
    return `${name} has ${name.length} number of characters`;
});

console.log(number_of_characters);
```

The arrow function from the example above can be optimized due only uses a single parameter, `name` in this case. 

```
const number_of_characters = names.map(name => `${name} has ${name.length} number of characters`);
```

## 9. Default parameters

Define a default value for a parameter to make it optional. Use `undefined` when calling the method.

```
function registerUser(name, country = 'No specified', email, telephone = 'No specified') {
    return `Name: ${name}, Country: ${country}, Email: ${email}, Telephone: ${telephone}`;
}

console.log(registerUser('John Doe', undefined, 'mail@nomail.com', undefined));
```

## 10. Destructure arrays

Transform array values into variables.

```
const person = ['John Doe', 33, 'Mexico'];

const [name, , country, email = 'No specified'] = person;

console.log(country);
```

In the example above we skip age (33) by leaving just a coma.

Now, using destructure arrays inside an arrow function is also possible.

```
const person = ['John Doe', 33, 'Mexico'];

const showInfo = ([name, , country, carrer = 'No specified'] = person) => {
    console.log(name, country, carrer);
}

showInfo();
```

The arrow function from the example above can be optimized. 

```
const showInfo = ([name, , country, carrer = 'No specified'] = person) => console.log(name, country, carrer);
```

## 11. Destructure objects

Transform object values into variables.

```
const person = {
	name: 'John Doe', 
	age: 33, 
	country: 'Mexico'
};

const {name, country, profession = 'No specified'} = person;
```

Please note destructure objects are very similar to destructure arrays, however the value positions doesn't matter. In the example above in the destruction we decided a different order in comparison with the object declaration. e.g country was declared as third value on the object, but in the deconstruction we moved to the second position.

Now, using destructure objects inside an arrow function is also possible.

```
const person = {
	name: 'John Doe', 
	age: 33, 
	country: 'Mexico'
};

const showInfo = ( {name, country, carrer = 'No specified'} ) => {
    console.log(`${name} is from ${country}`);
}

showInfo(person);
```

The arrow function from the example above can be optimized. 

```
const showInfo = ( {name, country, carrer = 'No specified'} ) => console.log(`${name} is from ${country}`);
```