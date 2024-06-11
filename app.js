import { join } from "path";

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import __dirname from "./util/path.js";
import { get404 } from "./controllers/error.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "views");

import adminRoutes from "./routes/admin.js";
// import shopRoutes from "./routes/shop.js";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("5baa2528563f16379fc8a610")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(get404);

mongoose
  .connect()
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Connected to Database");
    });
  })
  .catch((err) => {
    console.log(err);
  });
