
const Router = require('koa-router')

const router = new Router()

const Topic = require('./models/topic')

router.get('/health', (context) => {
  console.log('korras')
  context.status = 200
  context.body = 'OK'
})

router.get('/topics/:id', async (context) => {
  const { name } = context.body
  const topics = await Topic.findOne({ name: { name } })

  context.status = 200
  context.body = topics
})

router.put('/topics/update', async (ctx) => {
  console.log(ctx.request.body.name)
  await Topic.findByIdAndUpdate({ _id: ctx.request.body._id }, { name: ctx.request.body.name })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/topics', async (context) => {
  const topics = await Topic.find({})

  context.status = 200
  context.body = topics
})

router.post('/topics', async (ctx) => {
  console.log(ctx.request.body)
  const { name } = ctx.request.body
  const newTopic = new Topic({ name })

  newTopic.save()
    .then(() => {
      console.log('Andmed salvestatud')
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router
