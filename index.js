const express= require("express");
const app= express(); //general terms to swap express library to app variables


//basic server creation
let port=8081; //8080, 8081, 3000

//get method api creation
app.get("/dashboard", (req,res) =>{
    res.send("welcome back");
}) 


app.listen(port, ()=>{
    console.log(`server runnng on ${port}`);
})
