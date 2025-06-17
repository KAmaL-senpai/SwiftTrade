const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: String,
  qty: Number,
  price: Number,
  mode: String,
},{timestamps:true});

module.exports = { OrderSchema };
