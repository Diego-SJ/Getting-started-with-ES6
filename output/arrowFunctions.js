"use strict";

var names = ['Diego', 'Juan', 'Roberto'];
var num_char = names.map(function (name) {
  console.log("".concat(name, " have ").concat(name.length, " letters"));
}); // const af_num_char = names.map((name) => {
// 	`${name} have ${name.length} letters`;
// });
// console.log(af_num_char);