const person = ['Diego Salas', 21, 'Mexico'];

const [name, , country, work = 'without job'] = person;

const showInfo = ([name, , country, work = 'without job'] = person) => {
	console.log(`${name} lives in ${country}, and his job is ${work}`);
};

showInfo(person);
