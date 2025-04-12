import { useState } from "react";

function Form() {
  const [ipAddress, setIpAddress] = useState<string>(""); // State for the input value
  const [error, setError] = useState<string | null>(null); // State for error messages

  async function getInfo(e: React.FormEvent) {
    e.preventDefault();

    // Validate input
    if (!ipAddress.trim()) {
      setError("IP Address is required.");
      return;
    }

    setError(null); // Clear any previous errors

    const apiKey = import.meta.env.VITE_API_KEY_IP_ADDRESS || "";

    if (!apiKey) {
      setError("API key is missing. Please check your .env file.");
      return;
  }

    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error fetching IP address data:", err);
      setError("Failed to fetch IP address data. Please try again.");
    }
  }

  return (
    <form onSubmit={getInfo}>
      <div className="flex items-center justify-center mt-4 gap-4 w-full">
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)} // Update state on input change
          placeholder="Search for any IP address or domain"
          className="w-1/3 h-12 px-4 rounded-lg shadow-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
        >
          Search
        </button>
      </div>
      {error && (
        <p className="text-red-500 mt-2 text-center">{error}</p> // Display error message
      )}
    </form>
  );
}

export default Form;
