const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

const members = [
  {name:'Jordan', email:'jordandavidson1990@hotmail.com'},
  {name:'Gina', email:'gigiloughrey@gmail.com'}
]

app.use(bodyParser.json());
app.use(cors());

const membersRouter = createRouter(members);
app.use('/api/members', membersRouter);

app.listen(3000, function(){
  console.log(`App running on port ${this.address().port}`);
})
