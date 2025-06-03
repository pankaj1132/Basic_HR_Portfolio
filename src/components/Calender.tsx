import  { useState } from 'react';
import CalendarComponent from './calender/CalendarComponent';

const calendlyUrl = "https://calendly.com/your-username/free-consultation"; // Replace with your actual Calendly link

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 2)); // Initialize with June 2, 2025

  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-7xl border border-blue-600 rounded-2xl p-10 flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Section */}
        <section className="flex-1 max-w-[400px]">
          <div className="flex justify-between items-center mb-4 border-b border-blue-600 pb-1">
            <h2 className="text-blue-700 font-semibold text-lg md:text-xl">Pick your spot</h2>
            <button className="text-blue-600 text-sm font-semibold flex items-center gap-1">
              Time zone: Pacific Daylight Time (PDT)
              <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
          </div>
          <CalendarComponent onDateChange={setSelectedDate} />
        </section>

        {/* Middle Section */}
        <section className="flex-1 max-w-[350px] flex flex-col justify-start gap-6">
          <h3 className="text-blue-700 font-semibold text-lg md:text-xl border-b border-blue-600 pb-1">
            Availability for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </h3>
          <p className="text-blue-600 text-base md:text-lg font-normal">No availability</p>
          <button className="w-full max-w-[280px] border border-blue-600 rounded-full py-2.5 px-6 text-blue-600 text-lg font-normal hover:bg-blue-50 transition self-start">
            Check Next Availability
          </button>
        </section>

        {/* Right Section */}
        <section className="flex-1 max-w-[300px] flex flex-col justify-start gap-6">
          <h3 className="text-blue-700 font-semibold text-lg md:text-xl border-b border-blue-600 pb-1">Service Details</h3>
          <p className="text-blue-600 text-base md:text-lg font-normal">Free Consultation</p>
          <button
            className="w-full max-w-[280px] bg-blue-500 rounded-full py-3 px-6 text-white text-lg font-normal hover:bg-blue-600 transition self-start"
            onClick={() => window.location.href = calendlyUrl}
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
};

export default Calendar;