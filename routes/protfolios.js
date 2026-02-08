import express from "express";
import { getAllProtfolios, getProtfolioByID, createProtfolio, updateProtfolio, deleteProtfolio } from "../controller/protfolios.js";
import upload from "../middleware/storage.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getAllProtfolios)
router.get("/:id",getProtfolioByID )
router.post("/",auth, upload.single("image"), createProtfolio)
router.put("/:id",auth, upload.single("image"), updateProtfolio)
router.delete("/:id",auth, deleteProtfolio)

export default router;