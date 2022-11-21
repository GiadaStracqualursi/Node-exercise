
const express = require("express")
const app = express();
const port = process.env.PORT;

app.get("/", function (req, res){
    res.json([
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
})


app.listen(3000)
app.listen(port, () => {
	console.log(`Server's running at http://localhost:${port}`);
});