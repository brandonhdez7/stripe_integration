var express = require('express');
var router = express.Router();
var users = express.Router()
var cors = require('cors');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res) => {
  const today = new Date();
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if(!user){
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash
        User.create(userData)
        .then(user => {
          res.json({status: user.email + ' registered'})
        })
        .catch(err => {
          res.send('error: ' + err)
        })
      })
    }else{
      res.json({error: "User already exists"})
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})


users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
    }else{
      res.status(400).json({error: "user does not exist"})
    }
  })
  .catch(err => {
    res.status(400).json({error: err})
  })
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = users;
