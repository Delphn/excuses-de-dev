const mongoose = require('mongoose');
const schema = mongoose.Schema

const Excuse = new schema(
  {
    http_code: { type: Number, required: true },
    tag: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Excuses', Excuse)
