const express = require('express');
const path = require('path');
const port = 8002;

const app = express();



app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));


app.get('/' , function(req, res){

   return res.render('home');
});



app.listen(port, function(err){
 
    if(err)
    {
        console.log("error in running the server" , err);
    }
    console.log("Yup!! Its running on port:", port);
})


