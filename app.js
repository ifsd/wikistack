const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const Sequelize = require('sequelize');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

// db.authenticate().then(() => {
//   console.log('connected to the database');
// });

const app = express();

// LOGGING MIDDLEWARE
app.use(morgan('dev'));
// STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));

// PARSING BODY
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

app.use('/users', userRouter);
app.use('/wiki', wikiRouter);

const PORT = 3000;
const init = async () => {
  await db.sync({ force: true });
  // await Sequelize.sync({ force: true });
  // LISTENING TO PORT
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

// const init = async () => {
//   await Page.sync();
//   await User.sync();
//   // make sure that you have a PORT constant
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}!`);
//   });
// }

init();
