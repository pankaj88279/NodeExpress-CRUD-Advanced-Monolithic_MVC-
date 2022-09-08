const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pankaj:pankaj1993@cluster0.4gb2s.mongodb.net/?retryWrites=true&w=majority')
.then((d)=>{
    console.log('connected')
}).catch(()=>{
    console.log('disconnected')
})

exports.mongoose=mongoose