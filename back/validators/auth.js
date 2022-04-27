const { check } = require ('express-validator')

exports.userSignupValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required'),

    check('email')
        .isEmail()
        .withMessage('valid email is required'),

    check('password')
        .isLength({ min: 6})
        .withMessage('at least 6 characters required')
]

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('valid email is required'),

    check('password')
        .isLength({ min: 6})
        .withMessage('at least 6 characters required')
]