const Router = require('koa-router');
const router = new Router();
const Topic = require('./models/topic')

router.get('/health', (context) => {
    context.status = 200;
    context.body = 'OK';
});

router.get('/topics', async (context) => {
    const topics = await Topic.find({});

    context.status = 200;
    context.body = topics

    return;
});

router.post('/topics', async (context) => {
    const { name } = context.request.body

    const newTopic = new Topic({ name })
    const topic = await newTopic.save()

    context.status = 201;
    context.body = topic;

    return;
});

module.exports = router;
