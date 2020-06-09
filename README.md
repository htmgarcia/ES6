# Learning ES6

Based on [this course](https://www.youtube.com/playlist?list=PLhSj3UTs2_yX_ct0OfHrmMwKL8wpz-N2j) by Falcon Masters

Before to continue, you'll need to have nodejs and npm installed. 

## Create a package.json file and install node_modules dependencies

Include only this content: 

`{}`

In terminal go to the folder where package.json is stored:

`> cd path/to/folder/`

Run this command to install the npm dependencies (in this example  we install 3 babel plugins - https://babeljs.io/docs/en/usage):
`> npm install --save-dev @babel/core @babel/cli @babel/preset-env`

At this point, package.json should include the dependencies automatically. In this example: 3 dependencies from babel.

`{
  "devDependencies": {
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2"
  }
}`
 

## Create a command to run the devDependencies

In this example we create the "build" command inside the "scripts" object. This code is added manually:

`"scripts": {
  "build": "babel src -d output"
}`

src = folder where the files with EC6 standard are stored
output = folder where files converted in vain code for all browsers are stored 

So far, package.json looks like:

`{
  "devDependencies": {
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2"
  },
  "scripts": {
    "build": "babel src -d output"
  }
}`

In console we run:

`> npm run build`

The command above executes "babel src -d output"

## Make ES6 code compatible with all browsers =====

*This is only when you're using babel.*

Create a file named .babelrc with the content below:

`{
  "presets": ["@babel/preset-env"]
}`

## Automatically execute a command

Add `--watch` to `"build"`:

`"build": "babel src -d output --watch"`

Then run again (just once):

`> npm run build`

From now on, every time you save changes on your javascript ES6 file, the command will run automatically.