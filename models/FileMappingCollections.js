const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  FileMappingName: {
    required: true,
    type: String,
  },
  AttributeList: {
    required: true,
    type: String,
  },
  CreatedBy: {
    required: true,
    type: String,
  },

  ChangedBy: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model(
  "filemappingcollection",
  FileSchema,
  "filemappingcollection"
);