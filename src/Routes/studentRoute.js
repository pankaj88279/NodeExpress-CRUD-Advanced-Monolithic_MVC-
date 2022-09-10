const express=require('express');

const { studentController } = require('../controllers/studentControllers');

const studentRoute=express.Router();

studentRoute.post('/student',studentController)

exports.studentRoute=studentRoute