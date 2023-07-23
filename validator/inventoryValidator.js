import Joi from "joi";

const validCategory = ['Electronic', 'Garment', 'Stationery'];

export const createInventorySchema = Joi.object({
    name: Joi.string().required().min(3),
    category: Joi.string().required().valid(...validCategory),
    stock: Joi.number().integer().required().greater(-1)
});

export const updateInventorySchema = Joi.object({
    name: Joi.string().required().min(3),
    category: Joi.string().required().valid(...validCategory)
});

export const updateStockInventorySchema = Joi.object({
    stock: Joi.number().integer().required().greater(-1)
});