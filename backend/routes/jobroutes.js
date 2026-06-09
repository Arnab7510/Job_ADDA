const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const router = express.Router();
const ctrl = require("../controllers/jobcontrollers");

//image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// ================= AUTH CHECK =================
const authcheck = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token found. Please login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// ================= ADMIN CHECK =================
const admincheck = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Only admin can access this feature",
    });
  }
  next();
};

// admin access
router.post("/", authcheck, admincheck, ctrl.addjob);
router.put("/:id", authcheck, admincheck, ctrl.updatejob);
router.delete("/:id", authcheck, admincheck, ctrl.deletejob);

// public access
router.get("/", ctrl.viewjobs);
router.get("/:id", ctrl.viewonejob);

module.exports = router;
