const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: String,
  motherName: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  address: String,
  institute: String,
  rollNumber: String,
  course: String,
  branch: String,
  year: Number,
  batch: String,
  bio: String,
  skills: [String],
  currentStatus: String,
  photo: String,
  socialLinks: {
    linkedin: String,
    instagram: String,
    facebook: String,
    youtube: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
