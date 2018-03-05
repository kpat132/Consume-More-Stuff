const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();

const PORT = process.env.PORT || 8080;

const usersRoute = require(`./routes/users`);
const itemsRoute = require(`./routes/items/index`);
const categoriesRoute = require(`./routes/categories/index`);
const userStatusRoute = require(`./routes/user_status/index`);
const conditionsRoute = require(`./routes/conditions/index`);
const itemStatusRoute = require(`./routes/item_Status/index`);


app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use(`/api/items`,itemsRoute);
app.use(`/api/categories`,categoriesRoute);
app.use(`/api/users`,usersRoute);
app.use(`/api/usersStatus`,userStatusRoute);
app.use(`/api/conditions`,conditionsRoute);
app.use(`/api/itemStatus`,itemStatusRoute);


app.get('/',(req,res)=> {
  res.send('smoke test');
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
