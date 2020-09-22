<<<<<<< HEAD
const Koa = require('koa');
const mongoose = require('mongoose');
const router = require('./routes');


const app = new Koa();

app.use(require('koa-body')({multipart:true}))
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


app.proxy = true;
module.exports = app;
=======
const Koa = require('koa')
const mongoose = require('mongoose')
const router = require('./routes')

const app = new Koa()

app.use(require('koa-bodyparser')({ multipart: true }))
app.use(router.routes())

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

module.exports = app
>>>>>>> 69f9dbe3d1a2eb30182680b6875dbd461480577b
