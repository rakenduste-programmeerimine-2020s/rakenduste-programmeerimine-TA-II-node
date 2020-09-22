
<<<<<<< HEAD
const Router = require('koa-router');
=======
const Router = require('koa-router')
>>>>>>> 69f9dbe3d1a2eb30182680b6875dbd461480577b

const router = new Router()

const Topic = require('./models/topic')

<<<<<<< HEAD
router.get('/health', (context) => {
    console.log('korras')
    context.status = 200;
    context.body = 'OK';
});

router.get('/topics/:id', async (context) => {
    const {name} = context.body;
    const topics = await Topic.findOne({name: {name}});

    context.status = 200;
    context.body = topics

    return;
});

router.put('/topics/update', async (ctx) => {
    console.log(ctx.request.body.name);
    await Topic.findByIdAndUpdate({_id: ctx.request.body._id}, {name: ctx.request.body.name})
    .catch((error) => {
        console.log(error)
    })
})
   

router.get('/topics', async (context) => {
    const topics = await Topic.find({});

    context.status = 200;
    context.body = topics

    return;
})

router.post('/topics', async (ctx) => {
    console.log(ctx.request.body)
    const { name } = ctx.request.body
    let newTopic = new Topic({name})

    newTopic.save()
            .then(() => {
                console.log("Andmed salvestatud")
            })
            .catch((error) => {
                console.log(error)
            })
    return
})

module.exports = router;
=======
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
>>>>>>> 69f9dbe3d1a2eb30182680b6875dbd461480577b
