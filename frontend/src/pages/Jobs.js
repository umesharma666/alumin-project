import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await API.get("/jobs");
      setJobs(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Job Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-sm text-gray-500 mt-2">🏢 {job.company}</p>
            <p className="text-sm text-gray-500">📍 {job.location}</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

