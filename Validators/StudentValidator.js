const {celebrate, Joi, Segments}= require('celebrate');

module.exports={
    createOrUpdate: celebrate({
        [Segments.BODY]:Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            dateOfBirth: Joi.string().required(),
            //buscar cómo se hace una fecha en modelo
            //buscar como validar una referencia de un modelo de moongose
        })
    })
};