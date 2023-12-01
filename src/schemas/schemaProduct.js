const joi = require("joi");

const schemaProduct = joi.object({
  descricao: joi.string().required().messages({
    "any.required": "O campo descricao é obrigatório",
    "string.empty": "O campo descricao é obrigatório",
  }),
  quantidade_estoque: joi.string().required().messages({
    "any.required": "O campo quantidade do estoque é obrigatório",
    "string.empty": "O campo quantidade do estoque é obrigatório",
  }),
  valor: joi.string().required().messages({
    "any.required": "O campo valor é obrigatório",
    "string.empty": "O campo valor é obrigatório",
  }),
  categoria_id: joi.required().messages({
    "any.required": "O campo categoria_id é obrigatório",
    "string.empty": "O campo categoria_id é obrigatório",
  }),
});

module.exports = schemaProduct;
