const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

//configure our project to access config values from this location
dotenv.config({ path: "./config/config.env" });

//initialize our app with express
const app = express();

//use the morgan logger ONLY if we are running this project in dev
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});
