const databaseUser = 'bondhushototabusinessltd';
const databaseUserPassword = 'exenapQ0HL5BymlD';

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.5yy7e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});