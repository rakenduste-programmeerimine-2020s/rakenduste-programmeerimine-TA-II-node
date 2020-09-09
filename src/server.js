const Koa = require('koa');
const mongoose = require('mongoose');

const router = require('./routes');


const app = new Koa();
app.use(require('koa-body')());
app.use(router.routes());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const listener = app.listen(process.env.APP_PORT || 3000, () =>
            console.log('App started on port ' + listener.address().port)
        )
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })

//    app.proxy = true;
module.exports = app;