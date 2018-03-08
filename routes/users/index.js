const express = require(`express`);
const { isAuthenticated, isAuthorized } = require('../helper')
const router = express.Router();



const User = require('../../db/models/User');
const user_status = require('../../db/models/User_Status');
const Item = require('../../db/models/Item');



router.route(`/:id`)
  .put(isAuthenticated, (req, res) => {
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