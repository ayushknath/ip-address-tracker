import { useState } from "react";
import IPForm from "./components/IPForm";
import IPInfo from "./components/IPInfo";
import Map from "./components/Map";
import "./App.css";

function App() {
  const [IPDetails, setIPDetails] = useState({});
  const [coords, setCoords] = useState([]);

  async function getLatLng(region, country) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${region},${country}&limit=1&appid=caaa7b5e7b1a862b183dad699132eaed`
      );
      const data = await response.json();
      const lat = Number(data[0].lat);
      const lng = Number(data[0].lon);
      return [lat, lng];
    } catch (error) {
      console.log("Error from getLatLng: " + error);
    }
  }

  function getIPDetails(ip, region, country, timezone, isp) {
    const location = region ? `${region}, ${country}` : country;
    setIPDetails({
      ip: ip,
      location: location,
      timezone: timezone,
      isp: isp,
    });
    getLatLng(region, country).then((response) => setCoords(response));
  }

  return (
    <>
      <div className="ip-input-container">
        <IPForm getIPDetails={getIPDetails} />
        <IPInfo displayIPDetails={IPDetails} />
      </div>
      <Map lat={coords[0] || 51.505} lng={coords[1] || -0.09} />
    </>
  );
}

export default App;
