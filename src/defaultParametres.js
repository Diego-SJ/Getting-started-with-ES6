function userRegister(
	name = 'no specify',
	country = 'mexico',
	email = 'is empty',
	age = 'is empty',
) {
	return `Name: ${name}, country: ${country}, email: ${email}, age: ${age}`;
}

console.log(userRegister('diego', undefined, 'dsalas035@gmail.com'));
