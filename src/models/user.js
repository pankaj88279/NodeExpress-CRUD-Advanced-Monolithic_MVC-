
const {mongoose}=require('../config/db')

let UserSchema=new mongoose.Schema({ 
                    firstname:{
                        type:String,
                        
                        
                    },
                    lastname:{
                        type:String,
                        

                    },
                    email:{
                        type:String,
                        required:true,
                        unique:true
                    },
                    password_hash:{
                        type:String,
                        required:true,
                       
                    },
                    role:{
                        type:String,
                        enum:["student","admin","teacher"],
                        default:"admin"
                    }
                   
                      },{
                        timestamps:true,

                            })
const User= mongoose.model('User',UserSchema)
        exports.User=User


let teacherSchema=new mongoose.Schema({ 
                        firstname:{
                        type:String,
                        required:true
                        },
                        lastname:{
                            type:String,
                            required:true
                        },
                        email:{
                            type:String,
                            required:true,
                            unique:true
                        },
                        password_hash:{
                            type:String,
                            required:true,
                           
                        },
                        
                    },{
                        timestamps:true,
                    });
let studentSchema=new mongoose.Schema({ 
                        firstname:{
                        type:String,
                        required:true
                        },
                        lastname:{
                            type:String,
                            required:true
                        },
                        email:{
                            type:String,
                            required:true,
                            unique:true
                        },
                        password_hash:{
                            type:String,
                            required:true,
                           
                        },

                        
                    },{
                        timestamps:true,
                    });
    const Teacher= mongoose.model('Teacher',teacherSchema)
    const Student= mongoose.model('Student',studentSchema)

    exports.Teacher=Teacher;
    exports.Student=Student;
