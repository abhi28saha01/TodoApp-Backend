const Todo = require('../models/TodoModel');

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success : true,
            message : "Todo is Deleted Successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : 'Something went wrong when Deleting Todo',
        })
    }
}