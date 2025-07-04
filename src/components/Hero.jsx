import React, { useState, useEffect } from 'react';
import { useLocation, HashRouter, Link } from 'react-router-dom';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
      const [isExpanded, setIsExpanded] = useState(false);
  const { hash } = useLocation();

  const fullText = `Kazinama is an independent artist known for blending nostalgic melodies with modern soundscapes and captivating, story-driven visuals. With millions of monthly Spotify listeners and millions of streams and views across YouTube and other streaming platforms, his music resonates with audiences around the world. Celebrated by fans and applauded by celebrities across the globe, Kazinama's journey began as a guitar and bass player, performing over 1,100 shows internationally alongside various artists. Now stepping into the spotlight, he's launched his solo live act—Kazinama Live—a dynamic fusion of DJ performance and a hybrid live band. For updates, live shows, and new releases, stay tuned—and dive into his world of sound.`;

  const shortText = fullText.slice(0, 300) + '...';

  // Handle scrolling to hash fragment
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
        <section className="bg-bgDark" id='hero'>
        <div className="max-w-customContainer m-auto px-4 md:px-6 lg:px-8">
          <div className="flex-col md:flex-row flex gap-12 items-center">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-5xl text-brand font-semibold">Kazinama</h1>

              <p className="text-[#D1D5DB] text-base">
                {isExpanded ? fullText : shortText}
              </p>

              <div className="mb-8 font-medium">
                {!isExpanded ? (
                  <button onClick={() => setIsExpanded(true)} className="text-brand text-base">
                    Read More <i className="fa-solid fa-chevron-down ml-2.5"></i>
                  </button>
                ) : (
                  <button onClick={() => setIsExpanded(false)} className="text-brand text-base">
                    Read Less <i className="fa-solid fa-chevron-up ml-2.5"></i>
                  </button>
                )}
              </div>

              <div className="space-x-4">
                <Link to={'https://open.spotify.com/artist/3xSU7zwS2qlZd02OeSQKYo'}>
                <button className="bg-brand text-bgDark font-semibold rounded-full px-6 py-3 text-lg border-2 border-brand transition-all duration-300 hover:bg-bgDark hover:text-brand">
                  Listen Now
                </button>
                </Link>
                <Link to="#contact">
                  <button className="bg-brand text-bgDark font-semibold rounded-full px-6 py-3 text-lg border-2 border-brand transition-all duration-300 hover:bg-bgDark hover:text-brand">
                    Connect With Me
                  </button>
                </Link>
              </div>

              <div className="flex md:justify-between md:flex-row flex-col gap-y-5 justify-center items-center">
                <div className="bg-dark p-4 rounded-xl w-[190px]">
                  <h5 className="text-brand font-bold text-2xl">1.1K+</h5>
                  <p className="text-[#9CA3AF] text-sm">Live Shows</p>
                </div>
                <div className="bg-dark p-4 rounded-xl w-[190px]">
                  <h5 className="text-brand font-bold text-2xl">1.5M+</h5>
                  <p className="text-[#9CA3AF] text-sm">Monthly Listeners</p>
                </div>
                <div className="bg-dark p-4 rounded-xl w-[190px]">
                  <h5 className="text-brand font-bold text-2xl">25M+</h5>
                  <p className="text-[#9CA3AF] text-sm">Total Streams</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 inline-block overflow-hidden">
              <img
                src={heroImg}
                alt="Hero Img"
                className="w-full transform hover:scale-110 transition duration-600 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero