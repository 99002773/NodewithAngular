var express=require('express');
var app=express();
var cors=require('cors');
app.use(cors())

app.get('/homedata',(req,res,next) =>{
    res.json([{id:"Hello nodejs"}]);
});
app.listen(3000,()=>{
console.log("server started")
})

   