const express = require(`express`);
const router = express.Router();

const User_Status = require("../../db/models/User_Status");
const User = require("../../db/models/User");

router.route("/").get((req, res) => {
  return new User_Status()
    .fetchAll({ withRelated: ["users"] })
    .then(result => {
      result = result.toJSON();
      res.json(result);
    })
    .catch(err => {
      console.log({ err: err.message });
      res.json({ err: err.message });
    });
});

module.exports = router;
