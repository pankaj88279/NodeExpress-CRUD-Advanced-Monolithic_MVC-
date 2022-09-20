var express= require('express');

const jwt=require('jsonwebtoken');
const { User } = require('../models/user');

let authMiddleware=(req,res,next)=>{

    if(req.headers.authorization === undefined){

        res.status(200).json({msg:'Unauthorized'})
    }
    console.log(req.headers.authorization.split(' ')[1]);

    var token=req.headers.authorization.split(' ')[1];

    try{

        var decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        
        next();

    }catch(error){
        res.status(403).json({msg:'unauthorized',
                                });     
    }


}
let adminAuth = (req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role !== 'admin' ){
        res.status(403).json({msg:'Unauthorized'})
    }else{
        next();
    }
}

let adminTeacherAuth = (req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role === 'student' ){
        res.status(403).json({msg:'Unauthorized'})
    }else{
        next();
    }
}


module.exports={authMiddleware,adminAuth,adminTeacherAuth}