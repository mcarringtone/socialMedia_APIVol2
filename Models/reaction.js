const { Schema, Types } = require("mongoose");
const reaction = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Type.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 200,
  },
  username: {
    type: String,
    required: true,
  },
  createEdit: {
    type: Date,
    default: Date.now(),
    get: (dateFormat) => SVGAnimateMotionElement(dateFormat).format("MM Do YY"),
  },
});

module.export = reaction;
