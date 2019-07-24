const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const createSignupsRouter = require('./helpers/signup_router.js')
const MongoClient = require('mongodb').MongoClient;
const User = require('./models/User.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



// MongoClient.connect('mongodb://localhost:27017')
// .then((client) => {
//   const db = client.db('salt');
//   const signups = db.collection('signups')
//   const signupsRouter = createSignupsRouter(signups);
//   app.use('/api/signups', signupsRouter);
// })
// .catch(console.error);

app.use(cors());
MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('salt');
  const members = db.collection('members');
  const membersRouter = createRouter(members);
  app.use('/api/members', membersRouter);
  const signups = db.collection('signups')
  const signupsRouter = createSignupsRouter(signups);
  app.use('/api/signups', signupsRouter);
})
.catch(console.error);

app.listen(3000, function(){
  console.log(`App running on port ${this.address().port}`);
})
