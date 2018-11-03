# Postal Search
Implementation of text search using textIndex of MongoDB.
Creating SPA in ReactJS

## Prerequisites

Assuming you have MongoDB and Node.js installed
Download your CSV file and import into MongoDB using following command(assuming your MongoDB server is alreadly running)

## Installation
```
mongoimport -d test -c yourCollectionName --file "path/to/file" --type csv --headerline
```

Run following commands to create textIndex in MongoDB
```
db.yourCollectionName.createIndex(
   {
     field1: "text",
     field2: "text"
   }
)
```

To get node_modules run:
```
cd postal-search
npm install
```
To build App run:
```
npm run-script dev
```
To start App run:
```
npm start
```
