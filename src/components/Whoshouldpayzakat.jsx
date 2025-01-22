import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Whoshouldpayzakat = () => {
    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Zakah Section */}
            <div>
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-[800px] mx-4">
                        <div className="text-left font-bold text-xl mb-4">
                            Who Should Pay Zakah
                        </div>
                        <div className="text-left text-base leading-relaxed">
                            <p>
                                Wealth is subject to Zakah irrespective of its owner’s sex, age, maturity, or sanity.
                            </p>
                            <br />
                            <p>
                                A debtor acquiring a loan and benefiting from it is responsible for Zakah due on it.
                            </p>
                            <br />
                            <p>
                                Zakah is due on all economic goods, except for those goods acquired for personal use.
                            </p>
                            <br />
                            <p>
                                Zakatable wealth is the wealth that exceeds the exemption limit (Nisab) of the payer, calculated according to the number of their dependents and the cost of living during the previous year.
                            </p>
                            <br />
                            <p>
                                Zakah of a certain category of wealth is to be paid once in any one lunar year.
                            </p>
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
