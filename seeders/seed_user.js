const { User } = require('../models');

const userData = [
  {
    username: 'bandreae',
    firstname: 'Brandon',
    lastname: 'Andreae',
    email: 'brandonjandreae@gmail.com',
    password: 'May252021',
  },

  {
    username: 'pinthouse',
    firstname: 'Pint',
    lastname: 'HousePizza',
    email: 'pinthousepizza@test.com',
    password: 'April252021',
  },
  
  {
    username: 'ajohnson',
    firstname: 'Aly',
    lastname: 'Johnson',
    email: 'ajohnson@test.com',
    password: 'June2021',
  }
];

//const seedUser = () => User.bulkCreate(userdata);
User.remove({})
.then(() => User.collection.insertMany(userData))
.then(data => {
  console.log(data.result.n + " records inserted ");
})
.catch(err => {
  console.err(err);
})

module.exports = seedUser;