const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const keys = require('../config/keys');
const multer = require('multer');
const jwtAuth = require('express-jwt');
const Assignment = require('../models/Assignment');
const cloudinary = require('cloudinary').v2;
const secret = keys.secretJWT;

cloudinary.config(keys.cloudinary);

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: '123' });
});

router.post('/new', jwtAuth({ secret: secret }), (req, res) => {
  const newAssignment = new Assignment({
    title: req.body.title,
    description: req.body.description,
    problem_description: req.body.problemDescription,
    programming_language: [`${req.body.programmingLanguage}`],
    file_id: req.body.fileId
  });
  newAssignment.save().then(object => {
    console.log(object);
  });
  res.json({ test: 'gg' });
});

module.exports = router;
