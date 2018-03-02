const express = require(`express`);
const router = express.Router();
//model
// const User = require('');

router.route(`/:id`)
.get((req,res)=> {
  // let id = req.params.id;

  // return new User({id:id})
  // .fetch()
  // .then(user => {
  //   res.json(user);
  // })
  // .catch(err => {
  //   console.log({err:err.message});
  //   return res.json({err:err.message});
  // })

})
.put((req,res)=>{
  // let id = req.params.id;
  // let data = {} = req.body;
  // return new User(data)
  // .where({id:id})
  // .save(data,{patch:true})
  // .then(updatedInfo => {
  //   return res.json(updatedInfo);
  // })
  // .catch(err => {
  //   res.json({err:err.message});
  // })
})

.delete((req,res)=>{
  // let id = req.params.id;
  // return new User({id:id})
  // .destroy()
  // .then(result => {
  //   console.log('USER DELETED');
  // })
  // .catch(err => {
  //   console.log({err:err.message});
  //   return res.json({err:err.message});
  // })

})

router.route(`/`)
.get((req,res)=>{

  // return new User()
  // .fetchAll()
  // .then(users => {
  //   return res.json(users.toJSON());
  // })
  // .catch(err => {
  //   console.log({err:err.message});
  //   return res.json({err:err.message});
  // })

})
.post((req,res)=>{

  // let data = {}= req.body;

  // return new User(data)
  // .save()
  // .then(newUser => {
  //   return res.send(newUser);
  // })
  // .catch(err => {
  //   console.log({err:err.message});
  //   return res.json({err:err.message});
  // })

})





module.exports = router;