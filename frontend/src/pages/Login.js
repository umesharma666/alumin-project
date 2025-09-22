import { useState } from "react";
import API from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password, role });
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <select className="border p-2 w-full mb-3" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="institute">Institute</option>
        </select>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full">Login</button>
      </form>
    </div>
  );
}

