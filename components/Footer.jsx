import Image from 'next/image';

const SOCIAL_LINKS = [
  {
    href: 'https://discord.com/invite/s2946u3jJx',
    src: '/images/logos/discord-logo.png',
    alt: 'Discord',
  },
  {
    href: 'https://www.strava.com/clubs/strides-running-club-256952',
    src: '/images/logos/strava-logo.png',
    alt: 'Strava',
  },
  {
    href: 'https://instagram.com/stridesatucsd',
    src: '/images/logos/instagram-logo.png',
    alt: 'Instagram',
  },
  {
    href: 'https://www.youtube.com/@stridesatucsd',
    src: '/images/logos/youtube-logo.png',
    alt: 'YouTube',
  },
  {
    href: 'https://linktr.ee/stridesatucsd',
    src: '/images/logos/linktree-logo.png',
    alt: 'LinkTree',
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-white py-12 leading-loose">
      <div className="max-w-content w-full mx-auto px-4 pt-4 border-t border-dashed border-black">
        <h2 className="font-sailors text-[2rem] mb-6 text-center">
          Connect With Us!
        </h2>

        <div className="flex flex-wrap justify-center gap-[30px] min-h-[50px]">
          {SOCIAL_LINKS.map(({ href, src, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={src}
                alt={`${alt} Logo`}
                width={50}
                height={50}
                className="w-[50px] hover:scale-125 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}