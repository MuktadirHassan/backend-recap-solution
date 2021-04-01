const express = require("express");
const cors = require("cors");
const app = express();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database
const MongoClient = require("mongodb").MongoClient;
const uri = "db-URL-HERE";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  console.log(err);
  const collection = client.db("db").collection("test");

  // perform actions on the collection object
  client.close();
});

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/addProduct", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(5000, () => console.log("listening to port 5000"));
