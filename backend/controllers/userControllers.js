import userModel from "../models/userModels.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_secret)
}

const loginUser=async(req,res)=>{

    const {email,password}=req.body;

    try{
        //finding user
        const user =await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesn't exist"})
        }
        
        //finding password match
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({ success: false, message: "Invalid password" })
        }

        //generating token
        const token =createToken(user._id);
        return res.json({ success: true, token })

    }catch(error){
        console.log(error)
        return res.json({ success: false, message: "Error" })
    }
}


const registerUser=async(req,res)=>{
    const{name,password,email}=req.body;
    try{
        //checking is user already exists
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exits"})
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing use password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        //generating token
        const user=await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token})

    } catch (error){
        console.error("Error during user registration:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export {loginUser,registerUser}