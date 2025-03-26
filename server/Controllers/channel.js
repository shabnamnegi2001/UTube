import mongoose from "mongoose";
import user from "../Models/Auth.js"

export const updatechaneldata=async(req,res)=>{ 
    const {id:_id}=req.params;
    const {name,desc}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send("Channel unavailable..")
    }
    try {
        const updatedata=await user.findByIdAndUpdate(
            _id,{
                $set:{
                    name:name,
                    desc:desc,
                },
            },
            {new:true}
        );
        res.status(200).json(updatedata)
    } catch (error) {
        res.status(405).json({message:error.message})
        return
    }
}

export const getallchanels=async(req,res)=>{
    try {
        const allchanels=await user.find();
        const allchaneldata=[]
        allchanels.forEach((channel)=>{
            allchaneldata.push({
                _id:channel._id,
                name:channel.name,
                email:channel.email,
                desc:channel.desc
            });
        });
        res.status(200).json(allchaneldata)
    } catch (error) {
        res.status(405).json({message:error.message})
        return
    }
}