import express from "express";
import { getHeroSection, getHeroSectionByID, CreateHeroSection, UpdategetHeroSection, DeletegetHeroSection } from "../controller/hero-section.js";

const router = express.Router();

router.get("/", getHeroSection)
router.get("/:id", getHeroSectionByID)
router.post("/", CreateHeroSection)
router.put("/:id", UpdategetHeroSection)
router.delete("/:id", DeletegetHeroSection)

export default router;