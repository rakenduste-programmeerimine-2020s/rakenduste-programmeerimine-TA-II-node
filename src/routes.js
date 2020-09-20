
const Router = require('koa-router')

const router = new Router()

const Topic = require('./models/topic')

router.get('/topics', async (context) => {
  const topics = await Topic.find({})

  context.status = 200
  context.body = topics
})

router.post('/topics', async (context) => {
  const { name } = context.request.body

  const newTopic = new Topic({ name })
  const topic = await newTopic.save()

  context.status = 201
  context.body = topic
})

module.exports = router
