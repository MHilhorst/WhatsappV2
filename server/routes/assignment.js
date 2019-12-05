const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const keys = require('../config/keys');
const multer = require('multer');
const jwtAuth = require('express-jwt');
const Assignment = require('../models/Assignment');
const User = require('../models/User');
const Feedback = require('../models/Feedback');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const secret = keys.secretJWT;

cloudinary.config(keys.cloudinary);

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },
  filename: function(req, file, callback) {
    console.log(file);
    callback(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  const fileId = req.file.filename;
  res.json({ file: fileId });
});

router.post('/new', jwtAuth({ secret }), (req, res) => {
  const data = fs.readFileSync(`./uploads/${req.body.fileId}`, 'utf8');
  console.log(data);
  const newAssignment = new Assignment({
    title: req.body.title,
    description: req.body.description,
    problem_description: req.body.problemDescription,
    programming_language: [`${req.body.programmingLanguage}`],
    file_id: req.body.fileId,
    file_data: data,
    file_name: req.body.filename,
    file_type: req.body.filetype,
    user_id: req.user._id,
    feedbackCount: 0
  });
  newAssignment.save().then(object => {
    console.log(object);
  });
  res.json({ test: 'gg' });
});

router.get('/:id', (req, res) => {
  if (req.user) {
    const { id } = req.params;
    Assignment.findOne({ assignmentUrlId: id }, (err, assignment) => {
      if (req.user._id == assignment.user_id) {
        Feedback.findOne({ assignment_id: data._id }, (err, feedbacks) => {
          const response = { feedbacks: feedbacks, assignment: assignment };
          res.json({ response });
        });
      } else {
        res.json({ data });
      }
    });
  } else {
    const { id } = req.params;
    Assignment.findOne({ assignmentUrlId: id }, (err, data) => {
      res.json({ data });
    });
  }
});

router.get('/feedback/:id', (req, res) => {
  Assignment.findOne({ assignmentUrlId: req.params.id }, (err, assignment) => {
    if (err) {
      console.log(err);
    }

    Feedback.find({ assignment_id: assignment._id }, (err, feedbacks) => {
      if (err) {
        console.log(err);
      }
      let response = [];
      feedbacks.map(feedback => {
        User.findOne({ _id: feedback.feedback_user_id }, (err, user) => {
          response.push({
            displayName: user.displayName || 'test',
            ...feedback._doc
          });
          if (response.length === feedbacks.length) {
            res.json({ data: response });
          }
        });
      });
    });
  });
});

router.post('/feedback/new', jwtAuth({ secret: secret }), (req, res) => {
  const newFeedback = new Feedback({
    assignment_id: req.body.assignment_id,
    feedback_user_id: req.user._id,
    feedback: req.body.feedback
  });
  Assignment.findOneAndUpdate(
    { _id: newFeedback.assignment_id },
    { $inc: { feedbackCount: 1 } },

    (err, doc) => {
      console.log(doc);
    }
  );
  newFeedback.save().then(response => {
    console.log(response);
    if (response) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

router.get('/user/all', jwtAuth({ secret }), (req, res) => {
  Assignment.find({ user_id: req.user._id }, (err, ass) => {
    if (err) console.log(err);
    res.json({ assignments: ass });
  });
});
module.exports = router;
