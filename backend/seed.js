import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/Student.js";
import Alumni from "./models/Alumni.js";
import Institute from "./models/Institute.js";
import Event from "./models/Event.js";
import Job from "./models/Job.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/alumin";

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected...");

    // 🔹 Clear old data
    await Student.deleteMany();
    await Alumni.deleteMany();
    await Institute.deleteMany();
    await Event.deleteMany();
    await Job.deleteMany();

    // 🔹 Insert Institutes
    const institute = await Institute.create({
      name: "National Institute of Technology",
      location: "Delhi, India",
      director: "Dr. Sharma",
      affiliation: "AICTE",
      uniqueId: "INST001",
      socialLinks: {
        facebook: "https://facebook.com/nitd",
        linkedin: "https://linkedin.com/nitd",
      },
    });

    // 🔹 Insert Students
    const students = await Student.insertMany([
      {
        firstName: "Aman",
        lastName: "Kumar",
        rollNo: "NITD2023CS01",
        course: "B.Tech",
        branch: "CSE",
        batch: "2023",
        uniqueId: "STU001",
        institute: institute._id,
        skills: ["JavaScript", "React", "MongoDB"],
      },
      {
        firstName: "Priya",
        lastName: "Sharma",
        rollNo: "NITD2022EE05",
        course: "B.Tech",
        branch: "Electrical",
        batch: "2022",
        uniqueId: "STU002",
        institute: institute._id,
        skills: ["Matlab", "Power Systems"],
      },
    ]);

    // 🔹 Insert Alumni
    const alumni = await Alumni.insertMany([
      {
        firstName: "Rahul",
        lastName: "Verma",
        course: "B.Tech",
        branch: "CSE",
        batch: "2018",
        currentCompany: "Google",
        designation: "Software Engineer",
        uniqueId: "ALU001",
        institute: institute._id,
        skills: ["Node.js", "System Design"],
      },
      {
        firstName: "Sneha",
        lastName: "Patel",
        course: "MBA",
        batch: "2017",
        currentCompany: "Deloitte",
        designation: "Consultant",
        uniqueId: "ALU002",
        institute: institute._id,
        skills: ["Finance", "Business Strategy"],
      },
    ]);

    // 🔹 Insert Events
    await Event.insertMany([
      {
        title: "Tech Alumni Meet 2025",
        description: "Annual alumni meet for CSE & ECE branches.",
        date: new Date("2025-12-10"),
        hostedBy: institute._id,
      },
      {
        title: "AI Workshop",
        description: "Hands-on AI and Machine Learning workshop.",
        date: new Date("2025-11-05"),
        hostedBy: institute._id,
      },
    ]);

    // 🔹 Insert Jobs
    await Job.insertMany([
      {
        title: "Frontend Developer Intern",
        company: "Microsoft",
        location: "Bangalore",
        postedBy: alumni[0]._id,
        skillsRequired: ["React", "CSS", "API Integration"],
      },
      {
        title: "Business Analyst",
        company: "KPMG",
        location: "Mumbai",
        postedBy: alumni[1]._id,
        skillsRequired: ["Excel", "SQL", "Communication"],
      },
    ]);

    console.log("🎉 Database Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
