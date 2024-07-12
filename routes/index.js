import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {

  res.sendFile("index.html", { root: "public" });
});

export default Router;
