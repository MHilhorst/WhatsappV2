const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const jwtAuth = require("express-jwt");
const Assignment = require("../models/Assignment");
const Feedback = require("../models/Feedback");
const cloudinary = require("cloudinary").v2;
const secret = keys.secretJWT;

cloudinary.config(keys.cloudinary);

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: "123" });
});

router.post("/new", jwtAuth({ secret: secret }), (req, res) => {
  const newAssignment = new Assignment({
    title: req.body.title,
    description: req.body.description,
    problem_description: req.body.problemDescription,
    programming_language: [`${req.body.programmingLanguage}`],
    file_id: req.body.fileId,
    user_id: req.user._id
  });
  newAssignment.save().then(object => {
    console.log(object.assignmentUrlId);
  });
  res.json({ test: "gg" });
});

router.get("/:id", (req, res) => {
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

module.exports = router;
