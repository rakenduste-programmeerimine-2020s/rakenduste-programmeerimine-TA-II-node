
const Router = require('koa-router');

const router = new Router()

const Topic = require('./models/topic')

router.get('/health', (context) => {
    console.log('korras')
    context.status = 200;
    context.body = 'OK';
});

router.get('/topics/:id', async (context) => {
    //const {name} = context.body;
    context.body=context.params.id;
    const topics = await Topic.findOne({_id: context.body});

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

router.post('/topics', async (context) => {
    const { name } = context.request.body

    const newTopic = new Topic({ name })
    const topic = await newTopic.save()

    context.status = 201;
    context.body = topic;

    return;
});

module.exports = router;