const { body, validationResult } = require('express-validator');
const user = require('../Models/user')


const emptyString = value => {
    if (value.trim() != '') {
      return true;
    }
    throw new Error('please type valid string');
  };
const CheckRole = async value => {
    if(value.toLowerCase() == 'admin') {
        throw new Error(`you can't choes admin role`);
    }
}
const userValidationRules = () => {
    return [
      body('username').notEmpty().custom(emptyString),
      body('email').notEmpty().custom(emptyString),
      body('role').notEmpty().custom(CheckRole),
      body('address').notEmpty().custom(emptyString),
      body('password').isLength({ min: 8 }),
    ]
  }
  
  const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }

  module.exports = {
    userValidationRules,
    validate,
  }