const app= require("./server")
const supertest = require("supertest");
const req = supertest(app);

const res = req.get("/").expect(200).expect('Content-Type', "application/json; charset=utf-8").expect([
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
]).then(()=>{
	console.log("ok")
}).catch((err)=>{
	console.error(err)
})


