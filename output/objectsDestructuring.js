"use strict";

var user = {
  name: 'Diego',
  email: 'dsalas035@gmail.com',
  age: 21,
  country: 'Mexico' // job: 'Web developer',

};
var name = user.name,
    email = user.email,
    _user$lname = user.lname,
    lname = _user$lname === void 0 ? 'empty' : _user$lname; // console.log(job);
// console.log(lname);

var showInfo = function showInfo(_ref) {
  var name = _ref.name,
      _ref$job = _ref.job,
      job = _ref$job === void 0 ? 'student' : _ref$job;
  console.log("".concat(name, " is ").concat(job));
};

showInfo(user);