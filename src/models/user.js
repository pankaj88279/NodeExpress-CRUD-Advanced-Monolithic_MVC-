
const {mongoose}=require('../config/db')

let UserSchema=new mongoose.Schema({ 
                    firstname:{
                        type:String,
                        require:true,
                    },
                    lastname:{
                        type:String,
                        require:true,

                    },
                    eamil:{
                        type:String,
                        require:true,
                    },
                    password_hash:{
                        type:String,
                        require:true,
                    },
                    role:{
                        type:String,
                        enum:["student","admin","teacher"],
                        default:"student"
                    }
                   
                      },{
                        timesTamp:true,

                            })
const User= mongoose.model('User',UserSchema)

    exports.User=User