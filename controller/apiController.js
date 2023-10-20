const {bollywood,hollywood,technology,fitness,food, blog} = require('../dataDummy');

const bollycontroller = (req,res) =>{
    return res.send(bollywood)
};

const hollycontroller = (req,res) =>{
    return res.send(hollywood)
};

const techcontroller = (req,res) =>{
    return res.send(technology)
};

const fitnesscontroller = (req,res) =>{
    return res.send(fitness)
};

const foodcontroller = (req,res) =>{
    return res.send(food)
};

const blogcontroller = (req,res) =>{
    return res.send(blog)
};

module.exports = {bollycontroller,hollycontroller,techcontroller,fitnesscontroller,foodcontroller,blogcontroller}