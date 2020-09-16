const Joi = require('joi')

const topicVal = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  age: Joi.number()
    .min(1)
    .max(130)
    .required(),
  desc: Joi.string()
    .min(0)
    .max(150),
  viewCount: Joi.number()
})

module.exports = topicVal
