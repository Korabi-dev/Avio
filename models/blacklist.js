const { Schema, model } = require("mongoose");
module.exports = model(
  "antiswear",
  new Schema({
    blacklistID: String,
    reason: String,
    })
);