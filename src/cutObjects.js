const creatObject = (name, age) => {
	return {
		name,
		age,
		showInfo() {
			return `${name} is ${age} years old.`;
		},
	};
};

console.log(creatObject('Diego', 21).showInfo());
