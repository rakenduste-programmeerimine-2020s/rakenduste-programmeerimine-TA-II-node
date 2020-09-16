const Router = require('koa-router')
const topicVal = require('./validate')
const router = new Router()

const Topic = require('./models/topic')

router.get('/health', (ctx) => {
  console.log('korras')
  ctx.status = 200
  ctx.body = 'OK'
})

router.get('/topics', async (ctx) => {
  const topics = await Topic.find({})
    .then(() => {
      ctx.status = 200
      ctx.body = topics
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = error
    })
})

router.get('/topics/:id', async (ctx) => {
  console.log(ctx.route)
  ctx.body = ctx.params.id
  const topics = await Topic.findOne({ _id: ctx.body })
    .then(() => {
      ctx.status = 200
      ctx.body = topics
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = error
    })
})

router.put('/topics/:id', async (ctx) => {
  console.log(ctx.request.body.name)

  const { error } = await topicVal.validate(ctx.request.body)
  if (error) {
    console.log(error)
    ctx.status = 400
    const { message } = error
    ctx.body = message
    return
  }

  await Topic.update({ _id: ctx.request.params.id }, ctx.request.body)
    .then(() => {
      ctx.status = 201
      ctx.body = 'Update successful'
    })
    .catch((error) => {
      console.log(error)
      ctx.body = error
      ctx.status = 400
    })
})

router.post('/topics', async (ctx) => {
  console.log(ctx.request.body)

  const { error } = await topicVal.validate(ctx.request.body)
  if (error) {
    console.log(error)
    ctx.status = 400
    const { message } = error
    ctx.body = message
    return
  }

  const newTopic = new Topic(ctx.request.body)
  await newTopic.save() // asünkroonne
    .then(() => {
      ctx.status = 201
      ctx.body = 'Data posted'
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = error
    })
})

router.del('/topics/:id', async (ctx) => {
  ctx.body = ctx.params.id

  await Topic.deleteOne({ _id: ctx.body })
    .then(() => {
      ctx.status = 200
      ctx.body = 'Data deleted'
    })
    .catch((error) => {
      console.log(error)
      ctx.body = error
      ctx.status = 404
    })
  ctx.body = 'Data deleted'
  ctx.status = 200
})

module.exports = router
