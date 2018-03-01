const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.get('/',(req,res)=> {
  res.send('smoke test');
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
