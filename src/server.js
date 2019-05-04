const express = require("express");
require('.dotenv').config();
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./src/routes');
const mongoose = require ('mongoose');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here
require('./src/routes/api-routes')(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



//mongoose
const mongURL = process.env.PROD_MONGODB || 'mongodb://loclahost:27017/googlebooks'
mongoose.connect(mongURL, {useNewUrlParser: true})
.then(()=> {
  console.log("Ya got Mongoose connected");
});
//server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
