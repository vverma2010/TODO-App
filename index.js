const express = require('express');
const path = require('path');
const port = 8002;

const db = require('./config/mongoose');

const Task = require('./model/task');

const app = express();



app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/' , function(req, res){

//    return res.render('home');

    Task.find({}, function(err, task){

        if(err){

            console.log('Error in fetching tasks from DB !!');
            return;
        }

        return res.render('home', {title : 'My To-Do App', todo_app :  task});




    });


});






app.post('/add-task', function(req,res){
       console.log(req.body);
    //    console.log(req.body.name);
    //    console.log(req.body.phone);
        
        // contactList.push({
        //     name: req.body.name,
        //     phone:req.body.phone
        
        // });
        
        Task.create({
    
            task: req.body.task,
            category: req.body.category,
            date: req.body.date
    
    
        },function(err,newTask){
    
            if(err){
                console.log('error in adding a task !!');
                return;
            }
    
            console.log('******************', newTask);
            return res.redirect('back');
        });
        
    });


    app.get('/delete-contact',function(req,res){

        // get the id from query in the url
        console.log(req.query);
        // get the query from url
    
        let id = req.query.id;
        // find the contact in the DB using id and delete
    
        // let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    
        // if(contactIndex != -1){
        //     contactList.splice(contactIndex, 1);
        // }
    
        Task.findByIdAndDelete(id,function(err){
            if(err)
            {
                console.log('error in deleting the contact');
                return;
            }
            return res.redirect('back');
    
    
        });
    
        
    });


    app.listen(port, function(err){
 
        if(err)
        {
            console.log("error in running the server" , err);
        }
        console.log("Yup!! Its running on port:", port);
    });


