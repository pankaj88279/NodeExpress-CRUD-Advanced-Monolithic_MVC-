
const {Student} = require('../models/user');

  
let studentController=(req,res)=>{
    // Store the student only if student email is not available
    Student.findOne({email:req.body.email})
    .then((d)=>{
        console.log(d)
        if(d === null){
            const studentobject = new Student(req.body);
        studentobject.save()
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
        }else{
            res.status(403).json({
                msg:"email not found",
                
        })
       
        }
    })
    .catch((e)=>{
        res.status(400).json({
            msg:"error",
            
    })

    })
}


    

      


exports.studentController=studentController