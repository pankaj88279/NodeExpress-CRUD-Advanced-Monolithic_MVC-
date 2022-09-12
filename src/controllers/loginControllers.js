
const express=require('express')

const{User}=require('../models/user')

let loginController=(req,res)=>{
    
    console.log(req.body)
    
    User.findOne({email:req.body.email})
    .then((d)=>{
        console.log(d)
        if(d ===null){
            const user = new User(req.body)
        user.save()
       .then((d)=>{
        res.status(200).json({
            msg:"login successfully",
            data:d
        })

    })
    .catch((e)=>{
        res.status(403).json({
            msg:"login unsccessful",
            error:e
        })

    })

        }else{
            res.status(404).json({
                msg:"login unsccessful",
                
            })

        }
    })
    .catch((e)=>{
        res.status(404).json({
            msg:"error"
            
        })
        
    })
    
        
        

    }

    

    
        
        
    
    
    
    


exports.loginController=loginController