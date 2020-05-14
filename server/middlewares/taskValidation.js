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
const taskValidator = (req, res, next) => {
  const schema = Joi.object({
    title: validationObj({ 'string.required': 'name is required', 'string.base': 'Invalid type, your title must be a string', 'string.empty': 'Please enter the title' }).required(),
    description: validationObj({ 'string.required': 'description is required', 'string.base': 'Invalid type, your description must be a string', 'string.empty': 'Please enter the description' }).required(),
    provinceId: Joi.number().integer().label('Province ID').required(),
    districtId: Joi.number().integer().label('District ID').required(),
    sectorId: Joi.number().integer().label('Sector ID').required(),
    salary: validationObj({ 'string.required': 'salary is required', 'string.base': 'Invalid type, your salary must be a string', 'string.empty': 'Please enter the salary' }).required(),
    collectionId: Joi.number().integer().label('Collection ID').required(),
    startsAt: Joi.date().iso().label('Starting Date').required(),
    endsAt: Joi.date().iso().label('Ending Date')
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export default taskValidator;
