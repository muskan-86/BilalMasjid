import React, { useState } from "react";
import Slider from "react-slick";
import { useAnnouncements } from "../context/AnnouncementContext";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "gray",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        right: "10px",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "gray",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        left: "10px",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
};

const Announcements = () => {
  const { announcements } = useAnnouncements();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024, // Large tablets or small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: i === currentSlide ? getDotColor(i) : "gray",
          borderRadius: "50%",
          transition: "background-color 0.3s ease",
        }}
      />
    ),
  };

  const getDotColor = (i) => {
    return "#10B981"; // Tailwind color for active dots
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Slider Section */}
      <div className="flex items-center justify-center bg-opacity-50 z-50 mt-16 mx-4">
        <div className="bg-white px-4 py-6 rounded-3xl shadow-md max-w-screen-lg w-full mx-auto relative">
          <Slider {...settings}>
            {announcements.length > 0 ? (
              announcements.map((announcement) => (
                <div key={announcement.id} className="w-full px-2">
                  <div className="relative flex flex-col items-center justify-center">
                    <img
                      src={announcement.imageUrl}
                      alt={announcement.title}
                      className="w-auto h-72 rounded-2xl object-cover"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No announcements available.</p>
            )}
          </Slider>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Announcements;
