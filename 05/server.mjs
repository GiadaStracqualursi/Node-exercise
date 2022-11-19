import { createServer } from "node:http";

const server = createServer((request, response)=>{
    console.log("Request recived");

    response.statusCode= 200;

    response.setHeader("Content-Type", "text/html");

    response.end("<html><body><div><h3> Hello, my name is Giada </h3></div></body></html>")
})

server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
});