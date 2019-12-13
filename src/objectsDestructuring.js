const user = {
	name: 'Diego',
	email: 'dsalas035@gmail.com',
	age: 21,
	country: 'Mexico',
	// job: 'Web developer',
};

const { name, email, lname = 'empty' } = user;

// console.log(job);
// console.log(lname);

const showInfo = ({ name, job = 'student' }) => {
	console.log(`${name} is ${job}`);
};

showInfo(user);
