const mongoose = require('mongoose');

const jobschema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    salary: String,
    description: String,
});

module.exports = mongoose.model('Job', jobschema);