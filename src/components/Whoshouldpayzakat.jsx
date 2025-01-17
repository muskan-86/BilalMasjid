import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Whoshouldpayzakat = () => {

    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Outreach part */}
            <div>
                {/* <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-5">
                    <div
                        className="relative w-full h-40 flex justify-center mx-72 px-96"
                        style={{ backgroundImage: `url('/background.png')` }}
                    >
                        <div className="absolute inset-0 bg-white opacity-75"></div>
                        <div className="flex justify-center items-center max-w-full my-12 font-serif z-20">
                            <button className="bg-white rounded-full border-4 border-green-600 px-8 py-2 text-green-600 font-medium text-2xl font-sans" >
                                Zakat-Ul-Fitra
                            </button>
                        </div>
                    </div>
                </div> */}
                <div>
                    <div className=" flex items-center justify-center mb-6 ">
                        <div className="bg-white p-4 rounded-xl shadow-md w-11/12 mx-4 relative">
                            <div className="text-left font-bold text-2xl">
                                Who Should Pay Zakah
                                <br /><br />
                            </div>
                            <div className='text-left'>
                                <p>
                                    Wealth is subject to Zakah irrespective of its owner??s sex, age, maturity, or sanity.
                                    <br /><br />
                                    A debtor acquiring a loan and benefiting from it, is responsible for Zakah due on it.
                                    <br /><br />
                                    Zakah is due on all economic goods, except for those goods acquired for personal use.
                                    <br /><br />
                                    Zakatable wealth is the wealth that exceeds the exemption limit (Nisab) of the payer, calculated according to the number of his/her dependents and the cost of living during the previous year.
                                    <br /><br />
                                    Zakah of a certain category of wealth is to be paid once in any one lunar year.
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

export default Whoshouldpayzakat;

