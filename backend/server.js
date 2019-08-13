const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// DB Connect
require('./config/dbconnect');

// Mongoose Config
require('./config/mongoose');

// Each request config
app.use(require('./config/forEachRequest.js'));

// Routes
app.use('/info', (req, res) => res.send('Keep Pals App API'));
app.use('/api/user', require('./routes/user'));
app.use('/api/friend', require('./routes/friend'));

const port = process.env.PORT || 4920;

app.listen(port, () => console.log(`Server started on port ${port}`));
