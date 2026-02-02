import express from "express";
import { getAllProtfolios, getProtfolioByID, createProtfolio, updateProtfolio, deleteProtfolio } from "../controller/protfolios.js";

const router = express.Router();

router.get("/", getAllProtfolios)
router.get("/:id",getProtfolioByID )
router.post("/", createProtfolio)
router.put("/:id", updateProtfolio)
router.delete("/:id", deleteProtfolio)

export default router;