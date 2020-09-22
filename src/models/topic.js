const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
<<<<<<< HEAD
    {
        id: {},
        name: {type: String, required: true},
        viewCount: {type: Number, default: 0 }
    },
    {
        timestamps: true
    },
    { typeKey: '$type' }
)

module.exports = mongoose.model('two/Topic', TopicSchema)
=======
  {
    id: {},
    name: { type: String, required: true },
    viewCount: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Topic', TopicSchema)
>>>>>>> 69f9dbe3d1a2eb30182680b6875dbd461480577b
