const express = require('express');

const cors = require('cors');

const {serverConfig} = require('./config'); 

const apiRoutes = require('./routes'); 

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes); 


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`); 
    
});