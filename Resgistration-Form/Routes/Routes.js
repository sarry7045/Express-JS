import express from "express";
import UserController from "../Controllers/Controller.js";
const router = express.Router();

router.get("/", UserController.Home);
router.get("/registration", UserController.Registration);
router.post("/registration", UserController.createDoc);
router.get("/login", UserController.Login);
router.post("/login", UserController.verifyLogin);

export default router;
