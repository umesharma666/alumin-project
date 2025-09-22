import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Directory from "./pages/Directory";
import Events from "./pages/Events";
import Jobs from "./pages/Jobs";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import HallOfFame from "./pages/HallOfFame";
import Donations from "./pages/Donations";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/halloffame" element={<HallOfFame />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
