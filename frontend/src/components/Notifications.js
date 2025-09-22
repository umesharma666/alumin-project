import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Notifications() {
  const [notifs, setNotifs] = useState([]);

  useEffect(() => {
    fetchNotifs();
  }, []);

  const fetchNotifs = async () => {
    try {
      const { data } = await API.get("/notifications");
      setNotifs(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-80 p-4">
      <h3 className="font-semibold mb-2">Notifications</h3>
      {notifs.length === 0 && <p className="text-gray-500">No new notifications</p>}
      <ul>
        {notifs.map((n) => (
          <li key={n._id} className="border-b py-2">
            🔔 {n.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
