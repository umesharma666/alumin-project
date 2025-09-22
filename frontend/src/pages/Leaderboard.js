import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaders();
  }, []);

  const fetchLeaders = async () => {
    try {
      const { data } = await API.get("/leaderboard");
      setLeaders(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4">Rank</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((user, i) => (
            <tr key={user._id} className="border-b text-center">
              <td className="py-2 px-4">{i + 1}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4 capitalize">{user.role}</td>
              <td className="py-2 px-4 font-bold">{user.points} 🏆</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
