import Image from 'next/image';
import Link from 'next/link';

const ABOUT_SECTIONS = [
  {
    heading: 'Who are we?',
    text: "We're a social, casual distance running club at UCSD for runners of all skill levels — from beginners who are just interested in giving it a try, to seasoned athletes training for big races! You'll almost always have someone to run with and you're guaranteed to make a few new friends. We also run in local races and host a variety of social events.",
  },
  {
    heading: 'Where can you find us?',
    text: 'We meet every weekday (Monday thru Friday) at 4:00 PM, and Saturdays at 9:00 AM. We meet at the front of Shake Smart. And then we take around 10 minutes after we all meet up to start the run.',
  },
  {
    heading: 'All Paces Welcome!',
    text: "No matter your pace, you'll always have someone to run with. We'll have groups but we make sure no one is ever left alone. Walking, jogging, sprinting, skipping, whatever you might find yourself doing, you'll fit in!",
  },
  {
    heading: 'How can I get involved?',
    text: "Just coming to the runs/events, and getting to know everyone is a good way to get involved, no membership required! Stay up-to-date through our various social media platforms. We also open officer applications every quarter, and we have a big-little program! You can find our social media platforms at the bottom of our website, or through our LinkTree.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="
          max-w-content w-full mx-auto my-[50px] px-[30px]
          grid grid-cols-1 md:grid-cols-[1fr_2fr] min-h-[90vh]
          opacity-0 translate-y-[50px] animate-slide-up
        "
      >
        {/* Left: headline + CTA */}
        <div className="homepage-content flex flex-col justify-center md:text-left text-center">
          <h1 className="font-sailors text-[4rem] md:text-[4rem] text-[2.5rem] mb-6 leading-none">
            Strides<br />Running<br />Club
          </h1>

          <a href="#about-us" className="self-start md:self-start self-center">
            <button
              className="
                relative text-[1rem] bg-teal px-[30px] py-[15px] border-none
                rounded-[5px] text-white mt-8 cursor-pointer overflow-hidden
                transition-colors duration-300
                after:content-[''] after:absolute after:top-0 after:left-0
                after:w-0 after:h-full after:bg-teal-light after:transition-all
                after:duration-300 after:rounded-[5px]
                hover:after:w-full
              "
            >
              <span className="relative z-10 font-sailors text-white no-underline">
                About Us
              </span>
            </button>
          </a>
        </div>

        {/* Right: hero image */}
        <div className="text-center mt-8 md:mt-0">
          <Image
            src="/images/strides-group.jpg"
            alt="Group Pic"
            width={900}
            height={600}
            className="h-full w-full rounded-[10px] shadow-hero-img object-cover"
            priority
          />
        </div>
      </section>

      {/* ── About Us ── */}
      <section
        id="about-us"
        className="
          max-w-content w-full mx-auto my-[50px] px-[30px]
          grid grid-cols-1 sm:grid-cols-2
          opacity-0 translate-y-[50px] animate-slide-up
        "
        style={{ animationDelay: '0.15s' }}
      >
        {ABOUT_SECTIONS.map(({ heading, text }) => (
          <div key={heading}>
            <h2 className="font-sailors text-[2rem] text-center py-5 px-[30px]">
              {heading}
            </h2>
            <p className="text-[1rem] px-10 leading-[1.35] tracking-wide">
              {text}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
