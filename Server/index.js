const express = require('express');

//connection db
require('./db/connection');

//import model
const User = require('./model/User');
const app = express();


app.use(express.json());

//router file linked
app.use(require('./router/auth'))
//Middleware
const middleware = (req,res,next) =>{
    console.log('Helo from MiddleWare');
    next();
}

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
