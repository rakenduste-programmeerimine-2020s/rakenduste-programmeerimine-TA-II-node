const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
    {
        name: { type: String, required: true },
        viewCount: { type: Number, default: 0 }
    },
    {
        timestamps: true
    }
)
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('two/Topic', TopicSchema)