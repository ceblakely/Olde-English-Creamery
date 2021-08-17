const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/menu", (req, res) => {
  res.render("menu");
});
app.get("/reservation", (req, res) => {
  res.render("reservation");
});
app.listen(port);
