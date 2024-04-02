import React from "react";
import BannerBooking from "../Components/Booking/BannerBooking";
import Container from "../Components/Booking/Container";

const BookingPage: React.FC = () => {
  return (
    <div className="relative mt-[99px]">
      <BannerBooking />
      <Container />
    </div>
  );
};

export default BookingPage;
