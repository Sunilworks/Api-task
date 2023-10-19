const {bollywood,hollywood,technology,fitness,food} = require('../dataDummy');

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

module.exports = {bollycontroller,hollycontroller,techcontroller,fitnesscontroller,foodcontroller}