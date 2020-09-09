const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-body');
const app = new Koa()
const router = new Router();







//router.use(bodyParser())
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

router.get('/topics/:name', async (context) => {
    const topics = await Topic.find({name})

    context.status = 200
    context.body = topics

    return;
})

router.put('/topics/:name', async (context) => {
    const topics = await Topic.find({name})

})
router.use(bodyParser());
router.post('/topics', async (context) => {
    let name = context.request.body
    console.log(name)
    const newTopic = new Topic({name:{name}})
    //const newTopic = new topicMain({name: this.name})
    
    const topic = await newTopic.save()

    context.status = 201;
    context.body = topic;

    return;
});
app
  .use(router.routes())
  .use(router.allowedMethods());
module.exports = router;