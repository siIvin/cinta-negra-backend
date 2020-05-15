const {celebrate, Joi, Segments}= require('celebrate');

module.exports={
    createOrUpdate: celebrate({
        [Segments.BODY]:Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password:Joi.string(),
        })
    })
};