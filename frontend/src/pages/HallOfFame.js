import { useState, useEffect } from "react";
import API from "../utils/api";

export default function HallOfFame() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data } = await API.get("/halloffame");
      setStories(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Hall of Fame</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div key={story._id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{story.alumniName}</h3>
            <p className="text-gray-600 italic">"{story.title}"</p>
            <p className="mt-2">{story.content}</p>
            <p className="text-sm text-gray-500 mt-2">Tips: {story.tips}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
