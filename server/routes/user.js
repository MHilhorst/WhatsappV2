const express = require('express');
const User = require('../models/User');
const router = express.Router();
const keys = require('../config/keys');
const jwtAuth = require('express-jwt');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Datauri = require('datauri');
const secret = keys.secretJWT;

cloudinary.config(keys.cloudinary);

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

const dUri = new Datauri();

const dataUri = req =>
  dUri.format(req.file.originalname.toString(), req.file.buffer);

router.get('/me', jwtAuth({ secret: secret }), (req, res) => {
  User.findById({ _id: req.user._id }, (err, doc) => {
    if (err) console.log(err);
    return res.json({
      username: doc.email,
      programming_languages: doc.programming_languages
    });
  });
});

router.post('/me', jwtAuth({ secret }), (req, res) => {
  if (req.user) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          programming_languages: req.body.programmingLanguages
        }
      },
      (err, user) => {
        if (err) console.log(err);
        console.log(user);
        return res.json({ success: 'saved' });
      }
    );
  } else {
    return res.json({ error: 'no user logged in' });
  }
});

router.post('/me/avatar', upload, (req, res) => {
  console.log(req.file);
  if (req.user) {
    const file = dataUri(req).content;
    cloudinary.uploader.upload(file, (err, url) => {
      console.log(url);
    });
  } else {
    return res.json({ error: 'no user logged in' });
  }
});
module.exports = router;
