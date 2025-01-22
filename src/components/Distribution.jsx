import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Distribution = () => {
    return (
        <div className="font-noto-sans bg-white overflow-x-hidden">
            <div>
                <Navbar />
            </div>
            {/* Distribution Section */}
            <div>
                <div className="flex flex-col justify-around items-center gap-5 mt-8 mb-6">
                    <div
                        className="relative w-full h-40 flex justify-center items-center"
                        style={{ backgroundImage: `url('/background.png')` }}
                    >
                        <div className="absolute inset-0 bg-white opacity-75"></div>
                        <div className="flex justify-center items-center max-w-full font-serif z-20">
                            <button
                                className="bg-white rounded-full border-4 border-green-600 px-8 py-2 text-green-600 
                                 text-lg font-noto-sans"
                            >
                                Distribution
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-[800px] mx-4">
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-black mb-4">Zakah Distribution</h3>
                                <div className="text-left text-base leading-relaxed">
                                    <p>
                                        "Alms are for the poor and the needy, and those employed to administer the (funds); for those whose
                                        hearts have been (recently) reconciled (to the truth); for those in bondage and in debt; in the cause
                                        of Allah; and for the wayfarer: (Thus is it) ordained by Allah, and Allah is full of knowledge and
                                        wisdom." (Qur'an 9: 60)
                                    </p>
                                    <br />
                                    <p>
                                        Bilal Masjid Zakah Committee, having the options furnished by this verse, selects the priorities
                                        according to the circumstances and needs in the community, nation, and in the Muslim Ummah at large.
                                        Bilal Masjid adopted the following explanation for the eight avenues of Zakah:
                                    </p>
                                    <br />
                                    <ul className="list-disc list-inside space-y-4">
                                        <li>
                                            <strong>The Poor:</strong> The poor who does not have sufficient sustenance and lives under
                                            Nisab in his/her area.
                                        </li>
                                        <li>
                                            <strong>The Needy:</strong> The person who was rendered quiet by the demeaning poverty so that
                                            he/she does not beg others for help.
                                        </li>
                                        <li>
                                            <strong>Zakah Collection:</strong> Direct expenses of the Zakah process, such as collectors,
                                            remuneration, postage, telephone, stationery, transportation, etc.
                                        </li>
                                        <li>
                                            <strong>The Reconciled:</strong> Persons whom Muslims would like to gain on their side, as well
                                            as those who have recently adopted Islam and are in need of support.
                                        </li>
                                        <li>
                                            <strong>The Oppressed:</strong> Captives of wars and victims of oppression, persecution, and
                                            restrictions of basic freedoms and human rights, previously used to emancipate slaves.
                                        </li>
                                        <li>
                                            <strong>The Insolvent:</strong> The person who is not able to meet their liabilities. The debtor
                                            who borrowed money to meet basic requirements or to cover a humanitarian case, but could not
                                            reimburse creditors.
                                        </li>
                                        <li>
                                            <strong>The Cause of Allah:</strong> Includes spending on causes such as human rights and
                                            freedoms, deeds that serve the application of Islamic teachings, understanding Islam, propagating
                                            its message, and establishing masajids and Islamic schools and centers.
                                        </li>
                                        <li>
                                            <strong>The Wayfarer:</strong> A person forced to desert their land, a refugee thrown out of their
                                            country, or someone who immigrated due to civil war in their country and has no access to their wealth.
                                        </li>
                                    </ul>
                                </div>
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
