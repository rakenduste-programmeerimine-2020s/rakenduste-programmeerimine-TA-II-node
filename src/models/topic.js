const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
  {
    name: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    age: { type: Number },
    email: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('two/Topic', TopicSchema)
