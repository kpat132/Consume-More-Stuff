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

const { isAuthenticated, isAuthorized } = require('../helper')
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

router.post(`/login`, passport.authenticate(`local`), (req, res) => {
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

router.get(`/logout`, (req, res) => {
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

router.get('/:id', isAuthenticated, (req, res) =>{
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


router.route(`/:id`)
  .put(isAuthenticated, (req, res) => {
    console.log('im here')
    isAuthorized(req.user.id, req.params.id)
    let id = req.params.id;
    let data = {} = req.body;
    return new User(data)
    .where({id:id})
    .save(data,{patch:true})
    .then(result => {
      result = result.toJSON()
      let updatedInfo = {id: id, 
        username: result.username, 
        email: result.email, 
        created_at: result.created_at, 
        updated_at: result.updated_at,
        user_status: result.user_status,
        items: result.items
      }
      if(updatedInfo.id) {
        return res.status(200).json({
          user: updatedInfo,
          user_Updated: true
        });
      } else {
        return res.status(401).json({
          error: 'User is not authenticated',
          user_Updated: false
        })
      }
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
    .fetchAll({withRelated: ['user_status','items']})
    .then(users => {
      return res.json(users.toJSON());
    })
    .catch(err => {
      console.log({err:err.message});
      return res.json({err:err.message});
    })
  })
  
//   .post((req, res) => {

//     let data = {username,email,password}= req.body;
//     data.user_status_id = 1;


//     return new User(data)
//     .save()
//     .then(newUser => {
//       return res.send(newUser);
//     })
//     .catch(err => {
//       console.log({err:err.message});
//       return res.json({err:err.message});
//     })

//   })





module.exports = router;