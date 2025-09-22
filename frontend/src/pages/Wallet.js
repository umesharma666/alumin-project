import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Wallet() {
  const [wallet, setWallet] = useState({ coins: 0, badge: "Bronze" });

  useEffect(() => {
    fetchWallet();
  }, []);

  const fetchWallet = async () => {
    try {
      const { data } = await API.get("/wallet");
      setWallet(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">My Wallet</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold">Coins: {wallet.coins} 🪙</h3>
        <p className="mt-2">Badge: <b>{wallet.badge}</b> 🏅</p>
      </div>
    </div>
  );
}
