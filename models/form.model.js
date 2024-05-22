const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  elements: {
    type: Array,
    required: true,
  },
  submittedData: {
    type: Object,
    default: {},
  },
});

module.exports = mongoose.model("Form", formSchema);