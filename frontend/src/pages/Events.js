import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await API.get("/events");
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-sm text-gray-500 mt-2">📍 {event.location}</p>
            <p className="text-sm text-gray-500">📅 {new Date(event.date).toDateString()}</p>
            <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
