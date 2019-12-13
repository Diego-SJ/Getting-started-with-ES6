const promise = new Promise((resolve, reject) => {
	// Success
	setTimeout(() => {
		const success = true;
		if (success) resolve('Operation succesfuly!');
		else reject('There is an error!');
	}, 4000);
});

promise.then((msg) => {
	console.log(msg);
});

promise.catch((msg) => {
	console.log(msg);
});
