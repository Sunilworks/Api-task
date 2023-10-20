const {bollycontroller,hollycontroller,techcontroller,fitnesscontroller,foodcontroller, blogcontroller} = require('../controller/apiController')
const routing = require("express").Router();

routing.get('/bollywood/', bollycontroller);

routing.get('/hollywood', hollycontroller);

routing.get('/technology', techcontroller);

routing.get('/fitness', fitnesscontroller);

routing.get('/food', foodcontroller);

routing.get('/blog', blogcontroller);

module.exports = routing;