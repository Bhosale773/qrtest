var express               = require("express");
var app                   = express();

app.use(express.static(__dirname + "/public"));

app.get("/",function(req, res){
    res.render("test.ejs");
});

app.listen(process.env.PORT || 1000, function(){
    console.log("Server started...");
});