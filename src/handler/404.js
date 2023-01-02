'use strict';
const notFound = (req,res,next)=>{
    const errObject = {
        status: 404,
        message: 'The Page You Request Is Not Found'
      };    

      res.status(404).json(errObject);
}
module.exports = notFound;