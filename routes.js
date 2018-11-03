const router = require("express").Router();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017");

router.get("/", (req, res)=>{
    res.sendFile(__dirname+"/dist/index.html");
});

function findDocuments(db,q, callback){
    const collection = db.collection("postal");
    collection.find({$text: {'$search': q}})
                    .project({score: {$meta: 'textScore'}})
                    .sort({$meta: 'textScore'}, -1)
                    .toArray(function(err, docs){
        if(err){console.log(err)}
        console.log("Records");
        callback(docs);
    })
}

router.get("/search/:q", (req, res)=>{
    console.log(req.params);
    client.connect(function(err, client){
        if(err) return res.send(err.message);
        const db = client.db('test');
        findDocuments(db,req.params.q, function(docs){
            console.log(docs);
            return res.send(docs);
        });
    });

    
});




module.exports = router;