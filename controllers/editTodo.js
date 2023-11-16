const Todo = require('../models/TodoModel');

exports.editTodo = async(req,res) => {
    try{
        const {id} = req.params;

        //Updated Data
        const {title,description} = req.body;

        //Update Data in Todo
        const newTodo = await Todo.findByIdAndUpdate(id,{
            title : title,
            description : description,
            lastEdited : Date.now()
        })

        res.status(200).json({
            success : true,
            message : 'Todo Updated Successful',
            data : newTodo
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : 'Something went wrong when Updating Todo',
        })
    }
}