
const express=require('express')

const{User}=require('../models/user')

let loginController=(req,res)=>{
    
    console.log(req.body)
      
     const user = new User(req.body)
    user.save()
    .then((d)=>{
        res.status(200).json({
            msg:"login successfully",
            data:d
        })

    })
    .catch((e)=>{
        res.status(400).json({
            msg:"data not saved",
            error:e
        })

    })
        }
        
    
    
    
    


exports.loginController=loginController