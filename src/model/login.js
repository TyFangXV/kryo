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
        type : types.Decimal128,
        required : true
    },
    incrementValue : {
        type : types.Decimal128,
        required : true
    },
    property : {
        type : Object
    }

},{_id: false})

module.exports = mongoose.model("user", loginSchema)