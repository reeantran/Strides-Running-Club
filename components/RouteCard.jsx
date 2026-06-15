import Image from 'next/image';

// Maps rarity → Tailwind classes derived from tailwind.config.js custom values
const RARITY_STYLES = {
  common: {
    info:  'bg-rarity-common shadow-common',
    group: 'bg-rarity-common shadow-common',
  },
  uncommon: {
    info:  'bg-rarity-uncommon shadow-uncommon',
    group: 'bg-rarity-uncommon shadow-uncommon',
  },
  rare: {
    info:  'bg-rarity-rare shadow-rare',
    group: 'bg-rarity-rare shadow-rare',
  },
  epic: {
    info:  'bg-rarity-epic shadow-epic',
    group: 'bg-rarity-epic shadow-epic',
  },
  legendary: {
    info:  'bg-rarity-legendary shadow-legendary',
    group: 'bg-rarity-legendary shadow-legendary',
  },
  golden: {
    info:  'bg-golden-gradient shadow-golden',
    group: 'bg-golden-gradient shadow-golden',
  },
};

/**
 * RouteCard
 *
 * @param {object} props
 * @param {string} props.rarity     - 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'golden'
 * @param {string} props.cardImage  - path to the card art image
 * @param {string} props.mapUrl     - link to onthegomap route (null if no map)
 * @param {string} props.mapImage   - path to map screenshot (null if no map)
 * @param {string} props.artCredit  - art credit text
 * @param {string} props.description - route description
 */
export default function RouteCard({
  rarity = 'common',
  cardImage,
  mapUrl,
  mapImage,
  artCredit,
  description,
}) {
  const styles = RARITY_STYLES[rarity] ?? RARITY_STYLES.common;
  const isGolden = rarity === 'golden';

  return (
    <div className={isGolden ? 'md:max-w-[500px] md:mx-auto w-full' : 'w-full'}>
      {/* Card art */}
      <Image
        src={cardImage}
        alt={`${rarity} route card`}
        width={384}
        height={384}
        className="w-full h-auto"
      />

      {/* Route info panel */}
      <div
        className={`
          grid grid-cols-2 items-stretch justify-self-center
          mx-auto w-full rounded-[20px] p-[10px] gap-[10px]
          text-white font-bold text-center
          ${styles.info}
        `}
      >
        {/* Left: map or placeholder */}
        <div>
          {mapUrl && mapImage ? (
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={mapImage}
                alt="Route map"
                width={200}
                height={200}
                className="w-full h-auto rounded-[20px] mt-[10px] border-[3px] border-white
                           hover:border-[5px] hover:border-teal transition-all"
              />
            </a>
          ) : (
            <div className="w-full h-auto border-[8px] border-white rounded-[20px] mt-[10px] text-[1rem] p-[15px]">
              No map available
            </div>
          )}
        </div>

        {/* Right: art credit + description */}
        <div className="grid grid-rows-[1fr_auto] h-full">
          <p className="leading-[1.5] p-2 border-[3px] border-white rounded-[20px] overflow-y-auto h-full text-[0.8rem] md:text-[0.9rem] md:p-[0.8rem]">
            {description}
          </p>
          {artCredit && (
            <figcaption className="text-center m-[5px] font-bold text-[0.8rem]">
              {artCredit}
            </figcaption>
          )}
        </div>
      </div>
    </div>
  );
}
