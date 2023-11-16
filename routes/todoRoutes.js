const express = require('express');
const router = express.Router();

//Import Controller
const {createTodo} = require('../controllers/createTodo');
const {getAllTodos} = require('../controllers/getTodo');
const {getSingleTodo} = require('../controllers/getTodo');
const {deleteTodo} = require('../controllers/deleteTodo');
const {editTodo} = require('../controllers/editTodo');

//Define API Routes
router.post('/create/todo',createTodo);
router.get('/get/todo',getAllTodos);
router.get('/get/single/todo/:id',getSingleTodo);
router.delete('/delete/todo/:id',deleteTodo);
router.put('/update/todo/:id',editTodo);

module.exports = router;