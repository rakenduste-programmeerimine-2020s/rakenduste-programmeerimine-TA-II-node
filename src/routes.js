const Router = require('koa-router')
const Joi = require('Joi')
const validate = require('koa-joi-validate')
const router = new Router()

const Topic = require('./models/topic')

const postValidator = validate({
  body: {
    name: Joi.string().required()
  }
})
router.get('/health', (context) => {
  console.log('korras')
  context.status = 200
  context.body = 'OK'
})

router.get('/topics/:id', async (context) => {
  console.log(context.route)
  context.body = context.params.id
  const topics = await Topic.findOne({ _id: context.body })

  context.status = 200
  context.body = topics
})

router.put('/topics/update/', async (ctx) => {
  console.log(ctx.request.body.name)
  await Topic.findByIdAndUpdate(
    { _id: ctx.request.body._id },
    { name: ctx.request.body.name }
  ).catch((error) => {
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

  const topic = await newTopic.save() // asünkroonne
  /* sünkroonne

            .then((topic) => {
                console.log("Andmed salvestatud")
                ctx.status = 201
                ctx.body = topic
            })
            .catch((error) => {
                console.log(error)
            })
            */
  ctx.status = 201
  ctx.body = topic
})

router.del('/topics/:id', async (ctx) => {
  ctx.body = ctx.params.id
  // let deleteTopic = new Topic({_id})
  Topic.deleteOne({ _id: ctx.body })
    .then(() => {
      console.log(ctx.body)
      console.log('Andmed kustutatud')
    })
    .catch((error) => {
      console.log(error)
      ctx.status = 404
    })
  ctx.status = 200
})

module.exports = router
