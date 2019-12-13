'use strict';

function _typeof(obj) {
	if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
		_typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function _typeof(obj) {
			return obj &&
				typeof Symbol === 'function' &&
				obj.constructor === Symbol &&
				obj !== Symbol.prototype
				? 'symbol'
				: typeof obj;
		};
	}
	return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
		return call;
	}
	return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
	if (self === void 0) {
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	}
	return self;
}

function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf
		? Object.getPrototypeOf
		: function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
		  };
	return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError('Super expression must either be null or a function');
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: { value: subClass, writable: true, configurable: true },
	});
	if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
	_setPrototypeOf =
		Object.setPrototypeOf ||
		function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
	return _setPrototypeOf(o, p);
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ('value' in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

var User =
	/*#__PURE__*/
	(function() {
		function User() {
			var name =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: 'no name';
			var age = arguments.length > 1 ? arguments[1] : undefined;
			var email = arguments.length > 2 ? arguments[2] : undefined;
			var work = arguments.length > 3 ? arguments[3] : undefined;

			_classCallCheck(this, User);

			this.name = name;
			this.age = age;
			this.email = email;
			this.work = work;
		}

		_createClass(User, [
			{
				key: 'showGreeting',
				value: function showGreeting(message) {
					return 'Hi! '.concat(message, ' <br>');
				},
			},
			{
				key: 'showGreetingTS',
				value: function showGreetingTS() {
					return 'Hi! '
						.concat(this.name, ' <br>\n        your email: ')
						.concat(this.email, ' <br>\n        your age: ')
						.concat(this.age, ' <br><hr>');
				},
			},
		]);

		return User;
	})();

var Student =
	/*#__PURE__*/
	(function(_User) {
		_inherits(Student, _User);

		function Student(name, age, email, work) {
			var _this;

			var carrer =
				arguments.length > 4 && arguments[4] !== undefined
					? arguments[4]
					: 'no carrer';
			var garde = arguments.length > 5 ? arguments[5] : undefined;
			var group = arguments.length > 6 ? arguments[6] : undefined;

			_classCallCheck(this, Student);

			_this = _possibleConstructorReturn(
				this,
				_getPrototypeOf(Student).call(this, name, age, email, work),
			);
			_this.carrer = carrer;
			_this.grade = garde;
			_this.group = group;
			return _this;
		}

		_createClass(Student, [
			{
				key: 'showGreetingTSS',
				value: function showGreetingTSS() {
					return 'Hi! '
						.concat(this.name, ' <br>\n        your email: ')
						.concat(this.email, ' <br>\n        your age: ')
						.concat(this.age, ' <br>\n        carrer: ')
						.concat(this.carrer, '<hr>');
				},
			},
		]);

		return Student;
	})(User); // const diego = new User('Juan Jimenez', 21, 'dsalas035@gmail.com');
// document.write(diego.email);
// console.log(diego);
// const juan = new User(undefined, '', 'juan@gmail.com');
// document.write(juan.name);

var diego = new User('Diego Salas', 21, 'dsalas035@gmail.com', 'Web developer');
var pedro = new Student(
	'Pedro Lopez',
	31,
	'pedro@gmail.com',
	'Backe-end Developer',
	'TICS',
); // document.write(diego.showGreeting(' from object'));

document.write(diego.showGreetingTS());
document.write(pedro.showGreetingTSS());
