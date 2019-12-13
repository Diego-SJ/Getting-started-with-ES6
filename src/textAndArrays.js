const str = 'Hello world!';

console.log(str, 'start wiith a:', str.toLowerCase().startsWith('h'));

console.log(str, 'end with !:', str.toLowerCase().endsWith('!'));

console.log(`${str} includes 'el'.`, str.includes('el'));

const friends = ['Diego', 'Juan', 'Bryan', 'Yagel'];

console.log(`the array firens includes juan`, friends.includes('Juan'));

console.log(
	friends.find((friend) => {
		return friend === 'Juan' ? 'exist this friend' : `doesn't exist this friend`;
	}),
);

console.log(
	friends.findIndex((friend) => {
		return friend === 'Bryan';
	}),
);
