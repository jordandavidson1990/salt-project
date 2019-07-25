const express = require('express')
const ObjectID = require('mongodb').ObjectID;
const User = require('../models/User.js')
const bcrypt = require('bcrypt');


const createSignupsRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.post('/', (req, res, next) => {
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, 10)
    })
    // collection
    // .insertOne(newUser)
    // .then((result) => {
    //   res.json(result.ops[0])
    // })
    newUser.save(err => {
      if (err) {
        return res.status(400).json({
          title: 'error',
          error: 'email in use'
        })
      }
      return res.status(200).json({
        title: 'signup success'
      })
    })
    return router;
  }
// }
module.exports = createSignupsRouter;
