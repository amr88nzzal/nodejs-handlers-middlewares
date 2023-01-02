'use strict';
const errorHandler = (err, req, res, next) => {
    const errObject = {
        status: 500,
        statusText: 'Internal Server Error',
        message: err 
    }
    res.status(500).json(errObject)
}
module.exports = errorHandler