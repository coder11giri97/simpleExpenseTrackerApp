const express = require('express');
const router = express.Router();

const controller = require('../controller/head')

router.post('/details',controller.postdetails);

router.get('/userinfo',controller.getdetails);

router.delete('/del/:id',controller.delete);

//router.put('/update/:id' , controller.update);


module.exports=router