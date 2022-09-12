const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./utils/database');
//using Express Js
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

//ejs settings 
app.set('view-engin', "ejs")

//router configue
const adminRouter = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'public')))


app.use(adminRouter)

sequelize.sync().then(result => app.listen(3000)).catch(err => console.log(err))

// app.listen(3000);


