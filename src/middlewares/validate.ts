import express, { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
// Define a schema using Joi
const schema = Joi.object({
    // Define your expected fields here
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });

const validate = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      next();
    };
  };
  

export default validate;
