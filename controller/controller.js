const path = require('path');
const model = require('../model/model');

person = {
    name : "Hossein",
    family: "Simchi",
    age: 26
}

const saveddata = new model.saveData("./data/data.json", JSON.stringify(person))


const callbackHome = (req,res) => {
    saveddata.saveToJsonFile();
    res.render(path.join(__dirname,"..","views","index.ejs"), {Title : "Home"})
}

const callbackAbout = (req,res) => {
    res.render(path.join(__dirname,"..","views","about.ejs"), {Title : "About"})
}

const callbackContact = (req,res) => {
    res.render(path.join(__dirname,"..","views","contact.ejs"), {Title : "Contact"})
}



module.exports = {callbackHome, callbackAbout, callbackContact};