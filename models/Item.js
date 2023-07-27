const mongoose = require("mongoose");

const { Schema } = mongoose;

const Cartitemschema = new Schema({
  CategoryName: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  option: {
      type: Object,
      required: true,
  },
});

module.exports = mongoose.model("cartitem", Cartitemschema);
