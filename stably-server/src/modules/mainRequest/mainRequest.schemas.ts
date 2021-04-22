import Joi from 'joi';

// use JOI t0 perfom the external validations

const number = Joi.number().required().messages({
  "number.base": `value must be a number`,
  "any.required": `number is required`
});

export const bodySchema = Joi.object({
      number,
});
