import OfficerCard from '@/components/OfficerCard';
import { officers } from '@/data/officers';

export const metadata = { title: 'Officers — Strides Running Club' };

export default function OfficersPage() {
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
          Meet Your 2025-26 Officers and find out their favorite route!
        </h1>
      </div>

      {/* Officer grid */}
      <div
        className="
          max-w-content w-full mx-auto my-[50px] px-[30px]
          grid gap-0
          opacity-0 animate-slide-up
        "
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          animationDelay: '0.1s',
        }}
      >
        {officers.map((officer) => (
          <OfficerCard key={officer.name} {...officer} />
        ))}
      </div>
    </>
  );
}
