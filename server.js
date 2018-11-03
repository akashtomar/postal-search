const express = require("express");
const app = express();
const router = require("./routes");
//connnection url
const url = 'mongodb://localhost:27017';
const dbName = "myDb"
app.use("/", router);
app.use(express.static("dist"));






app.listen(3000, ()=>{
    console.log("tune into 3000");
});