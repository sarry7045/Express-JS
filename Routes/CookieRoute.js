const express = require("express");
const router = express.Router();
const CookieController = require("../Controllers/CookieController");

router.get("/setcookie", CookieController.set_Cookie);
router.get("/getcookie", CookieController.get_Cookie);
router.get("/deletecookie", CookieController.delete_Cookie);

// export default router;
module.exports = router

