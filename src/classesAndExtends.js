class User {
	constructor(name = 'no name', age, email, work) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.work = work;
	}

	showGreeting(message) {
		return `Hi! ${message} <br>`;
	}

	showGreetingTS() {
		return `Hi! ${this.name} <br>
        your email: ${this.email} <br>
        your age: ${this.age} <br><hr>`;
	}
}

class Student extends User {
	constructor(name, age, email, work, carrer = 'no carrer', garde, group) {
		super(name, age, email, work);
		this.carrer = carrer;
		this.grade = garde;
		this.group = group;
	}

	showGreetingTSS() {
		return `Hi! ${this.name} <br>
        your email: ${this.email} <br>
        your age: ${this.age} <br>
        carrer: ${this.carrer}<hr>`;
	}
}

// const diego = new User('Juan Jimenez', 21, 'dsalas035@gmail.com');

// document.write(diego.email);
// console.log(diego);

// const juan = new User(undefined, '', 'juan@gmail.com');
// document.write(juan.name);

const diego = new User(
	'Diego Salas',
	21,
	'dsalas035@gmail.com',
	'Web developer',
);

const pedro = new Student(
	'Pedro Lopez',
	31,
	'pedro@gmail.com',
	'Backe-end Developer',
	'TICS',
);

// document.write(diego.showGreeting(' from object'));

document.write(diego.showGreetingTS());
document.write(pedro.showGreetingTSS());
