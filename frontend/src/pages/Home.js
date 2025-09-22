export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold mb-4">Connect. Engage. Grow.</h1>
      <p className="text-lg text-gray-600">A centralized alumni platform for engagement and networking.</p>
      <div className="mt-6 space-x-4">
        <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</a>
        <a href="/login" className="bg-gray-200 px-6 py-3 rounded-lg">Login</a>
      </div>
    </div>
  );
}
