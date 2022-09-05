const path = require('path');

//using Express Js
const express = require('express');
const app = express();

//ejs settings 
app.set('view-engin', "ejs")

//router configue
const adminRouter = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'public')))


app.use(adminRouter)

app.listen(3000);


