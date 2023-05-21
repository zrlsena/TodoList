//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items =[]; //for collection 
const workItems = [];

app.set('view engine', 'ejs'); //Burası set olcak unutma!

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //for public folder

app.get("/", function(req, res){
    
const day = date.getDate();

    res.render("list",{listTitle: day, newListItems: items}); //list file içine kindofday değişkeni atıyorum. ve yeni liste js etiketinde olacak.

});

    app.post("/", function(req, res){

        const item = req.body.newItem;

        if(req.body.list === "Work") { //for different lists
            workItems.push(item);
            res.redirect("/work");
        } else {
            items.push(item);
            res.redirect("/");
        } 
    });

    app.get("/work", function(req,res){
        res.render("list",{listTitle:"Work List", newListItems : workItems});
    });

    app.get("/about", function(req, res){
        res.render("about");
    });


    app.listen(3000, function(){
        console.log("Server started on port 3000");
    });