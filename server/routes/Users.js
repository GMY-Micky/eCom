const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: cryptedPassword,
    });

    await User.findOne({ email: user.email }).then(async (res) => {
      if (!res) {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          if (err) {
            console.log(err.message);
          } else {
            user.password = hash;

            await user
              .save()
              .then(() => {
                res.sendStatus(200);
              })
              .catch((err) => {
                console.log(err.message);
              });
          }
        });
      } else {
        res.sendStatus(403).send("User already exists...");
      }
    });
  } catch (err) {
    res.json({ status: "error" });
  }
});

router.post("/signin", async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((err, req, res, next) => {
      if (!res) {
        res.status(404).send("user not found");
      } else {
        bcrypt.compare(req.body.password, result.password, (err, result) => {
          if (err) {
            console.log(err.message);
          } else if (result) {
            const payload = {
              id: res.id,
              email: res.email,
            };
            jwt.sign(
              payload,
              "97732444030",
              {
                expiresIn: 36000,
              },
              (err, token) => {
                if (err) {
                  console.log(err.message);
                } else {
                  res.json({
                    status: "ok",
                    token,
                  });
                }
              }
            );
          } else {
            res.status(404).send("unauthorized access");
          }
        });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
