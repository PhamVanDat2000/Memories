import express from 'express';
// import bodyParser from 'body-parser';
// không cần bodyParser vì đã được build trong Express js
import  mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

// const express = require('express');
const app = express();

app.use('/posts', postRoutes);

app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.ehduh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//https://www.mongodb.com/cloud/atlas

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
  .catch((e)=> console.log(e.message));

mongoose.set('useFindAndModify', false);