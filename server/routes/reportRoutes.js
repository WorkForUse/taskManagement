const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');
const { exportTasksReport, exportUsersReport } = require('../controllers/reportController');

const router = express.Router();

// User Management Routes
router.get("/export/tasks", protect, adminOnly , exportTasksReport); // Export all tasks as Excel/PDf
router.get("/export/users", protect , exportUsersReport); // Export user-task report

module.exports = router;