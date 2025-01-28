import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import './prayers.css';

const PrayerTimeView = () => {
  const [prayerData, setPrayerData] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [pdfs, setPdfs] = useState([]); // New state to hold PDFs
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width dynamically
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const storage = getStorage();
        const csvRef = ref(storage, 'prayer_times/');

        const fileList = await listAll(csvRef);
        if (!fileList.items.length) throw new Error('No prayer times CSV found');

        const latestFile = fileList.items[fileList.items.length - 1];
        const url = await getDownloadURL(latestFile);

        setDownloadUrl(url); // Save the download URL

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

  // Fetch PDF files from Firebase Storage
  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const storage = getStorage();
        const pdfRef = ref(storage, 'prayer_pdfs/'); // Adjust the path as needed

        const fileList = await listAll(pdfRef);
        if (fileList.items.length === 0) {
          console.error('No PDFs found in the prayer_pdfs folder');
          return;
        }

        // Get the PDF file details (e.g., name and URL)
        const pdfFiles = await Promise.all(
          fileList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { name: item.name, url };
          })
        );

        setPdfs(pdfFiles); // Set the PDFs to state
      } catch (error) {
        console.error('Error fetching PDFs:', error);
      }
    };

    fetchPdfs();
  }, []);

  const handlePdfDownload = (pdf) => {
    if (!pdf.url) {
      console.error('URL is not valid:', pdf.url);
      return;
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      // For iOS devices, open the URL directly
      window.open(pdf.url, '_blank');
    } else {
      // For other devices, trigger the download
      fetch(pdf.url)
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.blob();
        })
        .then((blob) => {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = pdf.name;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => console.error('Download error:', error));
    }
  };

  // Dynamically calculate styles based on window width
  const tableStyles = {
    width: '100%',
    maxWidth: windowWidth < 700 ? '100%' : '100%', // Full width for smaller screens
    tableLayout: 'fixed', // Ensure all columns have the same width
  };

  // Adjust font size and padding based on screen size
  const cellStyles = {
    padding: windowWidth < 700 ? '4px' : '8px', // Reduced padding for smaller screens
    fontSize:
      windowWidth < 375
        ? '4px'
        : windowWidth < 600
        ? '5px'
        : windowWidth < 700
        ? '8px'
        : '10px', // Extra small text for screens < 375px
  };

  return (
    <div className="prayers flex flex-col items-center w-full bg-white text-mediumseagreen-300 rounded-xl py-4 px-2 sm:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center mb-4">
  <h2 className="text-xl font-bold text-mediumseagreen-300"> Prayer Time</h2>
  <div className="flex space-x-4"> {/* Container for both buttons */}
    {/* {downloadUrl && (
      <a
        href={downloadUrl}
        download="prayer_times.csv"
        className="bg-mediumseagreen-300 text-white px-4 py-2 rounded hover:bg-mediumseagreen-600"
      >
        Download CSV
      </a>
    )} */}
    {/* {pdfs.length > 0 && (
      <button
        className="bg-mediumseagreen-300 text-white px-4 py-2 rounded hover:bg-mediumseagreen-600"
        onClick={() => handlePdfDownload(pdfs[0])} // Assuming you are passing the pdf correctly
      >
        Download PDF
      </button>
    )} */}
  </div>
</div>

{/* PDFs Section */}
<div className="flex flex-row gap-2  mt-4 w-full">
<div className="mb-4 flex justify-start">    
{downloadUrl && (
      <a
        href={downloadUrl}
        download="prayer_times.csv"
        className="bg-mediumseagreen-300 text-white px-4 py-2 whitespace no-wrap rounded hover:bg-mediumseagreen-600 "
      >
        Download CSV
      </a>
    )} 
    </div>
  {pdfs.length > 0 && (
    <div className="mb-4 flex justify-end"> {/* Use flex and justify-end to align right */}
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index} >
            <button
              className="bg-mediumseagreen-300 text-white px-4 py-2 whitespace no-wrap rounded hover:bg-mediumseagreen-600"
              onClick={() => handlePdfDownload(pdf)}
            >
              Download PDF
            </button>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      {/* Prayer Times Table */}
      <div className="flex flex-col mt-4 w-full">
        <div className="overflow-hidden w-full">
          <table
            style={tableStyles}
            className="min-w-full table-auto border-collapse border border-mediumseagreen-300"
          >
            {/* Table Head */}
            <thead>
              <tr className="bg-mediumseagreen-200">
                {/* Loop through columns to create table headers */}
                {Object.keys(prayerData[0] || {}).map((column) => (
                  <th
                    key={column}
                    className="border border-mediumseagreen-300 text-mediumseagreen-700 text-center"
                    style={cellStyles}
                  >
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
                    <td
                      key={colIndex}
                      className="border border-mediumseagreen-300"
                      style={cellStyles}
                    >
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
