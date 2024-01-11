const express=require("express")
const app=express()
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));



app.use(express.static("public"))



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get("/chart", function(req,res){
    res.sendFile(__dirname+'/chart.html')
})



// -----------------LISTEN------------------------
app.listen(process.env.PORT || 3000,function(){
    console.log("Listening at port 3000");
})
