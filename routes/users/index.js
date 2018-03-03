const express = require(`express`);
const router = express.Router();
//model
const User = require('../../db/models/User');
const user_status = require('../../db/models/User_Status');
const Item = require('../../db/models/Item');

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
    .fetchAll({withRelated: ['user_status','items']})
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
    data.user_status_id = 1;


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