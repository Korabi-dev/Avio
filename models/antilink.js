const { Schema, model } = require("mongoose");
module.exports = model(
  "antiinvite",
  new Schema({
    Guild: String,
    })
);
