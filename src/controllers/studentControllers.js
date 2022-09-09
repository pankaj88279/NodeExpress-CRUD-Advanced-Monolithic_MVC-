const express=require('express');
const { User } = require('../models/user');
const{mongoose}=require('../config/db')

    let studentController=(req,res)=>{
        
     //   const kitty = new Cat({ name: 'Zildjian' });
       // kitty.save().then(() => console.log('meow'));
    const user = new User(req.body);
     user.save()
    .then((d)=>{
        res.status(200).json({
            msg:"saved",
            data:d
        })
    })
    .catch((e)=>{
        res.status(400).json({
            msg:"unsaved",
            error:e
        })

    })
    

   
}
exports.studentController=studentController