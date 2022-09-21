const express=require('express');
const { Teacher } = require('../../models/user');
//const{mongoose}=require('../../config/db')


const app= express();


let teacherControllers=(req,res)=>{
    console.log(req.body)
    console.log(Teacher)
   Teacher.findOne({email:req.body.email})
   .then((d)=>{
    if(d === null){
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
  }else{

    res.status(405).json({
        msg:"not found",
        
    })

}
})  
    .catch((e)=>{
        res.status(404).json({
            msg:"error",
            
        })

   }) 

    }



exports.teacherControllers=teacherControllers