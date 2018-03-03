const express = require(`express`);
const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);
const CONFIG = require('../../config/config')
//model
const saltRounds = 11;

const User = require('../../db/models/User');
const user_status = require('../../db/models/User_Status');
const Item = require('../../db/models/Item');

router.use(session({
  store: new Redis(),
  secret: CONFIG.passport.SECRET,
  resave: false,
  saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serializing');
  console.log(user)
  return done(null, {
    id: user.id, 
    username: user.username
  });
})

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  new User ({id: user.id}).fetch()
    .then(user => {
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
          if (res) { return done(null, user)}
          else {
            return done(null, false, {message: 'bad username or password'})
          }
        });
      }
    })
    .catch(err => { console.log('error:', err)});
}));


router.post(`/register`, (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) { console.log(err)}
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if(err) { console.log(err)}
      new User ({
        username: req.body.username,
        password: hash,
        email: req.body.email
      })
      .save()
      .then( (user) => {
        user = user.toJSON()
        console.log(user)
       // need to figure out how to tell front end to redirect to login page if successful
      })
    })
  })
})

router.post(`/login`, passport.authenticate(`local`), (req, res) => {
  let id = req.user.id
  // need to figure out how to tell front end to redirect to user's home page if succesfull
})




router.route(`/:id`)
  .get((req, res) => {
    let id = req.params.id;
    return new User({id:id})
    .fetch({withRelated: ['user_status','items']})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log({err:err.message});
      return res.json({err:err.message});
    })

  })
  .put((req, res) => {
    let id = req.params.id;
    let data = {} = req.body;
    return new User(data)
    .where({id:id})
    .save(data,{patch:true})
    .then(updatedInfo => {
      return res.json(updatedInfo);
    })
    .catch(err => {
      res.json({err:err.message});
    })
  })
  
  // .delete((req, res) => {
  //   let id = req.params.id;
  //   return new User({id:id})
  //   .destroy()
  //   .then(result => {
  //     console.log('USER DELETED');
  //   })
  //   .catch(err => {
  //     console.log({err:err.message});
  //     return res.json({err:err.message});
  //   })

  // })


router.route(`/`)
  .get((req, res) => {

    return new User()
    .fetchAll()
    .then(users => {
      return res.json(users.toJSON());
    })
    .catch(err => {
      console.log({err:err.message});
      return res.json({err:err.message});
    })

  })
  
  .post((req, res) => {

    let data = {username,email,password}= req.body;

    return new User(data)
    .save()
    .then(newUser => {
      return res.send(newUser);
    })
    .catch(err => {
      console.log({err:err.message});
      return res.json({err:err.message});
    })

  })





module.exports = router;