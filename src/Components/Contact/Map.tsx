import React from "react";

const Map: React.FC = () => {
  return (
    <div>
      <div>
        <div className="w-full">
          <iframe
            title="Google Map"
            width="100%"
            height="450"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=34%20P.%20Mi%C3%AA%CC%81u%20%C4%90%C3%A2%CC%80m,%20M%E1%BB%85%20Tr%C3%AC,%20Nam%20T%E1%BB%AB%20Li%C3%AAm,%20H%C3%A0%20N%E1%BB%99i+(Reyna%20Luxury%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
