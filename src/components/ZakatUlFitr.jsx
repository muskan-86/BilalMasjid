import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";


const ZakatUlFitr = () => {

    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Outreach part */}
            <div>
                <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-5">
                    <div
                        className="relative w-full h-40 flex justify-center mx-72 px-96"
                        style={{ backgroundImage: `url('/background.png')` }}
                    >
                        <div className="absolute inset-0 bg-white opacity-75"></div>
                        <div className="flex justify-center items-center max-w-full my-12 font-serif z-20">
                            <button
                                className="bg-white whitespace-nowrap rounded-full border-4 border-green-600 
                                px-8 py-2 text-green-600 font-medium text-lg font-sans"
                            >
                                Zakat-Ul-Fitra
                            </button>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=" flex items-center justify-center mb-6 ">
                        <div className="bg-white p-4 rounded-xl shadow-md w-11/12 mx-4 relative">
                            <div className="text-left font-bold ">
                                Zakat-ul Fitra (Ramadan 2024)
                                <br /><br />
                            </div>
                            <div className='text-left'>
                                <p>
                                    This year the zakat is $10 a person, please&nbsp;
                                    <a href="https://us.mohid.co/or/portland/bma/masjid/online/donation/index/7"
                                        className="hover:underline text-mediumseagreen-300">
                                        click here&nbsp;
                                    </a>

                                    to pay your zakat for this year.
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

export default ZakatUlFitr;

