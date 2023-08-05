const mongoose = require("mongoose");

const { Schema } = mongoose;
const Orderschema = new Schema({
  Name: { type: String, required: true },
  Img: { type: String, required: true },
  Size: { type: String, required: true },
  Qty: { type: String, required: true },
  Price: { type: String, required: true },
});
const Myorder = mongoose.model("myorder", Orderschema);
module.exports = Myorder;
