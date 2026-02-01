import express from "express"
import { getAboutUs, getAboutUsByID, createAboutUs, updateAboutUs, deleteAboutUs } from "../controller/about-us.js";

const router = express.Router();

//Method for CRUD operation 
// GET (get all about us), we don't need anything in route or body.
// GET (get about us by id), we need id in route. 
// POST(create new about us), we need data of about us in body.
// PUT(update existing about us), we need data of about us in body, we need id in route. 
// DELETE (Delete existing about us), we need id in route

router.get("/", getAboutUs)
router.get("/:id", getAboutUsByID)
router.post("/", createAboutUs)
router.put("/:id", updateAboutUs)
router.delete("/:id", deleteAboutUs)

export default router;