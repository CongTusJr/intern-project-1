import React, { useEffect, useState } from "react";
import Bannerdetail from "../Components/Details/Bannerdetail";
import Container from "../Components/Room/Container";

const RoomPage: React.FC = () => {
  const [arrRooms, setArrRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setArrRooms(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Bannerdetail />
      <Container arrRooms={arrRooms} />
    </div>
  );
};

export default RoomPage;
