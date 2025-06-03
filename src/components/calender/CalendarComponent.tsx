import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css';

interface CalendarComponentProps {
  onDateChange: (date: Date) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date(2025, 5, 2)); // Initialize with June 2, 2025
  const [activeStartDate, setActiveStartDate] = useState(new Date(2025, 5, 1));


  const handleDateChange = (value: any) => {
    if (value && !Array.isArray(value)) {
      setDate(value);
      onDateChange(value); 
    }
  };

  
  const handlePrevMonth = () => {
    setActiveStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setActiveStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };


  const isPrevDisabled = activeStartDate.getFullYear() <= 2024;
  const isNextDisabled = activeStartDate.getFullYear() >= 2026;

  return (
    <div className="calendar-attractive-container bg-gradient-to-br from-[#f3e8ff] to-[#e0c3fc] rounded-2xl shadow-2xl p-8 flex flex-col items-center max-w-lg mx-auto">
      <h2 className="text-3xl font-extrabold text-[#7c3aed] mb-4">Select Your Consultation Date</h2>
      <div className="flex items-center justify-center gap-6 text-[#7c3aed] text-lg font-semibold mb-4 select-none">
        <button
          aria-label="Previous month"
          className={`hover:text-[#5000ca] transition disabled:opacity-30 disabled:cursor-not-allowed`}
          onClick={handlePrevMonth}
          disabled={isPrevDisabled}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <span className="text-xl font-bold">{activeStartDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button
          aria-label="Next month"
          className={`hover:text-[#5000ca] transition disabled:opacity-30 disabled:cursor-not-allowed`}
          onClick={handleNextMonth}
          disabled={isNextDisabled}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <Calendar
        onChange={handleDateChange as any}
        value={date}
        defaultView="month"
        className="custom-calendar"
        tileContent={({ date, view }) => {
        
          const availableDates = [3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30];
          if (view === 'month' && date.getMonth() === 5 && date.getFullYear() === 2025 && availableDates.includes(date.getDate())) {
            return <span className="dot"></span>;
          }
          return null;
        }}
        tileClassName={({ date: tileDate, view }) => {
          
          if (
            view === 'month' &&
            tileDate.getDate() === date.getDate() &&
            tileDate.getMonth() === date.getMonth() &&
            tileDate.getFullYear() === date.getFullYear()
          ) {
            return 'selected-date';
          }
          return null;
        }}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate || new Date(2025, 5, 1))}
        prevLabel={null}
        nextLabel={null}
        showNeighboringMonth={false}
      />
      <style>{`
        .calendar-attractive-container {
          box-shadow: 0 8px 32px 0 rgba(80,0,202,0.15);
        }
        .custom-calendar {
          border-radius: 1rem;
          border: none;
          background: transparent;
          font-family: inherit;
        }
        .custom-calendar .react-calendar__tile--active {
          background: #7c3aed !important;
          color: #fff !important;
          border-radius: 9999px;
        }
        .custom-calendar .dot {
          display: block;
          margin: 0 auto;
          margin-top: 2px;
          width: 6px;
          height: 6px;
          background: #7c3aed;
          border-radius: 50%;
        }
        .custom-calendar .selected-date {
          background: #7c3aed !important;
          color: #fff !important;
          border-radius: 9999px;
        }
        .custom-calendar .react-calendar__tile {
          font-size: 1rem;
          padding: 0.7em 0.2em;
        }
      `}</style>
    </div>
  );
};

export default CalendarComponent;