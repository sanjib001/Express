import express from "express";
import { getAllProtfolios, getProtfolioByID, createProtfolio, updateProtfolio, deleteProtfolio } from "../controller/protfolios.js";
import upload from "../middleware/storage.js";
const router = express.Router();

router.get("/", getAllProtfolios)
router.get("/:id",getProtfolioByID )
router.post("/", upload.single("image"), createProtfolio)
router.put("/:id", upload.single("image"), updateProtfolio)
router.delete("/:id", deleteProtfolio)

export default router;