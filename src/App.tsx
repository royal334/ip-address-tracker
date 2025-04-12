import { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";


function App() {

  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number >();
  

  return (
    <>
      <Header  setLng={setLng} setLat={setLat}/>
      <Map lat={lat} lng = {lng} />
    </>
  );
}

export default App;
