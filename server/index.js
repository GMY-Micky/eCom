const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/Users");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://GMY-Micky:AAmm66%23%23@firstone.ohxlh.mongodb.net/eCom?retryWrites=true&w=majority",
    {
      useNewURLParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("server is running..");
});
