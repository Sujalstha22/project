// seperate file for express connection

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

//app.use is generally used t implement middlewares

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// limit the amout of json file to get
app.use(
  express.json({
    limit: "10kb",
  })
);
//express code to get data from url query
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//to store files and folder in public folder
app.use(express.static("Public"));

//use cookie from the user using cookieParser
app.use(cookieParser());

//routes imports

import userRouter from "./routes/user.routes.js";

//routes Decleration

app.use("/api/v1/users", userRouter);

//http://localhost:8000/api/v1/users
export { app };

