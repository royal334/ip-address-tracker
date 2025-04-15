import { useState } from "react";
import Details from "./Details";
import axios from 'axios'

type FormProps ={

  setLng: (lng : number) => void
  setLat: (lat : number) => void
}


function Form(props:FormProps) {
  const [ipAddress, setIpAddress] = useState<string>(""); // State for the input value
  const [city, setCity] = useState<string | undefined>(""); // State for the city
  const [country, setCountry] = useState<string | undefined>('')
  const [isp, setIsp] = useState<string | undefined>('');
  const [timezone, setTimezone] = useState<string | undefined>('')
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [isSubmitted, setIsSubmitted] = useState <boolean>(false);



  async function getInfo(e: React.FormEvent) {
    e.preventDefault();

    // Validate input
    if (!ipAddress.trim()) {
      setError("IP Address is required.");
      return;
    }


    // Clear previous state
    setCity("");
    setCountry("");
    setTimezone("");
    setIsp("");
    setIsSubmitted(false);
    setError(null);

    try {
      const res = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_API_KEY_IP_ADDRESS}&ip=${ipAddress}`); 

      // if (!res.ok) {
      //   throw new Error("Network response was not ok");
      // }

      

      //const data = await res.json();
      console.log(res)
      const city = res.data.city; 
      const countryCode = res.data.country_code2;
      const isp = res.data.isp;
      const lat= res.data.latitude
      const lon= res.data.longitude
      const offset = res.data.time_zone.offset
      const timezone =` ${offset}.00`;

      props.setLat(lat)
      props.setLng(lon)
      
      setTimezone(timezone) 
      setIsp(isp)
      setCountry(countryCode)
      setCity(city); 
      setIsSubmitted(true)
      setError(null); // Clear any previous errors


      if(city == '') setCity('--')
      if(countryCode == '') setCountry('--')  
      if(isp == '') setIsp('--')
      if(timezone == '') setTimezone('--')

      
    } 
    catch (err) {
      console.error("Error fetching IP address data:", err);
      setError("Failed to fetch IP address data. Please try again.");
      setIsSubmitted(false)
    }

    
  }

  return (
    <>
      <form onSubmit={getInfo}>
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-4 w-full px-6">
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)} // Update state on input change
            placeholder="Search for any IP address "
            className="w-full md:w-1/3 h-12 px-4 mb-3 md:mb-0 rounded-lg shadow-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:bg-blue-600 cursor-pointer"
          >
            Search
          </button>
        </div>
        {error && (
          <p className="text-red-500 mt-2 text-center">{error}</p> // Display error message
        )}
      </form>

      {  isSubmitted &&  <div className="w-full mt-4">
          <Details ipAddress={ipAddress} city={city} country={country}  isp={isp} timezone={timezone}/>
      </div>
      }

      
    </>
  );
}

export default Form;
