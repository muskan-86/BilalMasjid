import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import {Link} from 'react-router-dom';
import "./prayers.css";

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
        <div className=" prayers flex flex-col justify-center sm:flex-row w-full bg-white text-mediumseagreen-300 rounded-xl
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
                    <Link to="/khateeb-schedule">Jummah Time: {todayData.Jummah1 || '12:30'} & {todayData.Jummah2 || '1:45'}</Link>
                </p>
            </div>

            {/* Right side: Prayer Times */}
            <div className="flex flex-col sm:text-right mt-4 sm:mt-0">
    <div className="overflow-x-auto">
        <table className="w-full min-w-max">
            {/* Table Head */}
            <thead>
                <tr className="bg-mediumseagreen-200">
                    <th className="px-1 sm:px-3 md:px-6 py-1 sm:py-2 text-mediumseagreen-700 text-center text-[10px] sm:text-xs md:text-sm">
                        Fajr
                    </th>
                    <th className="px-1 sm:px-3 md:px-5 py-1 sm:py-2 text-mediumseagreen-700 text-center text-[10px] sm:text-xs md:text-sm">
                        Duhr
                    </th>
                    <th className="px-1 sm:px-3 md:px-6 py-1 sm:py-2 text-mediumseagreen-700 text-center text-[10px] sm:text-xs md:text-sm">
                        Asr
                    </th>
                    <th className="px-1 sm:px-2 md:px-3 py-1 sm:py-2 text-mediumseagreen-700 text-center text-[10px] sm:text-xs md:text-sm">
                        Maghrib
                    </th>
                    <th className="px-1 sm:px-3 md:px-5 py-1 sm:py-2 text-mediumseagreen-700 text-center text-[10px] sm:text-xs md:text-sm">
                        Isha
                    </th>
                </tr>
            </thead>
            {/* Table Body */}
            <tbody className="text-black text-center">
                {/* Adhan Times */}
                <tr className="bg-white">
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData.Fajr}</td>
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData.Duhr}</td>
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData.Asr}</td>
                    <td className="px-1 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData.Maghrib}</td>
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData.Isha}</td>
                </tr>
                {/* Iqama Times */}
                <tr className="bg-white">
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData['Fajr Iqama']}</td>
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData['Duhr Iqama']}</td>
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData['Asr Iqama']}</td>
                    <td className="px-1 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData['Maghrib Iqama']}</td>
                    <td className="px-1 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs">{todayData['Isha Iqama']}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>



        </div>
    );
};

export default PrayerTimes;
