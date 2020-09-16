const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
  {
    id: {},
    name: { type: String, required: true },
    age: { type: Number, required: true },
    desc: { type: String, default: 'no description' },
    viewCount: { type: Number, default: 0 }
  },
  {
    timestamps: true
  },
  { typeKey: '$type' }
)

module.exports = mongoose.model('two/Topic', TopicSchema)
