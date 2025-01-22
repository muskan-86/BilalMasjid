import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const AboutUs = () => {
  return (
    <div className="font-noto-sans bg-white overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      {/* about part */}
      <div>
        <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-6">
          <div
            className="relative w-full h-40 flex justify-center mx-72 px-96"
            style={{ backgroundImage: `url('/background.png')` }}
          >
            <div className="absolute inset-0 bg-white opacity-75"></div>
            <div className="flex justify-center items-center max-w-full my-4 font-serif z-20">
              <button className="bg-white whitespace-nowrap rounded-full border-4 border-green-600 
                px-8 py-2 text-green-600 font-medium text-lg font-sans" >
                About Us
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-screen-lg mx-4 relative">
              <div className="text-left">
                <p>
                  It is our honor and high privilege to welcome you to the Bilal Masjid Web site.
                  It is through the Gracious Mercy of Allah (SWT) that we are able to provide a few humble
                  services for the community. Pray that Allah (SWT) guides us all in His Mercy and forgives
                  us our transgressions.
                </p>
                <p className="font-bold text-black text-xl">Mission</p>
                <p>
                  1) Establishing congregational prayers and carrying out other religious activities that are fully open to men, women, and children.
                  <br />
                  2) Practicing principles of moderation, tolerance, inclusiveness, and conflict avoidance within the structural limits of the Quran and Sunnah in order to create unity among Muslims.
                  <br />
                  3) Arranging educational programs for all members of the family.
                  <br />
                  4) Promoting joint action among Muslim organizations of the Greater Portland and Northwest Oregon areas.
                  <br />
                  5) Developing mutual understanding with and among non-Muslims in order to communicate effectively the principles of Islam to them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
