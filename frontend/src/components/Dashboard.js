import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await API.get("/auth/profile");
      setProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={profile.photo || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-2xl font-semibold">{profile.name}</h3>
        <p className="text-gray-600">{profile.role}</p>
        <p className="mt-2">{profile.bio}</p>

        {profile.role === "student" && (
          <div className="mt-4">
            <h4 className="font-semibold">Course Details</h4>
            <p>{profile.course} ({profile.batch})</p>
          </div>
        )}

        {profile.role === "alumni" && (
          <div className="mt-4">
            <h4 className="font-semibold">Career Updates</h4>
            <p>{profile.currentStatus}</p>
          </div>
        )}

        {profile.role === "institute" && (
          <div className="mt-4">
            <h4 className="font-semibold">Institute Details</h4>
            <p>{profile.name}, {profile.location}</p>
          </div>
        )}
      </div>
    </div>
  );
}

