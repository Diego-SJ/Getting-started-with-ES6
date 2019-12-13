class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showInfo() {
		console.log(`${this.name} is ${this.age} years old!`);
	}
}

export default Person;
