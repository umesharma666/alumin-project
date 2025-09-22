import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Donations() {
  const [donations, setDonations] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const { data } = await API.get("/donations");
      setDonations(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDonate = async () => {
    try {
      await API.post("/donations", { amount });
      alert("Donation successful!");
      setAmount("");
      fetchDonations();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Donations</h2>
      <div className="mb-6">
        <input
          type="number"
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleDonate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Donate
        </button>
      </div>
      <ul className="bg-white rounded-lg shadow-lg p-4">
        {donations.map((don) => (
          <li key={don._id} className="border-b py-2">
            💰 {don.donor} donated <b>{don.amount} INR</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
