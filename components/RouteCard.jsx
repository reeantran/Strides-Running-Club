import Image from 'next/image';

const RARITY_STYLES = {
  common: 'bg-rarity-common shadow-common',
  uncommon: 'bg-rarity-uncommon shadow-uncommon',
  rare: 'bg-rarity-rare shadow-rare',
  epic: 'bg-rarity-epic shadow-epic',
  legendary: 'bg-rarity-legendary shadow-legendary',
  golden: 'bg-golden-gradient shadow-golden',
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
    <div className={isGolden ? 'md:max-w-[900px] md:mx-auto w-full' : 'w-full'}>
      <div
        className={`rounded-[20px] p-2.5 text-white font-bold ${colorClasses}`}
      >
        <div className="grid md:grid-cols-[1fr_1fr] gap-[10px]">

          {/* LEFT SIDE - Card Art */}
          <div>
            <Image
              src={cardImage}
              alt={`${rarity} route card`}
              width={384}
              height={384}
              className="w-full h-auto rounded-[10px]"
            />
            {/* Art Credit */}
            {artCredit && (
              <figcaption className="py-1 text-center text-[0.6rem]">
                {artCredit}
              </figcaption>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-[10px] h-full">

            {/* Map */}
            <div>
              {mapUrl && mapImage ? (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <div className="border-[3px] border-white rounded-[20px] p-4">
                  No map available
                </div>
              )}
            </div>
            
            <div>
                {/* Description */}
                <div className="border-t-[2px] border-white p-2 flex-1">
                  <p className="leading-snug text-[0.75rem] md:text-[0.6rem] text-center">
                    {description}
                  </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}