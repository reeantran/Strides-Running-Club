'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { officers } from '@/data/officers';

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

// --- Sub-components ---

function OfficerSlot({ name, position }) {
  // Build image lookup from officers data — single source of truth
  const imageMap = useMemo(
    () => Object.fromEntries(officers.map((o) => [o.name, o.imageSrc])),
    []
  );
  const imgSrc = imageMap[name];

  return (
    <div className="text-center">
      <h4 className="font-sailors py-2">{name}</h4>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={name}
          width={200}
          height={200}
          className="w-full border border-black"
        />
      )}
      <h4 className="font-sailors py-2">{position}</h4>
    </div>
  );
}

function MileageGroup({ label, distance, front, back }) {
  return (
    <div className="text-center">
      <h2 className="font-sailors text-[1.3rem] mb-3">{label}</h2>
      <h3 className="font-sailors text-[1rem] mb-4">({distance})</h3>
      <div className="grid grid-cols-2 border-t-2 border-dotted border-black gap-[5px]">
        {front && <OfficerSlot name={front} position="Front" />}
        {back  && <OfficerSlot name={back}  position="Back"  />}
      </div>
    </div>
  );
}

function DayContent({ day }) {
  return (
    <div
      className="
        rounded-[8px] px-4 py-[50px]
        shadow-[0_4px_20px_gray] bg-[#f9f9f9]
        animate-fade-in
      "
    >
      <div
        className="grid gap-[15px] text-center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
      >
        {day.groups.map((group) => (
          <MileageGroup key={group.label} {...group} />
        ))}
      </div>
    </div>
  );
}

// --- Main component ---

export default function ScheduleTabs({ scheduleData }) {
  const [activeDay, setActiveDay] = useState('monday');

  useEffect(() => {
    const today = new Date().getDay();
    setActiveDay(DAY_MAP[today]);
  }, []);

  return (
    <div className="max-w-content w-full mx-auto my-[50px] px-4 flex flex-col gap-[50px]">

      {/* Day tab buttons */}
      <div
        className="grid gap-[10px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}
      >
        {DAYS.map((day) => {
          const dayData = scheduleData[day];
          return (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`
                border border-black py-3 text-[1.1em] cursor-pointer rounded-[5px]
                transition-colors duration-[650ms] text-white font-sailors capitalize
                ${activeDay === day ? 'bg-teal' : 'bg-teal-light hover:bg-teal'}
              `}
            >
              <span className="block">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
              {dayData?.time && (
                <span className="block text-[0.7em] opacity-80 font-quicksand">
                  {dayData.time}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active day panel */}
      {scheduleData[activeDay] && (
        <DayContent key={activeDay} day={scheduleData[activeDay]} />
      )}
    </div>
  );
}
