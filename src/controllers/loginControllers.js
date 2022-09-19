
const express = require('express')

const jwt = require('jsonwebtoken');

const { User } = require('../models/user')

const bcrypt = require('bcrypt');

let loginController = (req,res) =>{
    
    User.findOne({email:req.body.email}, function (err, user) {
        const { email,password_hash } = req.body 
        console.log(req.body)
       
        if(user !== null){
           console.log(user)
            if(bcrypt.compareSync(password_hash,user.password_hash)){
                     
                        res.status(200).json({
                          msg:"login successfully",
                          email:user.email,
                          role:user.role,

                          token: jwt.sign({user:user.email,role:user.role},process.env.JWT_SECRET, {
                            expiresIn: "1d"
                         
           })
         })
            }else{
                res.status(401).json({
                    msg:"error",
                })
            }
        }else{
            res.status(403).json({
                msg:"Email not found",
            })
        }
    });
   
}

    
exports.loginController = loginController