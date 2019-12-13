// REST get params
const showData = (...data) => {
	console.log(data);
};

showData('Diego', 21, 'dsalas035@gmail.com', 'Mexico');

// SPRED send params

const user = ['Diego', 21, 'dsalas035@gmail.com', 'Mexico'];
const userObj = {
	name: 'Diego',
	age: 21,
	email: 'dsalas035@gmail.com',
	country: 'Mexico',
};

const showData2 = (...data) => {
	console.log(data);
};

showData2(...user);
