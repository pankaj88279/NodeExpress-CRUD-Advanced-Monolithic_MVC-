const express=require('express');

const { studentController } = require('../controllers/studentCerate');

const studentRoute=express.Router();

studentRoute.get('/student',studentController)

exports.studentRoute=studentRoute