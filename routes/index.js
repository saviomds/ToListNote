import express from "express";
import User from "../models/User.js";

const router = express.Router();
router.post("/", (req, res) => {
  const { inputVal } = req.body;
  let errors = [];

  if (!inputVal || !inputVal.trim()) {
    errors.push({ msg: "Fill Fields Input" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const newUser = new User({
    inputVal,
  });

  newUser
    .save()
    .then(() => {
      console.log("List added successfully");
      res.sendFile("index.html", { root: "public" });
    })
    .catch((err) => {
      console.error("Error adding user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.get("/", (req, res) => {
  User.find().catch((err) => {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  });
});

router.get("/listData", (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
});

export default router;
