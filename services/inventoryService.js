import Inventory from "../models/inventory.js";
import { onSuccess } from "../utils/response.js";
import { stockInventorySchema } from "../validator/inventoryValidator.js";
import { inventorySchema } from "../validator/inventoryValidator.js";

export const create = async (req, res, next) => {
    try {
        const value = inventorySchema.validateAsync(req.body);
        const [response, field] = await Inventory.create(req.body);
        onSuccess(res, 'Success create a inventory', response);
    } catch (error) {
        next(error);
    }
}

export const get = async (req, res, next) => {
    try {
        const [response, field] = await Inventory.get(req.params.id);
        onSuccess(res, 'Success get inventory data', response);
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const value = inventorySchema.validateAsync(req.body);
        const [response, field] = await Inventory.update(req.body, req.params.id);
        onSuccess(res, 'Success create a inventory', response);
    } catch (error) {
        next(error);
    }
}

export const addStock = async (req, res, next) => {
    try {
        const value = stockInventorySchema.validateAsync(req.body);
        const [response, field] = await Inventory.addStock(req.body, req.params.id);
        onSuccess(res, 'Success add stock inventory', response);
    } catch (error) {
        next(error);
    }
}

export const destroy = async (req, res, next) => {
    try {
        const [response, field] = await Inventory.destroy(req.params.id);
        onSuccess(res, 'Success get a inventory', response);
    } catch (error) {
        next(error);
    }
}