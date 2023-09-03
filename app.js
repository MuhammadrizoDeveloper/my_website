const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes.js");
const { requireAuth, checkUser } = require("./middleware/authMiddleware.js");

const app = express();

const MONGODB_URI = process.env.MONGODB_URI

// middleware
app.use(express.static("public"));
app.use(express.json())
app.use(cookieParser())

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser)
app.get("/", (req, res) => res.render("home"));
app.get("/blog", requireAuth, (req, res) => res.render("blog"));
app.use(authRoutes)