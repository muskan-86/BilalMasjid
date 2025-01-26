import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./output.css";
import "./EventsCalendar.css";
import Loader from "./Loader";
import Footer from "./Footer";
import Navbar from "./Navbar";
import EventForm from "./EventForm";
import WhatsAppButton from "./WhatsAppButton.jsx";
import AnnouncementButton from './AnnouncementButton.jsx';

const formatDateToMMDDYYYY = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const EventsCalendar = () => {
  const [events, setEvents] = useState([]);
  const [firestoreEvents, setFirestoreEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const calendarRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "approved_events"), (snapshot) => {
      const fetchedEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        start: doc.data().date,
        color: "#009a53",
      }));
      setFirestoreEvents(fetchedEvents);
    });

    return () => unsubscribe();
  }, []);

  const allEvents = [...events, ...firestoreEvents];

  const handleDateClick = (info) => {
    console.log("Clicked on date: ", info.dateStr);
  };

  const handleEventRequestSubmit = () => {
    console.log("Event request submitted successfully.");
    setShowForm(false);
  };

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().refetchEvents();
    }
  }, [allEvents]);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleEventClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  return (
    <div className="overflow-x-hidden">
      <div>
        {loading && <Loader />}
        <div className="relative z-50" data-aos="fade-down">
          <Navbar />
        </div>
        <div className="relative gap-2">
          {!loading && <AnnouncementButton />}
          {!loading && <WhatsAppButton />}
        </div>

        <div
          className="mb-2 relative max-w-full h-40 flex justify-center bg-cover-img"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
          <div className="flex flex-col justify-center items-center max-w-full pb-0 font-serif relative z-20">
            <button className="bg-white rounded-full border-4 border-mediumseagreen-300 px-8 py-2 text-mediumseagreen-300 font-bold text-3xl mb-6 font-sans z-20">
              Events Calendar
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col justify-center items-center">
            <button
              id="request-event-btn"
              className="bg-mediumseagreen-300 text-white px-4 py-2 rounded mx-2 mb-2"
              onClick={handleToggleForm}
            >
              Request
            </button>
            <p className="mb-4">Request to use Bilal Masjid Facilities for an Event</p>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={handleToggleForm}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <EventForm onSubmit={handleEventRequestSubmit} onClose={handleToggleForm} />
            </div>
          </div>
        )}

<div
  id="calendar-and-list"
  className="grid grid-cols-1 xl:grid-cols-2 gap-8 m-4 lg:mx-10"
>
  {/* Calendar Section */}
  <div
    className={`w-full max-h-screen overflow-y-auto ${
      window.innerWidth >= 1080 ? "xl:col-span-1" : "xl:col-span-2"
    }`}
  >
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      buttonText={{
        today: "Today",
        month: "Month",
        week: "Week",
        day: "Day",
      }}
      contentHeight="auto"
      events={allEvents.map((event) => ({ ...event, id: event.id }))}
      dateClick={handleDateClick}
      eventClick={(info) => handleEventClick(info.event.id)}
    />
  </div>

  {/* Event List Section */}
  <div
    className={`w-full bg-slate-200 p-4 rounded ${
      window.innerWidth >= 1080 ? "xl:col-span-1" : "xl:col-span-2"
    }`}
  >
    {allEvents.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold mb-2 pl-5">Event List</h2>
        <ul id="event-items" className="list-disc pl-5">
          {allEvents.map((event) => (
            <li
              key={event.id}
              className="flex items-center mb-2 cursor-pointer"
              onClick={() => handleEventClick(event.id)}
            >
              <span className="flex-grow">
                {`${event.title} - ${
                  event.start ? formatDateToMMDDYYYY(event.start) : "Invalid Date"
                }`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>




        <Footer />
      </div>
    </div>
  );
};

export default EventsCalendar;
