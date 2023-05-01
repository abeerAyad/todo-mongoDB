const express = require('express');
const { join } = require('path');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/router')


app.use(express.static(join(__dirname,'..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use('/todo', router);


mongoose.connect('mongodb://127.0.0.1:27017/todoDB').then(() => {
    app.listen(5000, () => {
        console.log(`http://localhost:5000`);
    })
})
