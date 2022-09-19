const express=require('express');
const { Teacher } = require('../../models/user');
//const{mongoose}=require('../../config/db')


const app= express();


let teacherControllers=(req,res)=>{
    console.log(req.body)
   
    const teacher = new Teacher(req.body);
    teacher.save()
    .then((d)=>{
        res.status(200).json({
        msg:"teacher created successfully",
        data:req.body
    })
})
    .catch((e)=>{

        res.status(403).json({
            msg:"teacher not created ",
            
        })
    })
        
  
    }
    



exports.teacherControllers=teacherControllers