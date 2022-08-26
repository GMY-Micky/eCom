const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://GMY-Micky:AAmm66%23%23@firstone.ohxlh.mongodb.net/eCom?retryWrites=true&w=majority",
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate data" });
  }
});

app.get("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    return res.send({ status: "ok", user: true });
  } else {
    return res.send({ status: "error", user: fasle });
  }
});

app.listen(8000, () => {
  console.log("server is running..");
});
