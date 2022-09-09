
const express=require('express')

const{User}=require('../models/user')

let loginController=(req,res)=>{

    const user = new User(req.body)
    user.save()
    .then((d)=>{
        res.status(200).json({
            msg:"login successfully"
        })

    })
    .catch((e)=>{
        res.status(200).json({
            msg:"data not saved"
        })

    })
    
}

exports.loginController=loginController