const express = require('express');
require('dotenv').config();

const app = express();

//Add Middleware to parse information from the body
app.use(express.json());

//Import Route for Todo Api
const router = require('./routes/todoRoutes');
//Mount the Todo Api Routes
app.use('/api/v1',router);

//Start Server 
const port = process.env.PORT || 8000;
app.listen(port,() =>{
    console.log('App Started at Port : ',port);
});

//Database Connection
require('./config/database').connect();