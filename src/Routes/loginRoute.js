const express=require('express');
const { loginController } = require('../controllers/loginControllers');
const { myvalidator } = require('../validatores/validator');

const loginRoute=express.Router();

loginRoute.post('/login',myvalidator,loginController)

exports.loginRoute=loginRoute