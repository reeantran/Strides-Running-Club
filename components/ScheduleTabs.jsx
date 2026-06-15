'use client';

import { useState, useEffect } from 'react';

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const DAY_MAP = {
  0: 'monday',   // Sunday → show Monday
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

/**
 * ScheduleTabs
 *
 * @param {object} props
 * @param {object} props.schedule - keyed by day name, value is the day's JSX/content
 *   e.g. { monday: <MondayContent />, tuesday: <TuesdayContent />, ... }
 */
export default function ScheduleTabs({ schedule }) {
  const [activeDay, setActiveDay] = useState('monday');

  // Auto-activate today's day on mount
  useEffect(() => {
    const today = new Date().getDay();
    setActiveDay(DAY_MAP[today]);
  }, []);

  return (
    <div className="max-w-content w-full mx-auto my-[50px] px-[50px] py-[50px] gap-[50px] rounded-[10px]
                    grid grid-cols-1">

      {/* Day tab buttons */}
      <div className="grid gap-[10px]"
           style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
        {DAYS.map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`
              border border-black py-3 text-[1.1em] cursor-pointer rounded-[5px]
              transition-colors duration-[650ms] text-white font-sailors capitalize
              ${activeDay === day
                ? 'bg-teal'
                : 'bg-teal-light hover:bg-teal'}
            `}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      {/* Active day content */}
      {DAYS.map(day => (
        <div
          key={day}
          className={`
            rounded-[8px] px-[30px] py-[50px] shadow-[0_4px_20px_gray] bg-[#f9f9f9]
            animate-fade-in
            ${activeDay === day ? 'block' : 'hidden'}
          `}
        >
          {schedule[day] ?? <p className="text-center">No schedule for {day}.</p>}
        </div>
      ))}
    </div>
  );
}
