import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Directory() {
  const [role, setRole] = useState("student");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [role]);

  const fetchData = async () => {
    try {
      const endpoint =
        role === "student" ? "/students" :
        role === "alumni" ? "/alumni" :
        "/institutes";
      const { data } = await API.get(endpoint);
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Directory</h2>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="student">Students</option>
        <option value="alumni">Alumni</option>
        <option value="institute">Institutes</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              src={item.photo || "https://via.placeholder.com/150"}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-center mt-2">{item.name}</h3>
            <p className="text-center text-gray-600">{item.course || item.location}</p>
            <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

