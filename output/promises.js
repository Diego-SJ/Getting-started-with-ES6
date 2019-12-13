"use strict";

var promise = new Promise(function (resolve, reject) {
  // Success
  setTimeout(function () {
    var success = true;
    if (success) resolve('Operation succesfuly!');else reject('There is an error!');
  }, 4000);
});
promise.then(function (msg) {
  console.log(msg);
});
promise["catch"](function (msg) {
  console.log(msg);
});