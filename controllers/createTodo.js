const Todo = require('../models/TodoModel');

exports.createTodo = async (req,res) => {
    try{
        //Fetching Information From Request
        const {title,description} = req.body;
        //Add into Database
        const newTodo = await Todo.create({title,description});
        //Send Successful Message as Response
        res.status(200).json({
            success : true,
            data : newTodo,
            message : 'Todo Created Successfully',
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : 'Something went wrong when Creating Todo',
        })
    }
};