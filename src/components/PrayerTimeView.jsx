import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import './prayers.css';

const PrayerTimeView = () => {
  const [prayerData, setPrayerData] = useState([]);

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
            console.log('Parsed CSV Data:', results.data);

            // Save the entire parsed data
            setPrayerData(results.data);

            // Store the parsed data in localStorage for future access
            localStorage.setItem('prayerTimesData', JSON.stringify(results.data));
          },
          error: (error) => console.error('CSV Parsing Error:', error),
        });
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };

    fetchPrayerTimes();
  }, []);

  const openInNewTab = () => {
    const data = JSON.parse(localStorage.getItem('prayerTimesData'));

    if (data) {
      const newWindow = window.open('', '', 'width=800,height=600');
      newWindow.document.write('<html><head><title>Prayer Times</title></head><body>');
      newWindow.document.write('<h1>Prayer Times</h1>');
      newWindow.document.write('<table border="1"><thead><tr>');

      // Loop through the keys (column names) of the first row
      const columns = Object.keys(data[0]);
      columns.forEach((column) => {
        newWindow.document.write(`<th>${column}</th>`);
      });

      newWindow.document.write('</tr></thead><tbody>');

      // Loop through each row of data
      data.forEach((row) => {
        newWindow.document.write('<tr>');
        columns.forEach((column) => {
          newWindow.document.write(`<td>${row[column]}</td>`);
        });
        newWindow.document.write('</tr>');
      });

      newWindow.document.write('</tbody></table>');
      newWindow.document.write('</body></html>');
      newWindow.document.close(); // Ensure the document is properly closed
    } else {
      alert('No prayer times data available');
    }
  };

  return (
   
    <div className="prayers flex flex-col justify-center sm:flex-row w-full bg-white text-mediumseagreen-300 rounded-xl py-4 px-2 
    sm:px-8 overflow-x-hidden">
          
      {/* Right side: Prayer Times */}
      <div className="flex flex-col sm:text-right mt-4 sm:mt-0 w-full">
        <div className="overflow-x-auto max-w-full">
          <table className="w-full min-w-max border-collapse border border-mediumseagreen-300">
            {/* Table Head */}
            <thead>
              <tr className="bg-mediumseagreen-200">
                {/* Loop through columns to create table headers */}
                {Object.keys(prayerData[0] || {}).map((column) => (
                  <th key={column} className="border border-mediumseagreen-300 px-0 sm:px-2 md:px-4 py-1 sm:py-1 text-mediumseagreen-700 text-center text-[8px] sm:text-[10px] md:text-xs">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-black text-center">
              {prayerData.map((row, index) => (
                <tr key={index} className="bg-white">
                  {Object.keys(row).map((column, colIndex) => (
                    <td key={colIndex} className="border border-mediumseagreen-300 px-0 sm:px-2 py-1 sm:py-1 text-[8px] sm:text-[10px]">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default PrayerTimeView;
