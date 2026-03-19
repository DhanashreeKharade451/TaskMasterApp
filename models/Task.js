import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"


const taskSchema = new Schema({
    title:{
 type: String,
    required: true,
    unique: true,
    
    },

    description:{
 type: String,
    
    },
    status: {
        type: String,
enum:[ "To Do", "In Progress", "Done"],
    default: "To Do"
    },

    project:{
        type: Schema.Types.ObjectId,

        }


})