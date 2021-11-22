import mongoose from "mongoose";

const { Schema } = mongoose;

const EnrollSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

const Enroll = mongoose.model("Enroll", EnrollSchema);

export { Enroll };
