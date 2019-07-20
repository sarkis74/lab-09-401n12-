'use strict';

/**
 * API Server Module
 * @module src/app
 */

const cwd = process.cwd();

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// Esoteric Resources
const errorHandler = require('../src/middleware/500' );
const notFound = require( '../src/middleware/404' );
const v1Router = require('../src/api/v1');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// // Routes
app.use(v1Router);

// Catchalls
app.use(notFound);
app.use(errorHandler);

/**
 * Start Server on specified port
 * @param port {integer} (defaults to process.env.PORT)
 */
let start = (port = process.env.PORT) => {
    app.listen(port, () => {
        console.log(`Server Up on ${port}`);
    });
};

module.exports = {app,start};
