const express = require(`express`);
const router = express.Router();

//model
// const Item = require('');

router.route('/:id')

  .get((req, res) => {

    //let id = req.params.id;
    // return new Item({ id: id })
    //   .fetch()
    //   .then(item => {
    //     res.json(item);
    //   })
    // console.log({ err: err.message });
    // return res.json({ err: err.message });

  })
  .put((req, res) => {

    // let id = req.params.id;
    // let data = {} = req.body;
    // return new Item(data)
    // .where({id:id})
    // .save(data,{patch:true})
    // .then(updatedInfo => {
    //   return res.json(updatedInfo);
    // })
    // .catch(err => {
    //   res.json({err:err.message});
    // })

  })


router.route(`/`)

  .get((req, res) => {
    // return new Item()
    //   .fetchAll()
    //   .then(items => {
    //     return res.json(items.toJSON());
    //   })
    //   .catch(err => {
    //     console.log({ err: err.message });
    //     return res.json({ err: err.message });
    //   })
  })

  .post((req, res) => {
    // let data = {} = req.body;

    // return new Item(data)
    // .save()
    // .then(newItem => {
    //   return res.send(newItem);
    // })
    // .catch(err => {
    //   console.log({err:err.message});
    //   return res.json({err:err.message});
    // })
  })













module.exports = router;