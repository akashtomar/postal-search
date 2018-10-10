const express = require("express");
const app = express();
const mongoClient = require("mongodb").MongoClient;
const assert = require('assert');
//connnection url
const url = 'mongodb://localhost:27017';
const dbName = "myDb"
const client = new mongoClient(url);
app.use(express.static("dist"));

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('indiaPost');
    // Find some documents
    
  }


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/dist/index.html");
});
app.get("/search/:q", (req, res)=>{
    console.log(req.params)
    client.connect(function(err){
        assert.equal(null, err);
        console.log("server connected");
        let db = client.db(dbName);
        let collection = db.collection("indiaPost");
        collection.find({$text:  {$search : req.params.q} },
            { score: { $meta: "textScore" } }
            ).sort({ score: { $meta: "textScore" } }).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            client.close(); // close connection after reciving docs
          });
    
    });//end of connect
});


app.listen(3000, ()=>{
    console.log("tune into 3000");
});