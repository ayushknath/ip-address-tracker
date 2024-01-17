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
        `https://us1.locationiq.com/v1/search?key=pk.b13317b292e8d9459f19a4ecd3dd9a81&q=${region},%20${country}&format=json&limit=1`
      );
      const data = await response.json();
      return [Number(data[0].lat), Number(data[0].lon)];
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
    getLatLng(region, country)
      .then((response) => setCoords(response))
      .catch((error) => console.log(error));
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
