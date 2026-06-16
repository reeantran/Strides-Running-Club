import Image from 'next/image';

/**
 * OfficerCard
 *
 * @param {object}  props
 * @param {string}  props.name          - Officer's first name
 * @param {string}  props.favoriteRoute - Officer's favorite route
 * @param {string}  props.imageSrc      - Path to officer photo
 * @param {boolean} props.principal     - Applies teal border variant
 */
export default function OfficerCard({ name, favoriteRoute, imageSrc, principal = false }) {
  return (
    <div
      className={`
        rounded-[10px] mx-[30px] my-[30px] flex flex-col items-center justify-self-center
        bg-officer-card shadow-officer overflow-hidden relative
        border-4 ${principal ? 'border-officer-border' : 'border-white'}
      `}
    >
      {/* Photo */}
      <div className="overflow-hidden w-full">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Name */}
      <h1 className="px-[15px] py-[15px] text-center font-sailors leading-[1.1] break-words
                     text-[clamp(1.2rem,2.5vw,1.75rem)]">
        {name}
      </h1>

      {/* Favorite route */}
      <h3 className="px-[10px] pb-[10px] text-center font-sailors leading-[1.2] break-all
                     text-[clamp(0.95rem,1.8vw,1rem)]">
        {favoriteRoute}
      </h3>
    </div>
  );
}
