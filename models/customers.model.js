const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
    block_number: Joi.number().integer().required(),
    room_number: Joi.number().integer().required()
});

module.exports = { schema };