const mongoose = require("mongoose");

const ESGSchema = new mongoose.Schema({
  no_of_decimal: {
    required: true,
    type: String,
  },
  is_hierarchy: {
    required: true,
    type: String,
  },
  is_decimals: {
    required: true,
    type: String,
  },

  zero_padding: {
    required: true,
    type: String,
  },
  allow_negative: {
    required: true,
    type: String,
  },
  is_dropdown: {
    required: true,
    type: String,
  },
  is_uppercase: {
    required: true,
    type: String,
  },
  is_file: {
    required: true,
    type: String,
  },
  is_external: {
    required: true,
    type: String,
  },
  is_sensitive: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  field_label: {
    required: true,
    type: String,
  },
  field_length: {
    required: true,
    type: String,
  },
  field_type: {
    required: true,
    type: String,
  },
  TECHNICAL_FIELD_NAME: {
    required: true,
    type: String,
  },
  createdBy: {
    required: true,
    type: String,
  },

  createdAt: {
    required: true,
    type: String,
  },
  updatedAt: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("ESG_Attributes", ESGSchema, "ESG_Attributes");