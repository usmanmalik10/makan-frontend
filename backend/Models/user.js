const mongoose = require('mongoose');

//user schema
const userSchema = mongoose.Schema({
    username:
    {
        type: String
    },
    email:
    {
        type: String
    },
    password:
    {
        type: String
    },
    role:{
        type: String
    },
    address:{
        type:String
    },
    profile_image:{
        type:String
    },
    otp:{
        type:String
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    },
});
//user Model
module.exports = mongoose.model('users', userSchema);