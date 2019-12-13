"use strict";

var creatObject = function creatObject(name, age) {
  return {
    name: name,
    age: age,
    showInfo: function showInfo() {
      return "".concat(name, " is ").concat(age, " years old.");
    }
  };
};

console.log(creatObject('Diego', 21).showInfo());