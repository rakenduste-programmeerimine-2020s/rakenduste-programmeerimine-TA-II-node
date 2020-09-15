const Router = require('koa-router');
const context = require('koa/lib/context');
const router = new Router();
const Topic = require('./models/topic');




router.get('/topics', async (context) => {
    const topics = await Topic.find({});
    
    context.status = 200;
    context.body = topics

    return;
});

router.get('/topics/:id', async (context) => {
    context.body = context.params.id;
    const topics = await Topic.findOne({_id: context.body});
    
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

router.put('/topics/:id', async (context) => {
    const id = context.params.id;
    await Topic.findOneAndUpdate({_id: id}, {name: context.request.body.name})
    .catch((error) => {
        console.log(error);
    })
});

module.exports = router;