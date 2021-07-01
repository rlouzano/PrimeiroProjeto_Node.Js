require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Pronto')
    }).catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const meuMiddleware = require('./src/middleware/middleware');
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')
app.use(routes);
app.use(meuMiddleware);



const sessionOptions = session({
    secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
  });
app.use(sessionOptions)
app.use(flash());


app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log("Acessando http://localhost:3000")
    });
})



