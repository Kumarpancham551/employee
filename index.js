const express = require('express');
const {connect}= require('./src/config/dbConfig');
const app = express();
const bodyParser = require("body-parser");


/**Register the body parser middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.listen(3000,async ()=>{
     await connect();
    console.log("mono db connected successfully");
    console.log("server started successfully");
})
require("./src/routes/route")(app);