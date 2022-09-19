const express=require('express');
const { teacherControllers } = require('../../controllers/teachersControllers/teachersControllers');
const { authMiddleware, adminAuth } = require('../../middilewear/Authmiddilewear');


const teacherRoute=express.Router();

let adminAuth = (req,res,next)=>{
teacherRoute.post('/teacher/create',authMiddleware,adminAuth,teacherControllers)

exports.teacherRoute=teacherRoute