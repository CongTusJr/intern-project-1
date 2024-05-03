import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import SliderComponent from "../Components/Homepage/SliderComponent";
import { SliderItem } from "../interface";
import SliderImages from "../Components/Homepage/SliderImages";
import BookNow from "../Components/Homepage/BookNow";
import Service from "../Components/Homepage/Service";
import SliderFeedback from "../Components/Homepage/SliderFeedback";
import AboutComponent from "../Components/Homepage/AboutComponent";
import RoomSwipers from "../Components/Homepage/RoomSwiper";

const HomePage: React.FC = () => {
  const [arrRooms, setArrRooms] = useState([]);
  const [outServices, setOutService] = useState([]);
  const [feedBacks, setFeedBacks] = useState([]);

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
  useEffect(() => {
    fetch("http://localhost:8000/api/services")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setOutService(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/api/feedbacks")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setFeedBacks(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const sliders: SliderItem[] = [
    {
      key: 1,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn6.jpg",
      name: "Skider1",
    },
    {
      key: 2,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn8.jpg",
      name: "Skider2",
    },
    {
      key: 3,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn2.jpg",
      name: "Skider3",
    },
    {
      key: 4,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn1.jpg",
      name: "Skider4",
    },
  ];

  const images: SliderItem[] = [
    {
      key: 1,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 2,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 3,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 4,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 5,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 6,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 7,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 8,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 9,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
  ];

  return (
    <div className="relative mt-[99px]">
      {/* slider */}
      <SliderComponent arrImages={sliders} />

      {/* Book Now  */}
      <BookNow />
      <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto">
        {/* About us */}
        <AboutComponent />
      </div>
      {/* Room */}
      <RoomSwipers arrRooms={arrRooms} />
      <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto">
        {/* service  */}
        <Service arrServices={outServices} />
      </div>
      {/* Feedback */}
      <SliderFeedback arrFeedback={feedBacks} />

      {/* Image */}
      <SliderImages arrImages={images} />
    </div>
  );
};

export default HomePage;
