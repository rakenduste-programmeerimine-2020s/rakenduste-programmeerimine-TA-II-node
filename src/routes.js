
const Router = require('koa-router')

const router = new Router()

const Topic = require('./models/topic')

router.get('/topics/kinnitus', (context) => {    
  context.status = 200
  context.body = 'Ühendus kinnitatud'
  
});

router.get('/topics/:id', async (context) => {
  context.body = context.params.id;
  const topic = await Topic.findOne({_id: context.body});

  context.status = 200;
  context.body = 'ok'

  return;
});


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
