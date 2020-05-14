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
const collectionValidator = (req, res, next) => {
  const schema = Joi.object({
    name: validationObj({ 'string.required': 'name is required', 'string.base': 'Invalid type, your name must be a string', 'string.empty': 'Please enter your name' }).required(),
    sortId: Joi.number().integer().label('sort ID').required(),
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const sortValidator = (req, res, next) => {
  const schema = Joi.object({
    name: validationObj({ 'string.required': 'name is required', 'string.base': 'Invalid type, your name must be a string', 'string.empty': 'Please enter your name' }).required()
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export { collectionValidator, sortValidator };
