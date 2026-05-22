const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/', jobController.createjob);
router.get('/', jobController.viewjob);
router.get('/:id', jobController.viewonejob);
router.put('/:id', jobController.updatejob);
router.delete('/:id', jobController.deletejob);

module.exports = router;