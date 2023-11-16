const Todo = require('../models/TodoModel');

exports.createTodo = async (req,res) => {
    try{
        const {title,description} = req.body;
        const newTodo = await Todo.create({title,description});

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