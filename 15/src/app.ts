// import express, { response } from "express";
// import "express-async-errors";
// import { prisma, PrismaClient } from "@prisma/client";

// const app = express();

// // const Prisma = new PrismaClient();

// app.get("/planets", async(request, response) => {
//    const planets = await prisma.planet.findMany();
//    response.json(planets);
// });

// export default app;


// --------------------------------------


import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (request, response) => {
  response.json("wella!");
});

export default app;
