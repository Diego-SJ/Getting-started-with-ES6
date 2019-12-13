"use strict";

function userRegister() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'no specify';
  var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mexico';
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is empty';
  var age = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'is empty';
  return "Name: ".concat(name, ", country: ").concat(country, ", email: ").concat(email, ", age: ").concat(age);
}

console.log(userRegister('diego', undefined, 'dsalas035@gmail.com'));