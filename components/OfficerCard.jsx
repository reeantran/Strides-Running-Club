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
        rounded-[10px] mx-4 px-4 my-4 flex flex-col items-center justify-self-center
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
      <h1 className="py-4 text-center font-sailors leading-[1.1]
                     text-[2.75rem] md:text-[1.5rem]">
        {name}
      </h1>

      {/* Favorite route */}
      <h3 className="pb-3 text-center font-sailors leading-[1.2]
                     text-[2.5rem] md:text-[1rem]">
        {favoriteRoute}
      </h3>
    </div>
  );
}
