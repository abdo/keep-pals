const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Mongoose Config
require('./config/mongoose');

// Passport Config
// app.use(passport.initialize());
// require('./config/passport')(passport);

// Cors Middleware
app.use(cors());

// Routes
app.use('/info', (req, res) => res.send('Keep Pals App API'));
// app.use('/api/user', require('./routes/user'));
// app.use('/api/dc', require('./routes/dc'));

const port = process.env.PORT || 4920;

app.listen(port, () => console.log(`Server started on port ${port}`));
