const express=require("express"); //as we require the package "express"
const bodyParser=require("body-parser"); //as we require the package "body-parser"
const date = require(__dirname + "/js_date.js"); //go to 'js_date.js' & run the code of 'js_date.js'. All 'exports' of 'js_date.js' goes to 'date'.

//console.log(date());

const app = express(); //creating the constant 'app' by 'express()'

const items = ["Buy Food", "Cook Food", "Eat Food"]; //Array 'items' is declared & initialised with 3 values. As 'const' is used we can push another elements but we can't reassign the array like, items = ["abc"].
const workItems = []; //declared an array 'workItems'

app.set('view engine', 'ejs'); //setting 'ejs' (embedded javascript)

app.use(bodyParser.urlencoded({extended: true})); //told 'app' (server) to use 'bodyParser'

app.use(express.static("public")); //"public" is name of the folder (by rule) where we keep our static files (like 'css_todolist.css' or any image or any Javascript file).

app.get("/",function(req,res){ //creating the home route ("/") (which is port 3000) (of server)    
    //res.send("Hello"); //'get' route sends the browser the word "Hello" when the user tries to access the home route ("/").
    const day = date.getDate(); //As we have used '()' after 'date', we are calling only the functions (out of the things stored in 'date' variable); & here it is 'getDate()' function of 'js_date.js'.

    res.render("list", {listTitle: day, newListItems: items}); //'res.render' is used to send data from server to webpage ('list.ejs'). "list" is name of the file ('list.ejs') which is inside 'views' folder (by rule). 'listTitle' is used inside 'list.ejs' & 'day' is its value.
});

app.post("/", function(req, res){ //when 'post' request is received (to home route "/" of server 'app')
    //console.log(req.body);    
    const item = req.body.newItem; //'body' is used to search the body of 'post' request (not '<body>' tag of html)
    if (req.body.list === "Work") { //when 'newItem' came from "Work" list. In 'req.body', there are two parts - 'newItem' & 'list'. 'list' tells in which list 'newItem' is entered, in "Work" list ("/work") or main list ("/").
        workItems.push(item);
        res.redirect("/work"); //goes to ' app.get("/work", ...) '
    } else {
        items.push(item); //'item' is pushed to the array 'items'.
        res.redirect("/"); //redirected to home route ("/")
    }    
});

app.get("/work", function(req, res){ //creating "/work" route
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){ //creating "/about" route
    res.render("about"); //As "about" page don't take any parameter, we didn't give any parameter.
});

app.post("/work", function(req, res){ //when 'post' request is received (to "/work" route of server 'app')
    let item = req.body.newItem; //'body' is used to search the body of 'post' request (not '<body>' tag of html)
    workItems.push(item); //'item' is pushed to the array 'workItems'.
    res.redirect("/work");
});

app.listen(3000,function(){ //listening the port 3000
    console.log("Server started on port 3000"); //printed in console
});