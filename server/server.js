const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(cors());
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
