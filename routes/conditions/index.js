const express = require('express');
const router = express.Router();

const Condition = require('../../db/models/Condition');
const Item = require('../../db/models/Item');


router.route(`/`)

  .get((req, res) => {
    return new Condition()
    .fetchAll({withRelated: ['items']} )
      .then(condition => {
        console.log('CONDITION',condition.toJSON())
        return res.json(condition.toJSON());
      })
      .catch(err => {
        console.log({ err: err.message });
        return res.json({ err: err.message });
      })
  })

  module.exports = router;
