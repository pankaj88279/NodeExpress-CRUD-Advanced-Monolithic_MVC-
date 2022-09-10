console.log('ok')

const express=require('express');

const { loginRoute } = require('./Routes/loginRoute');
const { registerRoute } = require('./Routes/Register.Route');
const { studentRoute } = require('./Routes/studentRoute');
const app= express();
require('dotenv').config();

app.use(express.json());

app.use('/api',studentRoute)

app.use('/api',registerRoute)
app.use('/api',loginRoute)

const port= process.env.PORT

app.listen(port,()=>{
    console.log('port running on',port)
})