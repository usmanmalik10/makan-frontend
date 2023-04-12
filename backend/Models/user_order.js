const mongoose = require("mongoose");

//user_order schema
const user_order = mongoose.Schema({
  status:{
    type:Boolean
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("user_order", business);
