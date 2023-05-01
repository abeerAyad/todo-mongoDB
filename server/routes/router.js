const express = require('express');
const router = express.Router();
const todo = require('../models');

router.post('/', async (req, res) => {
    const { content } = req.body;
    console.log(content);
    const todoPost = await todo.create({
        content
    })
    console.log(todoPost);
    res.json(todoPost);
})

router.get('/', async (req,res) => {
   const todoAll = await todo.find()
   res.json(todoAll)
})

router.delete('/delete/:id', async (req,res) => {
    const {id} = req.params;
    await todo.deleteOne({_id : id});
    res.json('Deleted')
})

router.put('/update/:id', async (req,res) => {
    const {id} = req.params;
    const { content } = req.body;
    const updateTodo = await todo.findByIdAndUpdate(id, {content:content})
    res.json(updateTodo);
})
module.exports = router;