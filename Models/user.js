const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match:
  },
  thoughts:[
    {
    type:Schema.Types.ObjectId,
    ref:"thought",
  }
],
  friends:[
    {
    type:Schema.Types.ObjectId,
    ref:"user"
  }
],
},
)
const user = model("user",userSchema)
module.exports = user;
