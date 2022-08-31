const { setEngine } = require("crypto");
const express = require("express")
const hbs = require('hbs')
const path = require('path');
const PORT = 3000;
const app = express();

app.set("views", __dirname + "/views");
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.get("/works", (req, res) => res.render("works"));

app.get("/photoGallery", (req, res) => res.render("photoGallery"));



app.listen(PORT, () => {
    console.log(`Listen port: ${PORT}`);
  });
  