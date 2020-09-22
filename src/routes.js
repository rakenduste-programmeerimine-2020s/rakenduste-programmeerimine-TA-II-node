const Router = require('koa-router')
const Joi = require('joi')
const router = new Router()
const Topic = require('./models/topic')

router.get('/topics/:id', async (context) => {
  try {
    context.body = context.params.id
    const topics = await Topic.findOne({ _id: context.body })
    context.status = 200
    context.body = topics
  } catch (e) {
    context.status = 400
    context.body = e
  }
})

router.get('/topics', async (context) => {
  const topics = await Topic.find({})

  context.status = 200
  context.body = topics
})

router.put('/topics/:id', async (context) => {
  try {
    const _id = context.params.id
    const { name, age, email } = context.request.body
    const schema = Joi.object({
      name: Joi.string().min(3).max(20),
      age: Joi.number().integer(),
      email: Joi.string().min(10).max(30)
    })
    const { error } = schema.validate({ name: name, age: age, email: email })

    if (!error) {
      await Topic.findOneAndUpdate({ _id: _id }, { name, age, email })
      context.body = 'success'
    } else {
      context.status = 400
      context.body = error
    }
  } catch (e) {
    context.status = 404
    context.body = e
  }
})

router.post('/topics', async (context) => {
  const { name, age, email } = context.request.body
  const schema = Joi.object({
    name: Joi.string().min(3).max(20),
    age: Joi.number().integer(),
    email: Joi.string().min(10).max(30)
  })

  const { error } = schema.validate({ name: name, age: age, email: email })
  if (!error) {
    const newTopic = new Topic({ name, age, email })
    const topic = await newTopic.save()
    context.status = 201
    context.body = topic
  } else {
    context.status = 400
    context.body = error
  }
})

module.exports = router
