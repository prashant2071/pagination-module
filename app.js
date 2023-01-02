const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const users = require("./users");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/pagination")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.error("failed to connect to database", err));

const db = mongoose.connection;

db.once("open", async () => {
  if ((await users.count()) > 0) return;
  console.log('hello you all after')
  Promise.all([
    users.create({ name: "user 1" }),
    users.create({ name: "user 2" }),
    users.create({ name: "user 3" }),
    users.create({ name: "user 4" }),
    users.create({ name: "user 5" }),
    users.create({ name: "user 6" }),
    users.create({ name: "user 7" }),
    users.create({ name: "user 8" }),
    users.create({ name: "user 9" }),
    users.create({ name: "user 10" }),
    users.create({ name: "user 11" }),
    users.create({ name: "user 12" }),
  ]).then(() => console.log("Added users"));
});
app.use("/users", usersRoute);
app.use("/products", productRoute);

app.listen(8080, (err) => {
  if (err) {
    console.log("server connection failed");
  } else {
    console.log("server connected successfully");
  }
});
