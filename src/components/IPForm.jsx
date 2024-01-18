import { useState } from "react";
import SubmitButton from "../assets/icon-arrow.svg";

const IPForm = ({ getIPDetails }) => {
  const [formData, setFromData] = useState("");

  function handleChange(event) {
    setFromData(event.target.value);
  }

  async function someFunction() {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=at_UCw3DOlfslQZ31EBVJV5kjFrCFvrG&ipAddress=${formData}&domain=${formData}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData) {
      return;
    }
    someFunction()
      .then((response) =>
        getIPDetails(
          response.ip,
          response.location.region,
          response.location.country,
          response.location.timezone,
          response.isp
        )
      )
      .catch((error) => console.log(error));
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        value={formData}
      />
      <button aria-label="Search IP">
        <img src={SubmitButton} alt="Submit button" />
      </button>
    </form>
  );
};

export default IPForm;
