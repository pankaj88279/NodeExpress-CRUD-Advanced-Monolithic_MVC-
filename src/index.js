console.log('ok')

const express=require('express');
const { studentRoute } = require('./Routes/studentRoute');
const app= express();
require('dotenv').config();

app.use(express.json());

app.use(studentRoute)

const port= process.env.PORT

app.listen(port,()=>{
    console.log('port running on',port)
})