const mongoose = require("mongoose");

//user schema
const business = mongoose.Schema({
  business_type:{
    type:String
  },
  business_category:{
    type:String
  },
  image:{
    type:Array
  },
  details:{
    type:Object
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("business", business);
