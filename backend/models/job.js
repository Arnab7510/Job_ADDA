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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobschema);