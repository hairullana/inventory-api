import Joi from "joi";

const validCategory = ['Electronic', 'Garment', 'Stationery'];

export const inventorySchema = Joi.object({
    name: Joi.string().required().min(3),
    category: Joi.string().required().valid(...validCategory),
    stock: Joi.number().integer().required().greater(-1)
});

export const stockInventorySchema = Joi.object({
    stock: Joi.number().integer().required().greater(-1)
});