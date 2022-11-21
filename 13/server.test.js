
const supertest = require("supertest");
const req = supertest(app);

test('GET /', async () => {
	const res = await req
		.get('/')
		.expect(200)
		.expect('Content-Type', "application/json");

	expect(res.body).toEqual([
		{
			fruit: 'Apple',
			size: 'Medium',
			color: 'Red',
		},
		{
			fruit: 'Blackberry',
			size: 'Small',
			color: 'Purple',
		},
	]);
});