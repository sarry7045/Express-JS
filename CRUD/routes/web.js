import express from "express";
const router = express.Router();
import studentController from "../controllers/studentController.js";

router.get("/", studentController.getAllDoc);

export default router;
