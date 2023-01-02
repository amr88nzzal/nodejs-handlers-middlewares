'use strict';
const logger = (req, res, next) => {
    req.date = new Date().toLocaleDateString();
    console.log(`logger @ ${req.date}`);
    console.log(`logger @ ${req.params.id}`);
    next();
};
module.exports = logger;