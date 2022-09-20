const express=require('express');
const {Student,User} = require('../models/user');
const{mongoose}=require('../config/db')

    let studentController=(req,res)=>{
   

    
        const studentobject = new Student(req.body);
        studentobject.save()
         .then((d)=>{
             res.status(200).json({
                 msg:"saved",
                  data:d
             })
         })
         .catch((e)=>{
             res.status(400).json({
                 msg:"unsaved",
                 error:e  
         })
        
    
    })
} 

exports.studentController=studentController