const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  db: process.env.MONGO_URI
};
