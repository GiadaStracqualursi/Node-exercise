// import * as express from 'express';
// import "dotenv/config";
// import app from "./app";


// const port = process.env.PORT;


// app.listen(port, () => {
// 	console.log(`Server's running at http://localhost:${port}`);
// });
// module.exports = app;

// ---------------------------------------------

import "dotenv/config";
import app from "./app";

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running at port: http://localhost:3000");
});