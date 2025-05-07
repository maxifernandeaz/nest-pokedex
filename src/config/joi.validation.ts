import * as joi from 'joi';

export const joiValidationSchema = joi.object({
    MONGODB: joi.string().required(),  // Corregido aquí
    PORT: joi.number().default(3000),  // Unificar puertos
    DEFAULT_LIMIT: joi.number().default(5),  // Unificar límites
});