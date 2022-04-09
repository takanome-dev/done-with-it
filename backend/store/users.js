const users = [
	{
		id: 1,
		name: "Mosh",
		email: "mosh@domain.com",
		password: "12345678",
	},
	{
		id: 2,
		name: "John",
		email: "john@domain.com",
		password: "12345678",
	},
	{
		id: 3,
		name: "Takanome",
		email: "takanome@domain.com",
		password: "12345678",
	},
];

const getUsers = () => Promise.resolve(users);

const getUserById = (id) =>
	new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);
		return resolve(user);
	});

const getUserByEmail = (email) =>
	new Promise((resolve, reject) => {
		const user = users.find((user) => user.email === email);
		return resolve(user);
	});

const addUser = (user) =>
	new Promise((resolve, reject) => {
		user.id = users.length + 1;
		users.push(user);
		return resolve();
	});

module.exports = {
	getUsers,
	getUserByEmail,
	getUserById,
	addUser,
};
