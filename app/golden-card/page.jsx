import RouteCard from '@/components/RouteCard';
import { goldenCard } from '@/data/cards/golden';

export const metadata = { title: 'The Golden Card — Strides Running Club' };

export default function GoldenCardPage() {
  return (
    <>
      <div
        className="
          max-w-content w-full mx-auto block leading-relaxed
          px-[50px] py-[30px]
          opacity-0 animate-slide-up
        "
      >
        <h1 className="font-sailors text-[2rem] mb-1">Finished every route?</h1>
        <h1 className="font-sailors text-[2rem] mb-3">Collect the Golden Card!</h1>
        <p className="text-[1rem] mt-2 font-bold">No map, just run all the others!</p>
      </div>

      {/* Single centered card */}
      <div
        className="
          max-w-content w-full mx-auto my-[50px] px-12
          opacity-0 animate-slide-up
        "
        style={{ animationDelay: '0.1s' }}
      >
        <RouteCard rarity="golden" {...goldenCard} />
      </div>
    </>
  );
}
