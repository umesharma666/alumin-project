import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">alumIN</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/directory">Directory</Link>
        <Link to="/events">Events</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/halloffame">Hall of Fame</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
