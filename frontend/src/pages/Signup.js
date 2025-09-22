import { useState } from "react";
import API from "../utils/api";

export default function Signup() {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({ name: "", email: "", password: "", institute: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === "student" ? "/auth/register-student"
                    : role === "alumni" ? "/auth/register-alumni"
                    : "/auth/register-institute";
      const { data } = await API.post(endpoint, formData);
      alert(data.msg);
      window.location.href = "/login";
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <select className="border p-2 w-full mb-3" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="institute">Institute</option>
        </select>
        <input type="text" name="name" placeholder="Full Name" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="border p-2 w-full mb-3"
          onChange={handleChange} />
        {role !== "institute" && (
          <input type="text" name="institute" placeholder="Institute Name" className="border p-2 w-full mb-3"
            onChange={handleChange} />
        )}
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full">Signup</button>
      </form>
    </div>
  );
}

