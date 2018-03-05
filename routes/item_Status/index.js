const express = require('express');
const router = express.Router();

const Item_Status = require('../../db/models/Item_Status');
const Item = require('../../db/models/Item');

router.route('/:id')

.put((req, res) => {

  let id = req.params.id;
  let data = {} = req.body;
  return new Item_Status(data)
  .where({id:id})
  .save(data,{patch:true})
  .then(updatedInfo => {
    return res.json(updatedInfo);
  })
  .catch(err => {
    res.json({err:err.message});
  })
})



router.route(`/`)

  .get((req, res) => {
    return new Item_Status()
    .fetchAll({withRelated: ['items']} )
      .then(result => {
      
        return res.json(result.toJSON());
      })
      .catch(err => {
        console.log({ err: err.message });
        return res.json({ err: err.message });
      })
  })

  module.exports = router;
