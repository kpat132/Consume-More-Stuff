const express = require(`express`);
const bodyParser = require(`body-parser`);
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);
const CONFIG = require('./config/config')

const app = express();

const PORT = process.env.PORT || 8080;
const saltRounds = 11;

const usersRoute = require(`./routes/users/index`);
const itemsRoute = require(`./routes/items/index`);
const categoriesRoute = require(`./routes/categories/index`);

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use(`/api/users`,usersRoute);
app.use(`/api/items`,itemsRoute);
app.use(`/api/categories`,categoriesRoute);

app.get('/',(req,res)=> {
  res.send('smoke test');
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
