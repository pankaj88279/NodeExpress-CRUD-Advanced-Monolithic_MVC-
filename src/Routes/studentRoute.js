const express=require('express');

const { studentController } = require('../controllers/studentControllers');

const studentRoute=express.Router();

studentRoute.get('/student',studentController)

exports.studentRoute=studentRoute