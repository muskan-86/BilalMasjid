import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx"


const Distribution = () => {

    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Funeral part */}
            <div>
                <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-6">
                    <div
                        className="relative w-full h-40 flex justify-center mx-72 px-96"
                        style={{ backgroundImage: `url('/background.png')` }}>
                        <div className="absolute inset-0 bg-white opacity-75"></div>
                        <div className="flex justify-center items-center max-w-full my-4 font-serif z-20">
                            <button className="bg-white rounded-full border-4 border-green-600 px-8 py-2 text-green-600 
                             text-lg font-noto-sans" >
                                Distribution
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" flex items-center justify-center mb-6 ">
                        <div className="bg-white p-8 rounded-3xl shadow-md w-11/12 mx-4 relative">
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-black">Zakah Distribution <br /><br/></h3>
                                <p>
                                    "Alms are for the poor and the needy, and those employed to administer the (funds); for those whose
                                    hearts have been (recently) reconciled (to the truth); for those in bondage and in debt; in the cause
                                    of Allah; and for the wayfarer: (Thus is it) ordained by Allah, and Allah is full of knowledge and
                                    wisdom." (Qur'an 9: 60) Bilal Masjid Zakah Committee, having the options furnished by this verse,
                                    selects the priorities acording to the circumstances and needs in the community, nation and in the
                                    Muslim Ummah at latge. Bilal Masjid adopted the following explanation for the eight avenues of Zakah:
                                    <br /><br/>
                                    1. The Poor <br />
                                    The poor who does not have sufficient sustenance and lives under Nisab in his/her area.
                                    <br /><br />
                                    2. The Needy<br />
                                    The person who was rendered quiet by the demeaning poverty so that he/she does not beg others for help.
                                    <br /><br />
                                    3. Zakah Collection<br />
                                    Direct expenses of the Zakah process, such as collectors, remuneration, postage, telephone, stationery, transportation.etc.
                                    <br/><br/>
                                    4. The Reconciled<br />
                                    Persons whom Muslims would like to gain on their side, as well as those who have recently
                                    adopted Islam and are in need for support.
                                    <br/><br/>
                                    5. The Oppressed <br />
                                    Captives of wars and victims of oppression, persecution and of restriction of basic freedoms
                                    and human rights, previously used to emancipate slaves.
                                    <br /><br/>
                                    6. The Insolvent<br />
                                    The person who is not able to meet his liabilities. The debtor who borrowed money to meet
                                    his or her basic requirements or to cover humanitarian case, but could not reimburse his creditors.
                                    <br /><br/>
                                    7. The Cause of Allah - The cause of Allah includes spending on causes such as Human rights and
                                    freedoms, on all deeds that serve the application of Islamic teachings and help in the understanding
                                    of Islam, the propagation of its Message, and establishing Masajids and Islamic schools and
                                    centers..etc.
                                    <br /><br/>
                                    8. The Wayfarer
                                    The person who was forced to desert his own land, the refugee who was thrown out of his country,
                                    or who immigrated under conditions of
                                    civil war in ones own country and has no access to his/her wealth.
                                    
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

export default Distribution;
