import React, { useState, useEffect } from 'react';
import { useLocation, HashRouter, Link } from 'react-router-dom';
import heroImg from '../assets/images/bayazid_hasan.png';

const Hero = () => {
      const [isExpanded, setIsExpanded] = useState(false);
  const { hash } = useLocation();

  const fullText = `Al Helal Mohammod Bayijid, also known as Bayazid Hasan, is a Bangladeshi musical artist, composer, and creative visionary known for fusing modern electronic sounds with emotionally rich melodies rooted in South Asian culture. Born on February 24, 2004, in Sirajganj, Bayazid’s journey began with a passion for both music and technology.

Recognized for his versatility, Bayazid has made a name for himself not only as a rising artist but also as a skilled music director, WordPress developer, and digital marketing expert. His original tracks, remixes, and visuals have earned attention across streaming platforms and social media, resonating with a growing audience.

From crafting immersive musical experiences to developing high-performing websites, Bayazid represents a new wave of Bangladeshi creatives who are reshaping the digital and artistic scene. Stay tuned for his latest releases, collaborations, and innovations—and step into the world of Bayazid Hasan.`;

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
              <h1 className="text-5xl text-brand font-semibold">BAYAZID HASAN</h1>

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
                  <h5 className="text-brand font-bold text-2xl">100K+</h5>
                  <p className="text-[#9CA3AF] text-sm">Monthly Listeners</p>
                </div>
                <div className="bg-dark p-4 rounded-xl w-[190px]">
                  <h5 className="text-brand font-bold text-2xl">15M+</h5>
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
