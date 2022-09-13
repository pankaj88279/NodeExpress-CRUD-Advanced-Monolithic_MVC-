
const express=require('express')
const jwt =require('jsonwebtoken');
const{User}=require('../models/user')

const bcrypt = require('bcrypt');

let loginController=(req,res)=>{
    
    // console.log(req.body)
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    
    User.findOne({email:req.body.email})
    .then((d)=>{
        // console.log(d)
        if(d ===null){
            const user = new User(req.body)
        user.save()
       .then((d)=>{
        // var token = jwt.sign(req.body, process.env.JWT_SECRET);
        // var token = jwt.sign(req.body, process.env.JWT_SECRET);
     
        res.status(403).json({
            msg:"invalid",
            data:req.body,
            token
        })

    })
    .catch((e)=>{
        res.status(200).json({
            msg:"error",
            error:e
        })

    })

        }else{
            // console.log("d",d)
            const x=bcrypt.compareSync(req.body.password_hash, d.password_hash,)
            if(bcrypt.compareSync(req.body.password_hash, d.password_hash)){

                res.status(200).json({
                    result:"welcome",
                    msg:"invalid",
                    data:d
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