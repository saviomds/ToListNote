import express from "express";
import Router from "./routes/index.js";
const app = express();
import "dotenv/config";

const port = process.env.PORT || 3000;
// Middleware setup
app.use(express.static("public"));
app.get("/", Router);

app.listen(port, console.log(`Server Running On ${port}`));
