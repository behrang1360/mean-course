const express = require('express');
const bodyParser = require("body-parser");
const app = express();

var news = [];

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function (req, res, next) {
   res.render("index.ejs",{items:news});
});

app.get("/news/add", function (req,res) {
    res.render("add.ejs")
});

app.post("/news/add", function (req,res) {
   news.push(req.body);
   res.redirect("/")
});

app.get("/news/detail/:id", function (req,res) {
    var item = enw
    res.render("detail.ejs",{news:item});

})

app.listen(3000);