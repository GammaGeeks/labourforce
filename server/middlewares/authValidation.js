import Joi from '@hapi/joi';

const validationObj = (messages) => Joi.string().trim().messages(messages);
const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message.replace(/"/g, '')).join(', ');
    return res.status(400).json({ status: 400, error: message });
  }
  return next();
};
const signUpValidator = (req, res, next) => {
  const schema = Joi.object({
    fullname: validationObj({ 'string.required': 'name is required', 'string.base': 'Invalid type, your name must be a string', 'string.empty': 'Please enter your fullname' }).required(),
    username: validationObj({ 'string.required': 'username is required', 'string.base': 'Invalid type, your username must be a string', 'string.empty': 'Please enter your username' }).required(),
    gender: validationObj({ 'string.required': 'gender is required', 'string.base': 'Invalid type, your gender must be a string', 'string.empty': 'Please enter your gender' }).required(),
    email: validationObj({ 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email', 'string.email': 'Your email is invalid, please enter a valid email' }).email().required(),
    password: validationObj({ 'string.base': 'Invalid type, your password must be a string', 'string.min': 'password must be at least 8 characters long', 'string.empty': 'Please enter your password' }).min(8).alphanum().max(50).required(),
    locationIds: Joi.array().items(Joi.number().integer()).label('LocationIds').required(),
    phoneNumber: Joi.number().integer().min(10).label('Phone number').required(),
    nationalId: Joi.number().integer().min(16).max(16).label('National ID number'),
    passportId: validationObj({ 'string.base': 'Invalid type, your passport Id must be a string', 'string.empty': 'Please enter your passport Id' }),
    role: validationObj({ 'string.base': 'Invalid type, your role must be a string', 'string.empty': 'Please enter your role' }).required()
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const signInValidator = (req, res, next) => {
  const schema = Joi.object({
    email: validationObj({ 'string.required': 'email is required', 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email' }).email(),
    password: validationObj({ 'string.required': 'Password is required', 'string.empty': 'Please enter your password' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export { signUpValidator, signInValidator };
