const User = require('../models/User');
const {Strategy, ExtractJwt} = require('passport-jwt');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const secret = process.env.SECRET || keys.secretJWT;


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

module.exports = passport => {
    passport.use(
        new Strategy(opts, (payload, done) => {
             User.findById(payload._id)
                 .then(user => {
                     if(user){
                       return done(null, {
                           _id: user._id,
                           name: user.name,
                           email: user.email,
                       });
                     }
                     return done(null, false);
                  }).catch(err => console.error(err));
              })
           )
     };
