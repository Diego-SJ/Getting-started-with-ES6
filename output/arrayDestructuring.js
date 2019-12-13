"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var person = ['Diego Salas', 21, 'Mexico'];
var name = person[0],
    country = person[2],
    _person$ = person[3],
    work = _person$ === void 0 ? 'without job' : _person$;

var showInfo = function showInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : person,
      _ref2 = _slicedToArray(_ref, 4),
      name = _ref2[0],
      country = _ref2[2],
      _ref2$ = _ref2[3],
      work = _ref2$ === void 0 ? 'without job' : _ref2$;

  console.log("".concat(name, " lives in ").concat(country, ", and his job is ").concat(work));
};

showInfo(person);