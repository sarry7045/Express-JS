const express = require("express");
const router = express.Router();
const SessionController = require("../Controllers/SessionController");

router.get("/getsession", SessionController.get_Session);
router.get("/deletesession", SessionController.delete_Session);
router.get("/regnsession", SessionController.regn_Session);
router.get("/examplesession", SessionController.session_example);

// export default router;
module.exports = router;
