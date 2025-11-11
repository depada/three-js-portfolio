import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kolipaka.pavan.kp@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Pavan Kolipaka</p>
              <section
                className="rounded-3xl border border-zinc-200/60 dark:border-zinc-800/70
             bg-gradient-to-br from-white to-zinc-50/60 dark:from-zinc-900/60 dark:to-zinc-900/30
             shadow-sm ring-1 ring-black/5 px-5 py-6 sm:px-7 sm:py-8">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                  About
                </h2>

                <p className="grid-subtext text-[15px] leading-7 text-zinc-800 dark:text-zinc-200">
                  I build fast, accessible React/Next.js UIs and robust Spring Boot services. I design REST APIs, model
                  data, add Redis/Kafka, and ship on Docker/AWS.
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Lighthouse Perf 92/100',
                    'TTFF 1.8s → 0.9s',
                    'Checkout 96.8% (sandbox)',
                    'p95 API 210ms → 95ms',
                  ].map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-zinc-200/60 dark:border-zinc-700
                   bg-zinc-100 dark:bg-zinc-800/80
                   px-3 py-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      {chip}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <div
                className="grid-subtext rounded-2xl border border-zinc-200/60 dark:border-zinc-800/70
             bg-gradient-to-br from-white to-zinc-50/60 dark:from-zinc-900/60 dark:to-zinc-900/30
             shadow-sm ring-1 ring-black/5 px-4 py-3">
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-2">Tech stack</p>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {[
                    'React/Next.js (TS)',
                    'Tailwind/Sass',
                    'shadcn/ui',
                    'GSAP',
                    'Vite/Webpack',
                    'Code splitting',
                    'Lazy loading',
                    'Lighthouse',
                    'Spring Boot 3',
                    'REST (JWT/OAuth2)',
                    'Postgres/MySQL',
                    'Redis',
                    'Kafka',
                    'Appwrite/Twilio',
                    'Clerk/getstream',
                    'Docker',
                    'AWS',
                    'GitHub Actions',
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300
                   border border-zinc-200/60 dark:border-zinc-700 px-3 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Hyderabad, India and open to work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" to="#contact" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <section
                className="rounded-3xl border border-zinc-200/60 dark:border-zinc-800/70
             bg-gradient-to-br from-white to-zinc-50/60 dark:from-zinc-900/60 dark:to-zinc-900/30
             shadow-sm ring-1 ring-black/5 px-5 py-6 sm:px-7 sm:py-8">
                <p
                  className="grid-headtext text-2xl sm:text-[28px] font-semibold
                bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500
                bg-clip-text text-transparent mb-2">
                  My Passion for Coding
                </p>

                <p className="grid-subtext text-[15px] leading-7 text-zinc-800 dark:text-zinc-200">
                  Code is my craft—not just my job. I love turning ideas into fast, accessible products and keep pushing
                  myself with new tech, better UX, and measurable improvements release after release.
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {['Craft', 'Speed', 'Reliability', 'UX', 'Accessibility'].map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-zinc-100 dark:bg-zinc-800/80
                   border border-zinc-200/60 dark:border-zinc-700
                   px-3 py-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      {chip}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  kolipaka.pavan.kp@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
