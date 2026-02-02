import express from "express";
import { getAllPartner, getPartnerByID, createPartner, updatePartner, deletePartner } from "../controller/partner.js";
const router = express.Router();

router.get("/", getAllPartner)
router.get("/:id", getPartnerByID)
router.post("/", createPartner)
router.put("/:id", updatePartner)
router.delete("/:id", deletePartner)

export default router;