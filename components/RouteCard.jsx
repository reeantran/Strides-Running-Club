import Image from 'next/image';

const RARITY_STYLES = {
  common:    'bg-rarity-common    shadow-common',
  uncommon:  'bg-rarity-uncommon  shadow-uncommon',
  rare:      'bg-rarity-rare      shadow-rare',
  epic:      'bg-rarity-epic      shadow-epic',
  legendary: 'bg-rarity-legendary shadow-legendary',
  golden:    'bg-golden-gradient  shadow-golden',
};

export default function RouteCard({
  rarity = 'common',
  cardImage,
  mapUrl,
  mapImage,
  artCredit,
  description,
}) {
  const colorClasses = RARITY_STYLES[rarity] ?? RARITY_STYLES.common;
  const isGolden = rarity === 'golden';

  return (
    // No px here — padding comes from the CardTierPage grid container
    <div className={isGolden ? 'md:max-w-[900px] md:mx-auto w-full' : 'w-full'}>
      <div className={`rounded-[20px] p-[10px] text-white font-bold ${colorClasses}`}>
        <div className="grid grid-cols-2 gap-[10px]">

          {/* LEFT: card art + credit */}
          <div>
            <Image
              src={cardImage}
              alt={`${rarity} route card`}
              width={384}
              height={384}
              className="w-full h-auto rounded-[10px]"
            />
            {artCredit && (
              <figcaption className="pt-2 text-center text-[0.7rem]">
                {artCredit}
              </figcaption>
            )}
          </div>

          {/* RIGHT: map + description */}
          <div className="flex flex-col gap-[10px]">
            <div>
              {mapUrl && mapImage ? (
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={mapImage}
                    alt="Route map"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-[20px] border-[3px] border-white
                               hover:border-[5px] hover:border-teal transition-all"
                  />
                </a>
              ) : (
                <div className="border-[3px] border-white rounded-[20px] p-[15px]">
                  No map available
                </div>
              )}
            </div>
            <div className="border-t-[2px] border-white pt-[10px]">
              <p className="leading-snug text-[0.8rem] md:text-[0.65rem] text-center">
                {description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
