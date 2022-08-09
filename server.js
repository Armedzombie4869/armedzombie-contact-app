const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const contactRoutes = require('./routes/contactRoutes')
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/api/v1',contactRoutes);
mongoose.connect('mongodb+srv://mongoadmin:GIWxd2BYxdPxsITq@sanskar-cluster.mvzdtnc.mongodb.net/ContactsDB?retryWrites=true&w=majority');
mongoose.connection.once('open',() => {
    console.log('Connection established');
}).on('error',(err) => {
    console.log(err);
})

let port = process.env.PORT || 8000
//process.env.PORT means if a port exist in environment variable use it else 8000
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})