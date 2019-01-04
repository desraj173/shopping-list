const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");

const config = require("./config/keys");
const items = require("./routes/api/items");
const user = require("./routes/users");


const app = express();

app.use(bodyParser.json());



const db = config.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Mongodb {} connected`))
  .catch(err => console.log(`db error`, err)
  );



app.use(morgan('dev'));
app.use('/api/items', items);
app.use('/users', user);



app.get("/", (req, res) => {
  res.send("Welcome TO Landing Page");
});


app.use((req, res, next) => {
  res.status(404).json({ messsage: " The Page You Are Requested Is Not Found" });
});






const port = config.PORT;
app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});