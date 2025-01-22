import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const ZakatUlFitr = () => {
    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Zakat-ul-Fitr Section */}
            <div>
                <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-5">
                    <div
                        className="relative w-full h-40 flex justify-center items-center px-4"
                        style={{ backgroundImage: `url('/background.png')` }}
                    >
                        <div className="absolute inset-0 bg-white opacity-75"></div>
                        <div className="flex justify-center items-center z-20">
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
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-[800px] lg:max-w-[1000px] mx-4">
                            <div className="text-left font-bold text-xl mb-4">
                                Zakat-ul Fitra (Ramadan 2024)
                            </div>
                            <div className="text-left">
                                <p>
                                    This year the zakat is $10 per person. Please&nbsp;
                                    <a
                                        href="https://us.mohid.co/or/portland/bma/masjid/online/donation/index/7"
                                        className="hover:underline text-green-600"
                                    >
                                        click here
                                    </a>
                                    &nbsp;to pay your zakat for this year.
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
