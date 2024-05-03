import React, { useEffect, useState } from "react";
import Bannerdetail from "../Components/Details/Bannerdetail";
import Container from "../Components/Details/Container";
import RoomRelate from "../Components/Details/RoomRelate";
import { useParams } from "react-router";
const imageDeyails: string[] = [
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
];

const DetailRoom: React.FC = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [arrRooms, setArrRooms] = useState([]);
  const [titles, setTitle] = useState();
  const [amenitiesArray, setAmenitiesArray] = useState([]);
  const [servicesArray, setServicesArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.data);
        const amenitiesArray = JSON.parse(data.data.amenities);
        const servicesArray = JSON.parse(data.data.services);
        setAmenitiesArray(amenitiesArray);
        setServicesArray(servicesArray);
        setTitle(data.data.name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  useEffect(() => {
    document.title = titles || "Default Title"; // If titles is falsy, set a default title
  }, [titles]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setArrRooms(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="relative">
      <Bannerdetail />
      <Container
        arrUrlRoom={imageDeyails}
        roomDetails={details}
        amenitiesArray={amenitiesArray}
        servicesArray={servicesArray}
      />
      <RoomRelate arrRooms={arrRooms} />
    </div>
  );
};

export default DetailRoom;
