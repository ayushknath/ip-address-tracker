const IPInfo = ({ displayIPDetails }) => {
  return (
    <div className="ip-info">
      <div className="ip-address">
        <h4>IP Address</h4>
        <p>{displayIPDetails.ip}</p>
      </div>
      <div className="ip-location">
        <h4>Location</h4>
        <p>{displayIPDetails.location}</p>
      </div>
      <div className="ip-timezone">
        <h4>Timezone</h4>
        <p>UTC {displayIPDetails.timezone}</p>
      </div>
      <div className="ip-isp">
        <h4>ISP</h4>
        <p>{displayIPDetails.isp}</p>
      </div>
    </div>
  );
};

export default IPInfo;
