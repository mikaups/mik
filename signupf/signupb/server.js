const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('../signupb/routes/routes')
const cors = require('cors')

dotenv.config()
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://NewUser:minimika@cluster0.rdfez.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000,() => console.log("Server is running"))