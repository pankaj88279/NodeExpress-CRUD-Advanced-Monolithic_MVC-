
const express=require('express')

const{User}=require('../models/user')

const bcrypt = require('bcrypt');
let loginController=(req,res)=>{
    
    console.log(req.body)
    
    User.findOne({email:req.body.email})
    .then((d)=>{
        console.log(d)
        if(d ===null){
            const user = new User(req.body)
        user.save()
       .then((d)=>{
        res.status(403).json({
            msg:"invalid",
            data:req.body
        })

    })
    .catch((e)=>{
        res.status(200).json({
            msg:"error",
            error:e
        })

    })

        }else{
            console.log("d",d.password_hash)
            if(bcrypt.compareSync(req.body.password_hash, d.password_hash,)){

                res.status(200).json({
                    result:"welcome",
                    msg:"invalid",
                    data:req.body
                })
            }else{
                res.status(404).json({
                    msg:"error"
                    
                })
                
                
            }
         
           

        }
    })
    .catch((e)=>{
        res.status(404).json({
            msg:"error"
            
        })
        
    })
    
        
        

    }

    

    
        
        
    
    
    
    


exports.loginController=loginController