const express=require('express');
const { registerController } = require('../controllers/registerControllers');
const { myvalidator } = require('../validatores/validator');


const registerRoute=express.Router();


registerRoute.post('/register',myvalidator,registerController)

exports.registerRoute=registerRoute