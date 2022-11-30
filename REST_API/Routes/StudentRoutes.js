import express from "express";
const router = express.Router();
import StudnetController from "../Controllers/StudentController.js";

router.get("/", StudnetController.getAllDoc);
router.post("/", StudnetController.createDoc);
router.get("/:id", StudnetController.getSingleDocById);
router.put("/:id", StudnetController.updateDocById);
router.delete("/:id", StudnetController.deleteDocById);

export default router;
