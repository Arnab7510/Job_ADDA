const job = require('../models/job');

// Create a new job
exports.createjob = async (req, res) => {
    try {
        const { title,  company, location, salary } = req.body;
        const newjob = new job({ title, company, location, salary });
        await newjob;
        res.json(newjob);
    }
    catch (err) {
        console.error(err);
    }
}

// View all jobs
exports.viewjob = async (req, res) => {
    try {
        const newjob = await job.find();
        res.json(newjob);
    }
    catch (err) {
        console.error(err);
    }
}

// View a single job 
exports.viewonejob = async (req, res) => {
    try {
        const newjob = await job.findById(req.params.id);
        res.json(newjob);
    }
    catch (err) {
        console.error(err);
    }
}
// Update a job
exports.updatejob = async (req, res) => {
    try {
        const { title,  company, location, salary } = req.body;
        const newjob = await job.findByIdAndUpdate(req.params.id, { title, company, location, salary }, {new: true});
        res.json(newjob);
    }
    catch (err) {
        console.error(err);
    }
}

// Delete a job
exports.deletejob = async (req, res) => {
    try {
        await job.findByIdAndDelete(req.params.id);
        res.json({ message: 'Job deleted successfully' });
    }
    catch (err) {
        console.error(err);
    }
}