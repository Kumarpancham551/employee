const User = require("../model/user");

const addDetail = async(req,res)=>{
    try{
        const detail = {
            name:req.body.name,
            age:req.body.age,
            department:req.body.department,
            position:req.body.position
        }
        const userCreated = await User.create(detail);
        return res.status(201).send(userCreated);
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}

const getDetail = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).send(user);
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}
const destroy = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        return res.status(200).send(user);
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}
const updateDetail = async(req,res)=>{
    try{
        const detail = {
            name:req.body.name,
            age:req.body.age,
            department:req.body.department,
            position:req.body.position
        }
        const userCreated = await User.findByIdAndUpdate(req.params.id,detail);
        return res.status(201).send(userCreated);
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success : false
        })
    }
}



module.exports ={
   addDetail,
   getDetail,
   destroy,
   updateDetail
}