const { Schema, model } = require("mongoose");
module.exports = model(
  "antiswear",
  new Schema({
    Guild: String,
    Value: String,
    })
);
