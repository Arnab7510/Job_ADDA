const mongoose = require("mongoose");

const jobschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image:String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobschema);