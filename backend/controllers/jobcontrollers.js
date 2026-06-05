const Job = require("../models/job");


// ================= ADD JOB =================

exports.addjob = async (req, res) => {

  try {

    const { title, salary, company, location, description } = req.body;

    // validation

    if (!title || !salary) {
      return res.status(400).json({
        message: "Title and Salary required",
      });
    }

    const newjob = new Job({
      title,
      salary,
      company,
      location,
      description
    });

    // save database

    await newjob.save();

    res.status(201).json({
      success: true,
      message: "Job Added Successfully",
      data: newjob,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= VIEW ALL JOBS =================

exports.viewjobs = async (req, res) => {

  try {

    const jobs = await Job.find();

    res.status(200).json({
      success: true,
      total: jobs.length,
      data: jobs,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= SINGLE VIEW =================

exports.viewonejob = async (req, res) => {

  try {

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= UPDATE JOB =================

exports.updatejob = async (req, res) => {

  try {

    const { title, salary, company, location, description } = req.body;

    const updatedjob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        title,
        salary,
        company,
        location,
        description
      },
      {
        new: true,
      }
    );

    if (!updatedjob) {
      return res.status(404).json({
        message: "Job Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job Updated Successfully",
      data: updatedjob,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= DELETE JOB =================

exports.deletejob = async (req, res) => {

  try {

    const deletedjob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedjob) {
      return res.status(404).json({
        message: "Job Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job Deleted Successfully",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};