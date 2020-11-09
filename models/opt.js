const { Schema, model } = require("mongoose");
module.exports = model(
  "optout",
  new Schema({
    userID: String,
    })
);
