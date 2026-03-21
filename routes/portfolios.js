import express from "express";
import { getAllPortfolios, getPortfolioByID, createPortfolio, updatePortfolio, deletePortfolio } from "../controller/portfolios.js";
import upload from "../middleware/storage.js";
import { auth, supreAdminAuth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", getAllPortfolios)
router.get("/:id",getPortfolioByID )
router.post("/", auth, upload.single("image"), createPortfolio)
router.put("/:id", auth, upload.single("image"), updatePortfolio)
router.delete("/:id", auth, deletePortfolio)

export default router;