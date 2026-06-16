import RouteCard from '@/components/RouteCard';

/**
 * CardTierPage
 * Shared layout for all rarity-tier card pages.
 *
 * @param {object}   props
 * @param {string}   props.rarity   - 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'golden'
 * @param {string}   props.heading  - Page heading text
 * @param {Array}    props.cards    - Array of card data objects
 * @param {string}  [props.blurb]   - Optional intro paragraph below the heading
 */
export default function CardTierPage({ rarity, heading, cards, blurb }) {
  return (
    <>
      {/* Heading + optional blurb */}
      <div
        className="
          max-w-content w-full mx-auto block leading-relaxed
          px-[50px] py-[30px]
          opacity-0 animate-slide-up
        "
      >
        <h1 className="font-sailors text-[2rem] mb-3">{heading}</h1>
        {blurb && <p className="text-[1rem]">{blurb}</p>}
      </div>

      {/* Card grid */}
      <div
        className="
          max-w-content w-full mx-auto my-[50px] px-12
          grid gap-[30px]
          opacity-0 animate-slide-up
        "
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(384px, 1fr))',
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
