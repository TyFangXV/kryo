const mongoose = require("mongoose");


const loginSchema = new mongoose.Schema({
    _id : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        require : true
    },
    money : {
        type : Number,
        required : true
    },
    level : {
        type : Number,
        required : true
    }

},{_id: false})

module.exports = mongoose.model("user", loginSchema)