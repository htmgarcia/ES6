# Learning ES6

Based on [this course](https://www.youtube.com/playlist?list=PLhSj3UTs2_yX_ct0OfHrmMwKL8wpz-N2j) by Falcon Masters

**Important! Before to continue, you'll need to have nodejs and npm installed.**

## Initial file structure

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

## Edit package.json file and install Babeljs

Edit package.json. Include only this content: 

`{}`

In terminal go to the folder where package.json is stored:

`> cd path/to/folder/`

Run this command to install the npm dependencies. We install 3 babel [as suggested here](https://babeljs.io/docs/en/usage):

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

## Create a command to run the devDependencies

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

## Make ES6 code compatible with all browsers

Create a file named .babelrc with the content below:

```
{
  "presets": ["@babel/preset-env"]
}
```

If you run the command again, it will do the same process from previous step, however this time will change the code from the constLet.js file stored in output/ folder to make it compatible with all the browsers.

## Automatically execute a command

Add `--watch` to `"build"`:

`"build": "babel src -d output --watch"`

Then run again (just once):

`> npm run build`

From now on, every time you save changes on your javascript ES6 file, the command will run automatically.

# Let and const

## The scope

The scope for **let** and **const** is type block, which is different to regular **var**. These type of variables are not reachable outside `{}`. In the example below `isAdult` is not reachable by `console.log()` because is inside a conditional.

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

## Redeclare variables in the same block

You can't redeclare variables if are living in the same block. As example:

```
let name = 'Juan Perez';
let name = 'John Doe';
```

**About let variables only.** You can override its value if you don't include `let` in the syntax when overriding:

```
let name = 'Juan Perez';
name = 'John Doe';
```


## Redeclare variables from different blocks

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

In the code above, the first declaration of `isAdult` lives inside the conditional. This is what means "living in a block". The second declaration is outside that block.

# When to use Let and const?

Similar to PHP:

- **let** are variables. You can modify its value always.
- **const** are constants. Its value is the same always. Cannot change.

## Const exception

When the const is an array, you can push new values. As example:

```
const colors = ['blue', 'red'];
colors.push('purple');

console.log(colors);
```