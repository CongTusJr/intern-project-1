import React, { useEffect } from "react";
import Container from "../Components/Contact/Container";
import Banner from "../Components/Contact/Banner";
import Map from "../Components/Contact/Map";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Liên hệ";
  }, []);
  return (
    <div>
      <Banner />
      <Container />
      <Map />
    </div>
  );
};

export default Contact;
