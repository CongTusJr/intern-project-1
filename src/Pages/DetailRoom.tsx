import React from "react";
import Bannerdetail from "../Components/layouts/Details/Bannerdetail";
import Container from "../Components/layouts/Details/Container";

const DetailRoom: React.FC = () => {
  return (
    <div className="relative">
      <Bannerdetail />
      <Container />
    </div>
  );
};

export default DetailRoom;
