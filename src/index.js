console.log('ok')

const express=require('express');

const { loginRoute } = require('./Routes/loginRoute');
const { registerRoute } = require('./Routes/Register.Route');
const { studentRoute } = require('./Routes/studentRoute');
const { teacherRoute } = require('./Routes/teacherRoute/teachres');
const app= express();
require('dotenv').config();

app.use(express.json());

app.use('/api',studentRoute)

app.use('/api',registerRoute)
app.use('/api',loginRoute)
app.use('/api',teacherRoute)

app.get("/test",(req,res)=>{
    res.json({msg:"hello pankaj you are selected in thoughtwin"})

})

const port= process.env.PORT

app.listen(port,()=>{
    console.log('port running on',port)
})