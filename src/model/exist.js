const mongoose = require("mongoose");
require('mongoose-double')(mongoose)

const types = mongoose.Schema.Types;

const existSchema = new mongoose.Schema({
    _id : "loggedIn",
    loggedInUserId : {
        type : Array,
        required : true
    }
},{_id: false})

module.exports = mongoose.model("exist", existSchema)