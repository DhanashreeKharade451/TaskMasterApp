import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
         type: String,
    required: true,
    unique: true,
    trim: true,
    },

    email:{
        type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password:{
        type: String,
    minlength: 5,
    required: true
    }
});

const User = mongoose.model("User",userSchema);
export default User;