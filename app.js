import express from "express";
import Router from "./routes/index.js";
import dbmongoose from "./config/Keys.js";
import mongoose from "mongoose";

const app = express();
import "dotenv/config";

const port = process.env.PORT || 3000;
const db = dbmongoose.mongooseDB;

mongoose
  .connect(db)
  .then(() => console.log("mongooseDb Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware setup
app.use(express.static("public"));
app.get("/", Router);
app.get("/listData", Router);
app.post("/", Router);

app.listen(port, console.log(`Server Running On ${port}`));
