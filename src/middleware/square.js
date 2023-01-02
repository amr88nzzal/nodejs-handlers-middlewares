'use strict';

function square(req, res, next) {
  return (req, res, next) => {
    const myNumber =req.params.id  
    console.log('ddddd',myNumber , typeof myNumber);
    if (!isNaN(myNumber))  {
      req.myNumber = myNumber * myNumber
      console.log(req.myNumber);
      next();
    } else {
      console.log('ddddd',myNumber , typeof myNumber);
      next(`the ${ req.params.id} is invalid ${typeof myNumber}`);
    }
  }
}
module.exports = square;
