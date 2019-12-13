"use strict";

// REST get params
var showData = function showData() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  console.log(data);
};

showData('Diego', 21, 'dsalas035@gmail.com', 'Mexico'); // SPRED send params

var user = ['Diego', 21, 'dsalas035@gmail.com', 'Mexico'];
var userObj = {
  name: 'Diego',
  age: 21,
  email: 'dsalas035@gmail.com',
  country: 'Mexico'
};

var showData2 = function showData2() {
  for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    data[_key2] = arguments[_key2];
  }

  console.log(data);
};

showData2.apply(void 0, user);