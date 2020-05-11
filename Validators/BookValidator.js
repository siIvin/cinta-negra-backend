const {celebrate, Joi, Segments}= require('celebrate');

module.exports={
    create: celebrate({
        [Segments.BODY]:Joi.object().keys({
            title: Joi.string().required(),
            author: Joi.string().required(),
            pages: Joi.number().required(),
            password:Joi.string(),
        })
    })
};