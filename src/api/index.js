export async function getProducts () {
	const response = await fetch('https://dummyjson.com/products?delay=1000');
	const json = await response.json();
	return json.products;
}

export async function getProductById (id) {
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	const json = await response.json();
	return json;
}

let accessToken = '';
let refreshToken = '';

export async function authenticate (username, password) {
	const response = await fetch('https://dummyjson.com/auth/login', {
		headers: {'Content-Type': 'application/json'},
		method: 'POST',
		body: JSON.stringify({username, password})
	});
	const json = await response.json();

	console.log(json);

	accessToken = json.accessToken;
	refreshToken = json.refreshToken;

	return json;
}

//export class NotAuthentincatedError extends Error {
//	constructor(message: string) {
//		super(message);
//		this.name = "NotAuthentincatedError";
//	}
//}

//export async function getMe (fetch: Function): Promise<Me> {

//	console.log(accessToken, refreshToken);

//	const response = await fetch('https://dummyjson.com/auth/me', {
//		method: 'GET',
//		headers: {'Authorization': `Bearer ${accessToken}`},
//	});

//	if (!response.ok) {
//		throw new NotAuthentincatedError('Not authorized');
//	}

//	const json = await response.json();
//	return json;
//}