const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Models
const Student = require("../models/Student");
const Alumni = require("../models/Alumni");
const Institute = require("../models/Institute");

// Signup (Student Example)
router.post("/register-student", async (req, res) => {
  try {
    const { name, email, password, institute } = req.body;

    let user = await Student.findOne({ email });
    if (user) return res.status(400).json({ msg: "Student already registered" });

    const hashedPass = await bcrypt.hash(password, 10);

    user = new Student({ name, email, institute, password: hashedPass });
    await user.save();

    res.json({ msg: "Student registered successfully", id: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login (common for all roles)
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let user;
    if (role === "student") user = await Student.findOne({ email });
    else if (role === "alumni") user = await Alumni.findOne({ email });
    else if (role === "institute") user = await Institute.findOne({ email });

    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
