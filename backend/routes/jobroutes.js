const express = require("express");
const jwt = require("jsonwebtoken");
const router =express.Router();

const ctrl = require("../controllers/jobcontrollers");

//auth check
const authcheck = (req, res, next) => {
    const token = req.headers.authorization?.split("")[1]; 
    if (!token) {
        return res.json({ message: "invalid token" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.json({ message: "invalid token" });
    }
}

//admin check

const admincheck = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.json({ message: "access denied" });
    }
    next();
}

//admin can add, update, delete jobs
router.post("/",authcheck,admincheck,ctrl.addjobs);

router.put("/:id",authcheck,admincheck,ctrl.updatejobs);
router.delete("/:id",authcheck,admincheck,ctrl.deletejobs);

//user can view jobs
router.get("/",ctrl.viewjobs);
router.get("/:id",ctrl.viewonejobs);

module.exports = router;