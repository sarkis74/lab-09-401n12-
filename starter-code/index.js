'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser:true,
    useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

const server = require('./src/api/v1');
server.listen(3000, () => console.log('Listening On 3000'));

require('./src/app.js').start(process.env.PORT);