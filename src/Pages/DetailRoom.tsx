import React from "react";
import Bannerdetail from "../Components/Details/Bannerdetail";
import Container from "../Components/Details/Container";

const DetailRoom: React.FC = () => {
  return (
    <div className="relative">
      <Bannerdetail />
      <Container />
    </div>
  );
};

export default DetailRoom;
