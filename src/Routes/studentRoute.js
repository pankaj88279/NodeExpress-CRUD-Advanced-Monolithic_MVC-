const express=require('express');

const { studentController } = require('../controllers/studentControllers');
const { authMiddleware, adminTeacherAuth } = require('../middilewear/Authmiddilewear');

const studentRoute=express.Router();

studentRoute.post('/student/created',authMiddleware,adminTeacherAuth,studentController)

exports.studentRoute=studentRoute