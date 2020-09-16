const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
    {
        id: {},
        name: { type: String, required: true },
        viewCount: { type: Number, default: 0 }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Topics', TopicSchema)