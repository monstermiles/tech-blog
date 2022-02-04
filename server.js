//requiring express, telling it where to find routes
const express = require('express');
const routes = require('./controllers');

//require path
const path = require('path')

//require handlebars
const exphbs = require('express-handlebars');

//require helpers 
const helpers = require('./utils/helpers');

//require sequelize 
const sequelize = require('./config/connection');


//set up express app and port
const app = express();
const PORT = process.env.PORT || 3001;


// app.use(require("./controllers"));


//require session
const session = require('express-session');
//set up sequelize with session store 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(
    session({
        secret: "Super secret secret",
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize,
        })
}));



//set up handlebars 
const hbs = exphbs.create({ helpers })
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine)

// //body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//allows express to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)


sequelize.sync({ force: false }).then(() => {  
    app.listen(PORT, () => console.log('Now listening'));
});






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


// const axios = require('axios');
//const cors = require('cors');

// app.use(
//   cors({
//     origin: "*",
//   })
// )




