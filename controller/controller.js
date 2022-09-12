const path = require('path');
const model = require('../model/model');
const tablePerson = require('../model/model');

person = {
    id : 25,
    name : "Hossein",
}

const createUser = () => {
    tablePerson.create({name : person.name, id:person.id}).then(response => console.log(response))
    .catch(err=>console.log(err))
}

const callbackHome = (req,res) => {
    createUser()
    res.render(path.join(__dirname,"..","views","index.ejs"), {Title : "Home", id: req.params.id})
}

const callbackAbout = (req,res) => {
    res.render(path.join(__dirname,"..","views","about.ejs"), {Title : "About"})
}

const callbackContact = (req,res) => {
    
    res.render(path.join(__dirname,"..","views","contact.ejs"), {Title : "Contact", id: req.params.id})
}



module.exports = {callbackHome, callbackAbout, callbackContact};