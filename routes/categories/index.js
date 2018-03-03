const express = require(`express`);
const router = express.Router();
const Category = require("../../db/models/Category");
const Item = require("../../db/models/Item");

router.route("/:id").get((req, res) => {
  let id = req.params.id;

  return new Category({ id: id })
    .fetch({ withRelated: ["items"] })
    .then(result => {
      console.log(result);
      // console.log('json: ',result.toJSON() )
      result = result.toJSON();
      res.json(result);
    })
    .catch(err => {
      console.log({ err: err.message });
      res.json({ err: err.message });
    });
});

router.route("/").get((req, res) => {});

module.exports = router;
