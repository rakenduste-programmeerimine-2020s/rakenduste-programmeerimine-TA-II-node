const router = require('koa-router');
const Topic = require('./models/topic');

router.get('/topics', async () => {
    const topics = await Topic.find({})

    context.status = 200; 
    context.body = topics;

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