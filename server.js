const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const hbs = exphbs.create({})




const app = express();
const PORT = process.env.PORT || 3001;



app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./controllers"));


app.listen(PORT, () => console.log('Now listening'));




const routes = require('./controllers');

const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

sequelize.sync({ force: false }).then(() => {  
});
// const session = require('express-session');
// const handlebars = require('handlebars')
// const axios = require('axios');
//const cors = require('cors');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// app.use(
//   cors({
//     origin: "*",
//   })
// )

// const hbs = exphbs.create({ helpers })


// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));