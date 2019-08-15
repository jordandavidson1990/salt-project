const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const jwt = require('jsonwebtoken')
const MongoClient = require('mongodb').MongoClient;
const User = require('./models/User.js')
const mongoose = require('mongoose')

const secretkey = 'fdashfoiewahgiovbhafslvlaisnrwfo6657f2345834268432486324396243926429364396975dsa56fa56fa56gfa'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

mongoose.connect('mongodb://localhost:27017');

app.post('/api/signups', (req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10)
  })
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
})

app.post('/login', (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(500).json({
      title: 'server error',
      error: err
    })
    if (!user){
      return res.status(401).json({
        title: 'user not found',
        error: 'invalid credentials'
      })
    }
    // incorrect password
    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
        title: 'login failed',
        error: 'invalid credentials'
      })
    }
    // if all good create a token and send to frontend
    let token = jwt.sign({ userId: user._id }, secretkey)
    return res.status(200).json({
      title: 'login success',
      token: token
    })
  })
})

// grabbing user info
app.get('/user', (req,res,next) =>{
  let token = req.headers.token;
  jwt.verify(token, secretkey, (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unathourised'
    })
    // token is valid
    User.findOne({ _id : decoded.userId }, (err, user) => {
      if (err) return console.log(err);
      return res.status(200).json({
        title: 'user grabbed',
        user:{
          email: user.email,
           name: user.name
        }
      })
    })
  })
})

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('salt');
  const members = db.collection('members');
  const membersRouter = createRouter(members);
  app.use('/api/members', membersRouter);
})
.catch(console.error);

app.listen(3000, function(){
  console.log(`App running on port ${this.address().port}`);
})
