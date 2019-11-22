const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const keys = require('./config/keys');
const LocalStrategy = require('passport-local');
const compression = require('compression');

const PORT = process.env.PORT || 5000;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const corsOptions = {
  optionsSuccessStatus: 200
};
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(compression());
app.use(passport.initialize());
require('./services/passport')(passport);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, err => {
  if (err) {
    console.log(err);
  }
});
mongoose.set('useFindAndModify', false);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
app.use(function(req, res, next) {
  req.io = io;
  next();
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/assignment', require('./routes/assignment'));
server.listen(5000, () => console.log(`Mixing it up on port ${PORT}`));
