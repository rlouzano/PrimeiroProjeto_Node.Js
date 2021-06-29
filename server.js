const express = require('express');
const app = express();
const routes = require('./routes') 
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')
app.use(routes);
app.use(meuMiddleware);
app.listen(3000, () => {
    console.log("Acessando http://localhost:3000")
});


