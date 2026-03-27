import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"


const projectSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    //Example field in projectSchema
user: {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: true
},

});

export default const Project = mongoose.model("user", projectSchema);
