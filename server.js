const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("dist"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/dist/index.html");
});
app.get("/search/:q", (req, res)=>{
    console.log(req.params)
    res.json({
        name: "akash",
        role: "developer"
    });
});


app.listen(3000, ()=>{
    console.log("tune into 3000");
});