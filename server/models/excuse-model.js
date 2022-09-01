const mongoose = require('mongoose');
const schema = mongoose.Schema

const excuseSchema = new schema(
  {
    http_code: { type: Number, required: true },
    tag: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)
  