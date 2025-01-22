import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const Zakat = () => {
    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Zakat Section */}
            <div>
                <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-5">
                    <div
                        className="relative w-full h-40 flex justify-center items-center px-4"
                        style={{ backgroundImage: `url('/background.png')` }}
                    >
                        <div className="absolute inset-0 bg-white opacity-75"></div>
                        <div className="flex justify-center items-center my-12 font-serif z-20">
                            <button className="bg-white rounded-full border-4 border-green-600 px-8 py-2 text-green-600 font-medium text-2xl font-sans">
                                Zakat
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-[800px] lg:max-w-[1000px] mx-4">
                            <div className="text-left leading-relaxed">
                                <Link
                                    to="/zakat/distribution"
                                    className="block px-4 py-2 text-gray-800 hover:underline"
                                >
                                    Distribution
                                </Link>
                                <Link
                                    to="/zakat/zakat-ul-fitr"
                                    className="block px-4 py-2 text-gray-800 hover:underline"
                                >
                                    Zakat Ul Fitr
                                </Link>
                                <Link
                                    to="/zakat/whoshouldpayzakat"
                                    className="block px-4 py-2 text-gray-800 hover:underline"
                                >
                                    Who Should Pay Zakat
                                </Link>
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

export default Zakat;
