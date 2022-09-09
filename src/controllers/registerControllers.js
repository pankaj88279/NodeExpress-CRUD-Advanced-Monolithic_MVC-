const { User } = require("../models/user")


var registerController=(req,res)=>{

    const user = new User(req.body)
    user.save()
    .then((d)=>{
        res.status(200).json({
            msg:"register successfully",
            data:d
        })

    })
    .catch((e)=>{
        res.status(400).json({
            msg:"not register successfully",
            error:e
        })
    })
    
}

exports.registerController=registerController