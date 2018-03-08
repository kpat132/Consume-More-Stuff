const express = require(`express`);
const router = express.Router();

const User = require("../../db/models/User");
const Category = require("../../db/models/Category");
const Condition = require("../../db/models/Condition");
const Item_Status = require("../../db/models/Item_Status");


const { isAuthenticated, isAuthorized } = require('../helper')

//model
const Item = require("../../db/models/Item");

router
  .route("/:id")
  .get((req, res) => {
    let id = req.params.id;
    return new Item({ id: id })
      .fetch({
        withRelated: ["users", "categories", "conditions", "item_status"]
      })
      .then(item => {
        res.json(item);
      });
    console.log({ err: err.message });
    return res.json({ err: err.message });
  })
  .put(isAuthenticated, (req, res) => {
    isAuthorized(req.user.id, req.params.id)
    let id = req.params.id;
    let data = ({} = req.body);
    return new Item(data)
      .where({ id: id })
      .save(data, { patch: true })
      .then(updatedInfo => {
        return res.json(updatedInfo);
      })
      .catch(err => {
        res.json({ err: err.message });
      });
  });

router
  .route(`/`)
  .get((req, res) => {
    return new Item()
      .fetchAll({
        withRelated: ["users", "categories", "conditions", "item_status"]
      })
      .then(items => {
        return res.json(items.toJSON());
      })
      .catch(err => {
        console.log({ err: err.message });
        return res.json({ err: err.message });
      });
  })

  router
  .route(`/`)
  .post(isAuthenticated,(req, res) => {
    console.log(req.body);
    let data = ({
      name,
      description,
      price,
      make,
      model,
      dimensions,
      image,
      notes,
      item_status_id,
      condition_id,
      category_id
    } = req.body);
    data.item_status_id = 1;
    // return new Item(data)
    //   .save()
    //   .then(newItem => {
    //     if (newItem.id){
    //       return res.status(200).json({
    //         item: newItem1,
    //         itemAdded: true
    //       });
      //   } else {
      //     return res.status(401).json({
      //       error: 'User is not authenticated',
      //       user_Updated: false
      //     })
      //   }
      // }).catch(err => {
    
      //   return res.json({err:err.message});
      // })
    });


module.exports = router;
