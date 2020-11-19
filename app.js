const express = require("express");
const morgan = require("morgan");
const { db } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
  
const app = express();

// LOGGING MIDDLEWARE
app.use(morgan("dev"));
// STATIC MIDDLEWARE
app.use(express.static(__dirname + "/public"));

// PARSING BODY
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hellowblahblahblah!");
})
const PORT = 3000;
// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
