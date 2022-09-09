const express=require('express')

let myvalidator=(req,res,next)=>{

    next();
}

exports.myvalidator=myvalidator