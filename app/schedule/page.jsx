import ScheduleTabs from '@/components/ScheduleTabs';
import { schedule } from '@/data/schedule';

export const metadata = { title: 'Schedule — Strides Running Club' };

export default function SchedulePage() {
  return (
    <>
      {/* Heading */}
      <div
        className="
          max-w-content w-full mx-auto
          px-[30px] pt-[4rem] pb-[2rem]
          border-b border-dashed border-black
          leading-[1.5]
          opacity-0 animate-slide-up
        "
      >
        <h1 className="font-sailors text-[2rem]">
          Here's our weekly Officer schedule!
        </h1>

        <p className="text-[1rem] leading-relaxed">
          *On Saturday, we only have one official mileage group, but commonly host unofficial longer runs over 6 miles.
        </p>
      </div>

      {/* Tabs + day content */}
      <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <ScheduleTabs scheduleData={schedule} />
      </div>
    </>
  );
}
