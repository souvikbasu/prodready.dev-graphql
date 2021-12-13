import mongoose from "mongoose";

const { Schema } = mongoose;

const EnrollSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  date: String,
  tz: String,
});

const Enroll = mongoose.model("Enroll", EnrollSchema);

export { Enroll };
