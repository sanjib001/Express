import express from "express"
import { getAllServices, getServicesByID, createServices, updateService, deleteService } from "../controller/services.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

//Method for CRUD operation 
// GET (get all services), we don't need anything in route or body.
// GET (get service by id), we need id in route. 
// POST(create new service), we need data of service in body.
// PUT(update existing service), we need data of service in body, we need id in route. 
// DELETE (Delete existing service), we need id in route

router.get("/", getAllServices)
router.get("/:id", getServicesByID)
router.post("/", auth, createServices)
router.put("/:id", auth, updateService)
router.delete("/:id", auth, deleteService)

export default router;