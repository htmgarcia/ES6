"use strict";

function registerUser(name) {
  var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No specified';
  var email = arguments.length > 2 ? arguments[2] : undefined;
  var telephone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No specified';
  return "Name: ".concat(name, ", Country: ").concat(country, ", Email: ").concat(email, ", Telephone: ").concat(telephone);
}

console.log(registerUser('John Doe', undefined, 'mail@nomail.com', undefined));