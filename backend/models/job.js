const mongoose = require("mongoose");

const jobschema = new mongoose.Schema({
    title:String,
    salary:Number,
})

module.exports = mongoose.model('job',jobschema);