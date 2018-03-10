const express = require(`express`);
const bodyParser = require(`body-parser`);
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);
const CONFIG = require('./config/config')


const User = require('./db/models/User');
const user_status = require('./db/models/User_Status');
const Item = require('./db/models/Item');

const app = express();
const saltRounds = 11;
const PORT = process.env.PORT || 8080;

const { isAuthenticated, isAuthorized } = require('./routes/helper')
const usersRoute = require(`./routes/users`);
const itemsRoute = require(`./routes/items/index`);
const categoriesRoute = require(`./routes/categories/index`);
const userStatusRoute = require(`./routes/user_status/index`);
const conditionsRoute = require(`./routes/conditions/index`);
const itemStatusRoute = require(`./routes/item_Status/index`);
app.use(express.static(`public`))


app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use(session({
  store: new Redis(),
  secret: CONFIG.passport.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serialize')
  return done(null, {
    id: user.id, 
    username: user.username
  });
})

passport.deserializeUser((user, done) => {
  console.log('deserialize')
  new User ({id: user.id}).fetch()
    .then(user => {
      console.log('user', user)
      user = user.toJSON();
      return done(null, {
        id: user.id,  
        username: user.username
      });
    });
  });

passport.use(new LocalStrategy(function(username, password, done){
  return new User ({username:username}).fetch()
    .then(user => {
      user = user.toJSON();
      if (user === null) {
        return done(null, false, {message: 'bad username or password'});
      }
      else {
       bcrypt.compare(password, user.password)
        .then(res => {
          if (res) { 
            return done(null, user)}
          
          else {
            return done(null, false, {message: 'bad username or password'})
          }
        });
      }
    })
    .catch(err => { console.log('error:', err)});
}));

app.get('/api/users/:id', isAuthenticated, (req, res) =>{
  isAuthorized(req.user.id, req.params.id)
  return new User ()
  .where({id: req.params.id})
  .fetch({withRelated: ['user_status','items']})
  .then(result => {
    result = result.toJSON()
    let data = {id: result.id, 
      username: result.username, 
      email: result.email, 
      created_at: result.created_at, 
      updated_at: result.updated_at,
      user_status: result.user_status,
      items: result.items
    }
    if(result.id) {
      return res.status(200).json({
        user: data,
        authenticated: true
      });
    } else {
      return res.status(401).json({
        error: 'User is not authenticated',
        authenticated: false
      })
    }
  })
})
app.post(`/api/login`, passport.authenticate(`local`), (req, res) => {
  console.log(req.header)
  if(req.user) {
    return res.status(200).json({
      user: req.user.id,
      authenticated: true
    });
  } else {
    return res.status(401).json({
      error: 'User is not authenticated',
      authenticated: false
    });
  }
})

app.get(`/api/logout`, (req, res) => {
  req.logout();
  if(!req.user) {
    return res.status(200).json({
      logout: true
    });
  } else {
    return res.status(401).json({
      error: 'User is still logged in',
      logout: false
    })
  }
})

app.post(`/api/register`, (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) { console.log(err)}
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if(err) { console.log(err)}
      new User ({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        user_status_id:1
      })
      .save()
      .then( (user) => {
        user = user.toJSON()
        return res.status(200).json({
          message: 'user registered'
        })
      })
      .catch(err => {
        return res.status(401).json({
          error: 'Shit did not work'
        })
      })
    })
  })
})


app.use(`/api/items`,itemsRoute);
app.use(`/api/categories`,categoriesRoute);
app.use(`/api/users`,usersRoute);
app.use(`/api/usersStatus`,userStatusRoute);
app.use(`/api/conditions`,conditionsRoute);
app.use(`/api/itemStatus`,itemStatusRoute);


app.get('/*', (req, res)=>{
  let options = {
    root: __dirname + '/public'
  };
  res.sendFile('index.html', options);
})


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
