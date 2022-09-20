const express=require('express');
const { teacherControllers } = require('../../controllers/teachersControllers/teachersControllers');
const { authMiddleware, adminAuth } = require('../../middilewear/Authmiddilewear');


const teacherRoute=express.Router();

teacherRoute.post('/teacher/created',authMiddleware,adminAuth,teacherControllers)

exports.teacherRoute=teacherRoute