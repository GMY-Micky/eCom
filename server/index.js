const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const PORT = "3001";

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
    const cryptedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: cryptedPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate data" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.json({ status: "error", error: "Invalid login" });
  }

  const isPassword = await bcrypt.compare(req.body.password, user.password);

  if (isPassword) {
    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      "97732444030"
    );
    return res.send({
      status: "ok",
      token: token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } else {
    return res.send({ status: "error", user: false });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
