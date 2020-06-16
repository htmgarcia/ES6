"use strict";

var names = ['Miguel', 'Alberto', 'Oscar', 'Juan'];
var number_of_characters = names.map(function (name) {
  return "".concat(name, " has ").concat(name.length, " number of characters");
});
console.log(number_of_characters);