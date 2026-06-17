import Link from 'next/link';

export const metadata = { title: 'Route Cards — Strides Running Club' };

const TIERS = [
  { label: 'Common Cards',    href: '/common-cards',    rarity: 'common' },
  { label: 'Uncommon Cards',  href: '/uncommon-cards',  rarity: 'uncommon' },
  { label: 'Rare Cards',      href: '/rare-cards',      rarity: 'rare' },
  { label: 'Epic Cards',      href: '/epic-cards',      rarity: 'epic' },
  { label: 'Legendary Cards', href: '/legendary-cards', rarity: 'legendary' },
  { label: 'The Golden Card', href: '/golden-card',     rarity: 'golden' },
];

const RARITY_CLASSES = {
  common:    'bg-rarity-common    shadow-common',
  uncommon:  'bg-rarity-uncommon  shadow-uncommon',
  rare:      'bg-rarity-rare      shadow-rare',
  epic:      'bg-rarity-epic      shadow-epic',
  legendary: 'bg-rarity-legendary shadow-legendary',
  golden:    'bg-golden-gradient  shadow-golden',
};

export default function CardsPage() {
  return (
    <>
      <div
        className="
          max-w-content w-full mx-auto block leading-relaxed
          px-[30px] py-[30px]
          opacity-0 animate-slide-up
        "
      >
        <h1 className="font-sailors text-[2rem] mb-3">Welcome to the Route Cards</h1>
        <h2 className="font-sailors text-[1.5rem] mb-2">What are the route cards?</h2>
        <p className="text-[1rem] leading-relaxed">
          Looking at the cards on our website, you're able to see what the route card looks like,
          the art credits, the route's description, and a clickable map (takes you to the onthegomap
          site for the route for easier visual access). Route must be done at an official or unofficial
          run (organized via Discord) in order to count for a card.
        </p>
      </div>

      <div
        className="
          max-w-content w-full mx-auto my-[20px] px-[30px]
          grid gap-[30px]
          opacity-0 animate-slide-up
        "
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
          animationDelay: '0.1s',
        }}
      >
        {TIERS.map(({ label, href, rarity }) => (
          <div
            key={rarity}
            className={`
              rounded-[20px] text-center flex items-center justify-center
              h-[100px] border-4 border-white
              ${RARITY_CLASSES[rarity]}
            `}
          >
            <Link
              href={href}
              className="text-white no-underline font-sailors hover:scale-110 transition-transform duration-300"
              style={{ textShadow: '0 0 2px black' }}
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
