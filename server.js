const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config/keys");
const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());



const db = config.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`database connected`))
  .catch(err => console.log(`database error`, err)
  );

app.use('/api/items', items);



app.get("/", (req, res) => {
  res.send("Welcome TO Landing Page");
});






const port = config.PORT;
app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});