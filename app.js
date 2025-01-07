const express =require("express");
const bodyParser=require("body-parser");
const app=express();

app.set('view engine', 'ejs');  // Setting the view engine to ejs so as to render the template 
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var items =["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.listen(3000,function(){
console.log("Server started at port 3000");
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",addItem:workItems });
})



app.get('/', (req, res) => {

    var today =new Date();

    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day=today.toLocaleDateString("en-US",options);
    res.render('list', {listTitle: day,addItem:items});   // The render uses a key value pair for rendering the data. The key is specified in the ejs template(here list.ejs) and the value is assigned according to the logic
  });

  app.post("/", function(req,res){

    var item =req.body.todo;

    if(req.body.submit === "Work"){
      workItems.push(item);
      console.log(req.body);
      res.redirect("/work");
    }
  else{
    items.push(item);
    res.redirect("/");
  }});
    // console.log(req.body);

    app.get("/about",function(req,res){
      res.render("about");
    })