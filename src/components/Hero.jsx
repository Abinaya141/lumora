// const marqueeItems = [
//   "Free shipping over $75",
//   "New arrivals every week",
//   "Easy 30-day returns",
//   "Made to be worn for years",
//   "Take 15% off with LUMORA15",
// ];

// function Marquee() {
//   const track = marqueeItems.map((text) => (
//     <li key={text} className="flex items-center gap-10 pr-10">
//       <span className="font-display text-lg italic sm:text-xl">{text}</span>
//       <span className="h-1.5 w-1.5 rotate-45 bg-clay" aria-hidden="true" />
//     </li>
//   ));
//   return (
//     <div
//       className="group overflow-hidden bg-ink py-4 text-white"
//       aria-label="Store highlights"
//     >
//       <style>{`@keyframes lumora-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
//       <div className="flex w-max animate-[lumora-marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
//         <ul className="flex shrink-0">{track}</ul>
//         <ul className="flex shrink-0" aria-hidden="true">
//           {track}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <>
//       <section id="home" className="relative overflow-hidden bg-sand">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-12 lg:gap-0 lg:px-8 lg:py-0">
//           <div className="relative z-10 animate-rise lg:col-span-7 lg:py-32">
//             <h1 className="font-display text-6xl font-medium leading-[0.95] text-ink sm:text-7xl xl:text-[8.5rem]">
//               Elevate <br />
//               Your <span className="italic text-clay">Everyday</span>{" "}
//               <br className="hidden lg:block" />
//               Style.
//             </h1>
//             <p className="mt-8 max-w-md text-base leading-relaxed text-body/80">
//               Discover thoughtfully curated essentials designed to bring
//               timeless elegance into your everyday life.
//             </p>
//             <div className="mt-10 flex flex-wrap gap-4">
//               <a
//                 href="#shop"
//                 className="bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-clay"
//               >
//                 Shop Collection
//               </a>
//               <a
//                 href="#new-arrivals"
//                 className="border border-ink px-8 py-4 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
//               >
//                 Explore New Arrivals
//               </a>
//             </div>
//           </div>

//           <div className="relative lg:col-span-5 lg:-mr-8">
//             <div
//               className="absolute -left-4 top-10 hidden h-3/4 w-3/4 bg-clay/20 lg:block"
//               aria-hidden="true"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
//               alt="Model wearing a relaxed neutral outfit from the LUMORA collection"
//               className="relative ml-auto aspect-[4/5] w-full object-cover lg:ml-0 lg:aspect-[3/4] lg:h-[88vh] lg:max-h-[860px] lg:w-[110%] lg:max-w-none"
//             />
//             <p className="absolute bottom-6 left-6 bg-white px-4 py-3 font-display text-sm italic text-ink">
//               Autumn edit, now in store
//             </p>
//           </div>
//         </div>
//       </section>
//       <Marquee />
//     </>
//   );
// }

const bigWords = ["Timeless", "Essentials", "Everyday", "Elegance", "Curated"];
const notes = [
  "Free shipping over $75",
  "New arrivals every week",
  "Easy 30-day returns",
  "Made to be worn for years",
  "Take 15% off with LUMORA15",
];

const Star = ({ className = "h-7 w-7" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`${className} shrink-0 animate-[spin_14s_linear_infinite] fill-ink`}
  >
    <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
  </svg>
);

function Marquee() {
  const bigTrack = bigWords.map((word, i) => (
    <li key={word} className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      <span
        className={`font-display text-6xl leading-none sm:text-8xl ${
          i % 2 === 0
            ? "italic text-ink"
            : "text-transparent [-webkit-text-stroke:1.5px_#171717]"
        }`}
      >
        {word}
      </span>
      <Star className="h-8 w-8 sm:h-12 sm:w-12" />
    </li>
  ));
  const noteTrack = notes.map((text) => (
    <li
      key={text}
      className="flex items-center gap-6 pr-6 text-sm font-medium text-ink"
    >
      {text}
      <span className="h-1 w-6 bg-ink/40" aria-hidden="true" />
    </li>
  ));

  return (
    <div
      className="group overflow-hidden bg-clay"
      role="region"
      aria-label="Store highlights"
    >
      <style>{`@keyframes lumora-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div className="flex w-max animate-[lumora-marquee_45s_linear_infinite] py-5 group-hover:[animation-play-state:paused]">
        <ul className="flex shrink-0 items-center">{bigTrack}</ul>
        <ul className="flex shrink-0 items-center" aria-hidden="true">
          {bigTrack}
        </ul>
      </div>
      <div className="border-t border-ink/25 bg-sand">
        <div className="flex w-max animate-[lumora-marquee_35s_linear_infinite_reverse] py-3 group-hover:[animation-play-state:paused]">
          <ul className="flex shrink-0 items-center">{noteTrack}</ul>
          <ul className="flex shrink-0 items-center" aria-hidden="true">
            {noteTrack}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-12 lg:gap-0 lg:px-8 lg:py-0">
          <div className="relative z-10 animate-rise lg:col-span-7 lg:py-32">
            <h1 className="font-display text-6xl font-medium leading-[0.95] text-ink sm:text-7xl xl:text-[8.5rem]">
              Elevate <br />
              Your <span className="italic text-clay">Everyday</span>{" "}
              <br className="hidden lg:block" />
              Style.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-body/80">
              Discover thoughtfully curated essentials designed to bring
              timeless elegance into your everyday life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-clay"
              >
                Shop Collection
              </a>
              <a
                href="#new-arrivals"
                className="border border-ink px-8 py-4 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
              >
                Explore New Arrivals
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:-mr-8">
            <div
              className="absolute -left-4 top-10 hidden h-3/4 w-3/4 bg-clay/20 lg:block"
              aria-hidden="true"
            />
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
              alt="Model wearing a relaxed neutral outfit from the LUMORA collection"
              className="relative ml-auto aspect-[4/5] w-full object-cover lg:ml-0 lg:aspect-[3/4] lg:h-[88vh] lg:max-h-[860px] lg:w-[110%] lg:max-w-none"
            />
            <p className="absolute bottom-6 left-6 bg-white px-4 py-3 font-display text-sm italic text-ink">
              Autumn edit, now in store
            </p>
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}
