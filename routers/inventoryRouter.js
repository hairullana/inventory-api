import express from "express";
import * as inventoryService from "../services/inventoryService.js";

const router = express.Router();

router.post("/", inventoryService.create);
router.get("/", inventoryService.get);
router.get("/:id", inventoryService.get);
router.put("/:id", inventoryService.update);
router.put("/:id/add-stock", inventoryService.addStock);
router.delete("/:id", inventoryService.destroy);

export default router;