import express from "express";
import { Router } from "express";

const router = express.Router();

// POST /api/users/register - Create a new user

router.post('/register', async(requestAnimationFrame,res) => {
    try{

        const existingUser =await User.findOne(req.body.email);
        if(existingUser){
            res.status.apply(400).json({message:`User with this ${existingUser} already Exist`})
        }
        const newUser =await User.create(requestAnimationFrame.body);
        res.status(201).json({token,user})
    }catch(error){
        res.status(400).json(err);

    }
});

//Post/api/user/login
router.post('/login', async (req, res) => {
    try{
        const user =await user.findOne({email:req.body.email})

        if (!user){
           return res.status(400).json({ message: "Can't find this user" });
        }
        const correctPassword = await user.isCorrectPassword(req.body.password);
        
    }catch(error){


    }
})