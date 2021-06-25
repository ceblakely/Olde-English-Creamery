const express = require("express");
const app = express();
const path = require("path");
const flash = require("express-flash");
const port = 3000;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static("static"));
//app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, "/views")));

app.get("/", (req, res) => {
  res.render("home", { name: "Christina!!" });
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
