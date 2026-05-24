const Job = require("../models/Job");

//add job
exports.addjobs =async(req,res)=>{
    try{
        const {title,salary} = req.body;
        const newjob = new Job({title,salary});
        await newjob.save();
        res.json(newjob);
    }
    catch(err){
        console.error(err)
    }
}

//view job
exports.viewjobs =async(req,res)=>{
    try{
        const newjob = await Job.find();
        res.json(newjob);
    }
    catch(err){
        console.error(err)
    }
}

//single view
exports.viewonejobs =async(req,res)=>{
    try{
        const newjob = await Job.findById(req.params.id);
        res.json(newjob);
    }
    catch(err){
        console.error(err)
    }
}

//update
exports.updatejobs = async(req,res)=>{
    try{
        const newjob = await Job.findByIdAndUpdate(req.params.id,{title,salary},{new:true});
        res.json(newjob);
    }
    catch(err){
        console.error(err)
    }
}

//delete job
exports.deletejobs =async(req,res)=>{
    try{
        const newjob = await Job.findByIdAndDelete(req.params.id);
        res.json({message:"job deleted successfully"});
    }
    catch(err){
        console.error(err)
    }
}