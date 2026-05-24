const express = require("express");
const router =express.Router();

const ctrl = require("../controllers/jobcontrollers");

router.post("/",ctrl.addjobs);
router.get("/",ctrl.viewjobs);
router.get("/:id",ctrl.viewonejobs);
router.put("/:id",ctrl.updatejobs);
router.delete("/:id",ctrl.deletejobs);

module.exports = router;