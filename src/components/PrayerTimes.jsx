import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import {Link} from 'react-router-dom';

const PrayerTimes = () => {
    const [todayData, setTodayData] = useState({});

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const storage = getStorage();
                const csvRef = ref(storage, 'prayer_times/');

                const fileList = await listAll(csvRef);
                if (!fileList.items.length) throw new Error('No prayer times CSV found');

                const latestFile = fileList.items[fileList.items.length - 1];
                const url = await getDownloadURL(latestFile);

                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch CSV file');

                const text = await response.text();
                Papa.parse(text, {
                    header: true,
                    complete: (results) => {
                        console.log('Parsed CSV Data:', results.data); // Log the parsed CSV data
                        const now = new Date();
                        const todayDate = now.getDate();

                        const todayTimes = results.data.find((time) => {
                            const dateValue = time?.Date?.trim();
                            return dateValue && parseInt(dateValue, 10) === todayDate;
                        });

                        if (todayTimes) {
                            console.log('Found prayer times for today:', todayTimes);
                            setTodayData(todayTimes);
                        } else {
                            console.warn('No prayer times for today found');
                        }
                    },
                    error: (error) => console.error('CSV Parsing Error:', error),
                });
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        fetchPrayerTimes();
    }, []);

    // Log the current state of todayData to check if Iqama times are set correctly
    console.log(todayData);

    return (
        <div className="flex flex-col justify-center sm:flex-row w-full bg-white text-mediumseagreen-300 rounded-xl
         py-8 px-4 sm:px-16 overflow-x-hidden">
            {/* Left side: Header */}
            <div className="flex flex-col sm:w-1/2 text-left mb-4 sm:mb-0 pl-4 sm:pl-12">
                <h1 className="text-lg xl:text-xl md:text-sm font-bold text-mediumseagreen-300">
                    {new Date().toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}{' '}
                    - {todayData.Islamic || 'Islamic Date'}
                </h1>
                {/* <p>
                    <KhateebSchedule/>
                </p> */}
                <p className="text-mediumseagreen-300 text-sm sm:text-sm">
                    <Link to="/khateeb-schedule">Jummah Time: {todayData.Jummah1 || '1:30'} & {todayData.Jummah2 || '2:00'}</Link>
                </p>
            </div>

            {/* Right side: Prayer Times */}
            <div className="flex flex-col sm:text-right mt-4 sm:mt-0">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max">
                        <thead>
                            <tr className="text-xs md:text-sm sm:text-sm">
                                <th className="px-4 py-1 text-mediumseagreen-300">Fajr</th>
                                <th className="px-3 py-1 text-mediumseagreen-300">Duhr</th>
                                <th className="px-6 py-1 text-mediumseagreen-300">Asr</th>
                                <th className="px-1 py-1 text-mediumseagreen-300">Maghrib</th>
                                <th className="px-4 py-1 text-mediumseagreen-300">Isha</th>
                            </tr>
                        </thead>
                        <tbody className="text-black">
                            {/* Adhan Times */}
                            <tr className="text-xs md:text-sm sm:text-sm">
                                <td className="px-3 py-1">{todayData.Fajr}</td>
                                <td className="px-3 py-1">{todayData.Duhr}</td>
                                <td className="px-3 py-1">{todayData.Asr}</td>
                                <td className="px-4 py-1">{todayData.Maghrib}</td>
                                <td className="px-3 py-1">{todayData.Isha}</td>
                            </tr>
                            {/* Iqama Times */}
                            <tr className="text-xs md:text-sm sm:text-sm">
                                <td className="px-3 py-2">{todayData['Fajr Iqama']}</td>
                                <td className="px-3 py-2">{todayData['Duhr Iqama']}</td>
                                <td className="px-3 py-2">{todayData['Asr Iqama']}</td>
                                <td className="px-4 py-2">{todayData['Maghrib Iqama']}</td>
                                <td className="px-3 py-2">{todayData['Isha Iqama']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PrayerTimes;
