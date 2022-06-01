const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const thoughtSchema = new Schema({
  throughText: {
    type: string,
    required: true,
    Minlength: 1,
    Maxlength: 280,
  },
  createdAt: {
    type: date,
    default: date.now(),
    get: (dateFormat = moment(dateFormat)),
  },
});
