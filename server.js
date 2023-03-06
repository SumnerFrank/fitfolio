const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// // TO TEST LIVE SERVER PORT ROUTE 
// app.get("/", function (req, res) {
//     res.send("HEY TESTING SERVER");
// });

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
   // session expires in 1 hour and 30mins  (5400000 milliseconds)
   expires: 54000000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// Set handlebars Middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get("/", function (req, res) {
  res.render('homepage');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views  
// being rendered res.render() 
app.set('views', path.join(__dirname, 'views')); 

app.use(routes);
console.log('Server');


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})