import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'

const { Schema } = mongoose;

const EnrollSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
});

EnrollSchema.plugin(uniqueValidator);
const Enroll = mongoose.model("Enroll", EnrollSchema);

export { Enroll };
