const express=require('express')

let myvalidator=(req,res,next)=>{
    if(req.body.email ===undefined){
        res.status(403).json({
            msg:"email required"
        })

    }else{
        next();
    }

   
}

exports.myvalidator=myvalidator