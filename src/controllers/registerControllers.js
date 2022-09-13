
const express=require('express');
const { User } = require("../models/user")

const bcrypt = require('bcrypt');



let registerController=(req,res)=>{

    User.findOne({email:req.body.email})
    .then((d)=>{
        console.log(d);
        if(d ===null){
         const salt = 10;
           
       const hash = bcrypt.hashSync(req.body.password_hash, salt);
       req.body.password_hash=hash;

        const user = new User(req.body)
        user.save()
        .then((d)=>{
            res.status(200).json({
                msg:"register successfully",
                data:d
            })
        })
        .catch((e)=>{
            res.status(400).json({
                msg:"not register successfully",
                error:e
            })
        })
    
        }else{
            res.status(404).json({
                msg:"email already exits",
                
            })

        }
    })
    .catch((e)=>{
        res.status(403).json({
            msg:"error"
        })
       
    })
   
      
    }
    

    
    
    
    

exports.registerController=registerController