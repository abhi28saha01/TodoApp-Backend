const Todo = require("../models/TodoModel");

exports.getAllTodos = async(req,res) => {
    try{

        //Fetching All Todos
        const allTodo = await Todo.find({});

        //SucessFull Message
        res.status(200).json({
            success : true,
            message : 'Getting all the Todos Successfully',
            data : allTodo
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : 'Something went wrong when Fetching Todo',
        })
    }
};

exports.getSingleTodo = async(req,res) => {
    try{
        //Fetch Id
        const {id} = req.params;
        //Fetching Todo by ID
        const allTodo = await Todo.findById(id);

        //SucessFull Message
        res.status(200).json({
            success : true,
            message : 'Getting all the Todos Successfully',
            data : allTodo
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : 'Something went wrong when Fetching Todo',
        })
    }
}