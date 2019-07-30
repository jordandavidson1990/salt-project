use salt;
db.dropDatabase();

db.members.insertMany([
  {
    name:'Jordan Davidson',
    email:'jordandavidson1990@hotmail.com'
  },
  {
    name:'Gina Loughrey',
    email:'gigiloughrey@gmail.com'
  }
]
);
