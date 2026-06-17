import RouteCard from '@/components/RouteCard';

export default function CardTierPage({ rarity, heading, cards, blurb }) {
  return (
    <>
      <div
        className="
          max-w-content w-full mx-auto block leading-relaxed
          px-4 py-4
          opacity-0 animate-slide-up
        "
      >
        <h1 className="font-sailors text-[2rem] mb-3">{heading}</h1>
        {blurb && <p className="text-[1rem]">{blurb}</p>}
      </div>

      <div
        className="
          max-w-content w-full mx-auto my-[50px] px-4
          grid gap-[30px]
          opacity-0 animate-slide-up
        "
        style={{
          /* min(384px, 100%) prevents columns from exceeding container width on small screens */
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(384px, 100%), 1fr))',
          animationDelay: '0.1s',
        }}
      >
        {cards.map((card) => (
          <RouteCard key={card.name} rarity={rarity} {...card} />
        ))}
      </div>
    </>
  );
}
