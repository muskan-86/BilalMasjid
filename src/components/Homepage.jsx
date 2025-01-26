import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event from './Event.jsx';
import IndexDonateBtn from './IndexDonateBtn.jsx';
import IndexJoinUs from "./IndexJoinUsBtn.jsx";
import Footer from "./Footer.jsx";
import Herobanner from "./Herobanner.jsx";
import Loader from "./Loader.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import AnnouncementButton from './AnnouncementButton.jsx';
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PrayerTimes from './PrayerTimes.jsx';
import Services from './Services.jsx'


const HomePage = () => {
  const [loading, setLoading] = useState(true); // State to track loader status

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false once done
    }, 500);

    AOS.init({
      duration: 1000,
      delay: 200,
    });
    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <Loader />
      <div className="relative gap-4">
        {/* Other components */}
        {!loading && <AnnouncementButton />}
        {!loading && <WhatsAppButton />}
      </div>

      <div data-aos="zoom-in">
        <div className="flex items-center justify-center">
          <div className="bg-white  w-full max-w-full">
            <PrayerTimes />
          </div>
        </div>
        <div
          className=" background-consistent"
          style={{
            backgroundImage: `url('/masjid-nbackground.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 z-10"></div>
          {/* Navbar */}
          <div
            className=" top-0 left-0 right-0 z-10 bg-transparent flex items-center justify-center p-4 lg:mx-20">
            <div className="w-full max-w-11/12">
              <Herobanner />
            </div>
          </div>

          {/* Hero Section */}
          <div className="mt-10 font-serif">
            {/* Large Screen */}
            <div className="bg-cover bg-center p-10 lg:flex lg:flex-row py-12 items-center hidden lg:block text-center">
              <div className="relative z-20 w-full flex flex-col gap-4 justify-center items-center mt-4 p-2">
                <div className="my-4 px-4 w-full">
                  <h2 className="text-white text-4xl font-bold" data-aos="fade-down" style={{ fontWeight: 'bold' }}>
                    Welcome to Bilal Masjid
                  </h2>
                </div>
                <div className="flex w-full justify-center mt-3">
                  <div className="w-full lg:w-2/3 xl:w-1/2 text-center " data-aos="slide-right">
                    <p className="text-lg xl:text-xl leading-relaxed text-white mx-auto">
                      It is our honor and high privilege to welcome you to the Bilal Masjid Web site.
                      It is through the Gracious Mercy of Allah (SWT) that we are able to provide these services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Screens */}
            <div className="lg:hidden flex flex-col items-center bg-cover bg-center p-4 mb-2 font-serif text-center">
              <div className="relative z-20 flex flex-col justify-center items-center max-w-full">
                <div className="my-4 w-full">
                  <h2
                    className="text-white text-xl text-center"
                    data-aos="fade-down"
                    style={{ fontWeight: "bold" }}
                  >
                    Welcome to Bilal Masjid
                  </h2>
                </div>
                <div
                  className="w-[90%] sm:max-w-sm mx-auto text-justify sm:text-justify md:text-center text-white
                             text-sm leading-relaxed md:w-full md:max-w-md md:text-md sm:px-4"
                  data-aos="slide-right"
                >
                  It is our honor and high privilege to welcome you to the Bilal Masjid Web
                  site. It is through the Gracious Mercy of Allah (SWT) that we are able to
                  provide these services.
                </div>




                <div className="flex justify-center gap-4 w-full mt-4">
                  <IndexJoinUs />
                  <IndexDonateBtn />
                </div>
              </div>
            </div>



            {/* Services Section */}
            <div className="flex items-center justify-center mx-4 lg:mx-28 mb-4 text-center">
              <div className="bg-white p-4 shadow-md w-full max-w-11/2 relative z-20 4k:max-w-[1600px]">
                <div className="overflow-x-hidden">
                  <div className="flex flex-row flex-wrap justify-center items-center" data-aos="slide-left">
                    {/* Service 1 */}
                    <div className="flex flex-col gap-12 justify-center items-center p-10">
                      <div className="min-h-40 bg-mediumseagreen-300 rounded-full flex flex-col min-w-40 justify-center items-center">
                        <a href="https://www.bilalsundayschool.com/" target="_blank" rel="noopener noreferrer">
                          <img className="w-20 h-20 text-center" src="/graduation-cap@2x.png" alt="Education Icon" />
                        </a>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <a href="https://www.bilalsundayschool.com/" target="_blank" rel="noopener noreferrer">
                          <h3 className="font-bold text-2xl">Education</h3>
                        </a>
                        <p className="text-center mt-2 w-full max-w-xs">
                          We provide Islamic education to the community. We have a dedicated team of teachers who teach Quran, Hadith, and other Islamic subjects.
                        </p>
                      </div>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col gap-12 justify-center items-center p-10">
                      <div className="min-h-40 bg-mediumseagreen-300 rounded-full flex flex-col min-w-40 justify-center items-center">
                        <a href="https://chat.whatsapp.com/B8c6ngDZTkBI8RBs6JHEgm" target="_blank" rel="noopener noreferrer">
                          <img className="w-20 h-20 text-center" src="/users@2x.png" alt="Community Icon" />
                        </a>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <a href="https://chat.whatsapp.com/B8c6ngDZTkBI8RBs6JHEgm" target="_blank" rel="noopener noreferrer">
                          <h3 className="font-bold text-2xl">Community</h3>
                        </a>
                        <p className="text-center mt-2 w-full max-w-xs">
                          We provide support and services to strengthen the community. Our activities include social events, support groups, and outreach.
                        </p>
                      </div>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col gap-12 justify-center items-center p-10">
                      <div className="min-h-40 bg-mediumseagreen-300 flex flex-col min-w-40 justify-center items-center rounded-full">
                        <a href="https://us.mohid.co/or/portland/bma/masjid/online/donation" target="_blank" rel="noopener noreferrer">
                          <img className="w-20 h-20 text-center" src="/icons8-donate-50.png" alt="Religious Events Icon" />
                        </a>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <a href="https://us.mohid.co/or/portland/bma/masjid/online/donation" target="_blank" rel="noopener noreferrer">
                          <h3 className="font-bold text-2xl">Support Your Mosque</h3>
                        </a>
                        <p className="text-center mt-2 w-full max-w-xs">
                          Thanks to your generous donations, we are able to host worshippers, offer community services & distribute food to those that need it most.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Upcoming Events Button */}
        <div className="flex flex-col justify-center items-center gap-5 mt-8 z-40">
          <div
            className=" relative w-screen h-60 flex justify-center"
            style={{ backgroundImage: `url('/background.png')` }}
          >
            <div className="absolute inset-0 bg-white opacity-75"></div>
            <div className="flex justify-center items-center max-w-full my-9 z-20">
              <button
                className="bg-white rounded-full border-4 border-green-600 px-6 py-2 text-green-600 font-medium text-2xl font-jenson"
                data-aos="fade-in"
                style={{ fontWeight: 'bold' }} >
                Upcoming Events
              </button>
            </div>
          </div>
          <div className="mt-4">
            <Event />
          </div>

          {/* Services Part */}
          <div></div>
          <div className="flex flex-col justify-around items-center mt-8">
            <div
              className="relative w-screen h-60 flex justify-center mx-72 px-96"
              style={{ backgroundImage: `url('/background.png')` }}
            >
              <div className="absolute inset-0 bg-white opacity-75"></div>
              <div className="flex justify-center items-center max-w-full my-12 z-20">
                <button
                  className="bg-white whitespace-nowrap rounded-full border-4 border-green-600 px-8 py-2 text-green-600 font-medium text-2xl font-jenson"
                  data-aos="fade-in"
                  style={{ fontWeight: 'bold' }}>
                  Our Services
                </button>
              </div>
            </div>
          </div>
          <div className='bg-gray-50'>
            <Services />
          </div>

          {/* Newsletter */}
          <div className="relative w-full mb-0 py-16" style={{ backgroundImage: `url('/background.png')` }}>
            <div className="absolute inset-0 bg-white opacity-75"></div>
            <div className="relative bg-white z-10 flex flex-col shadow-md md:flex-row mx-auto max-w-2xl py-20 px-6 md:p-16 rounded-3xl mt-8 items-center justify-center md:items-start" data-aos="fade-in">
              <div className="w-full">
                <div className="flex flex-col items-center justify-center md:items-start gap-2">
                  <h2 className="font-bold text-center md:text-left text-2xl">Subscribe to our Newsletter</h2>
                  <p className="text-gray-700 text-center">Be the first one to hear about our events and announcements</p>
                </div>
                <div className="flex items-center gap-2 mt-10">
                  <input
                    className="rounded-3xl bg-slate-300 w-full md:w-60 py-2 px-4 text-black placeholder-gray-500"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="rounded-3xl bg-green-600 text-white px-4 py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full mt-0'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
