const mongoose = require("mongoose");
require('mongoose-double')(mongoose)

const types = mongoose.Schema.Types;

const loginSchema = new mongoose.Schema({
    _id : {
        type : Number,
        required : true,
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
        type : String,
        required : true
    },
    message : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    property : {
        type : Object,
        required : true
    }

},{_id: false})

module.exports = mongoose.model("user", loginSchema)