const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const thoughtSchema = new Schema({
  throughText: {
    type: String,
    required: true,
    Minlength: 1,
    Maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (dateFormat) => moment(dateFormat).format("MM Do YY"),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});
const thought = model("thought", thoughtSchema);

module.exports = thought;
