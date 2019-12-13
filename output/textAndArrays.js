"use strict";

var str = 'Hello world!';
console.log(str, 'start wiith a:', str.toLowerCase().startsWith('h'));
console.log(str, 'end with !:', str.toLowerCase().endsWith('!'));
console.log("".concat(str, " includes 'el'."), str.includes('el'));
var friends = ['Diego', 'Juan', 'Bryan', 'Yagel'];
console.log("the array firens includes juan", friends.includes('Juan'));
console.log(friends.find(function (friend) {
  return friend === 'Juan' ? 'exist this friend' : "doesn't exist this friend";
}));
console.log(friends.findIndex(function (friend) {
  return friend === 'Bryan';
}));