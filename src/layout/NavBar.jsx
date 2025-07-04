import { Link } from "react-scroll"
import { FaChartBar } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";


const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    console.log('ami chap lagsi');

  }
  return (
    <>
      <header className='bg-bgDark md:py-7 py-3 border border-b-gray-500 fixed top-0 left-0 w-full z-50'>
        <nav className='max-w-customContainer m-auto px-4 md:px-6 lg:px-8'>
          <div className="flex justify-between items-center">
            <div className="">
              <span className='text-brand text-4xl font-bold'>Kazinama</span>
            </div>
            {/* LG Menu */}
            <div className="hidden md:block">
              <ul className='lg:space-x-12 space-x-5 flex'>
                <Link to="hero" spy={true} smooth={true} duration={500} offset={-98} activeClass="text-brand"><li className='text-lg text-white font-medium duration-300 hover:text-brand inline-block'>Home</li></Link>
                <Link to="music" spy={true} smooth={true} duration={500} activeClass="text-brand"><li className='text-lg text-white font-medium duration-300 hover:text-brand inlzine-block'>Music</li></Link>
                <Link to="videos" spy={true} smooth={true} duration={500} activeClass="text-brand"><li className='text-lg text-white font-medium duration-300 hover:text-brand inline-block'>Videos</li></Link>
                <Link to="" spy={true} smooth={true} duration={500} activeClass="text-brand"><li className='text-lg text-white font-medium duration-300 hover:text-brand inline-block'>Press</li></Link>
                <Link to="" spy={true} smooth={true} duration={500} activeClass="text-brand"><li className='text-lg text-white font-medium duration-300 hover:text-brand inline-block'>Merch</li></Link>

                <Link to="contact" spy={true} smooth={true} duration={500}><li className='text-lg text-white font-medium duration-300 hover:text-brand inline-block'>Connect</li></Link>
              </ul>
            </div>
            {/* Menu bar btn for mobile */}
            <div className="block md:hidden">
              <button className="text-3xl text-brand" onClick={handleMenu}>
                < FaChartBar />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`block md:hidden fixed top-0 right-0 w-3/4 h-full bg-bgDark/95 z-50 transform transition-transform duration-300 ease-in-out ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="text-4xl text-brand absolute top-4 right-4" onClick={handleMenu}>
              <IoIosCloseCircle />
            </button>
            <ul className='flex flex-col justify-center items-center gap-5 h-full'>
              <Link onClick={handleMenu} to="hero" spy={true} smooth={true} duration={500} offset={-98} activeClass="text-brand">
                <li className='text-lg text-white font-medium duration-300 hover:text-brand block'>Home</li>
              </Link>
              <Link onClick={handleMenu} to="music" spy={true} smooth={true} duration={500} activeClass="text-brand">
                <li className='text-lg text-white font-medium duration-300 hover:text-brand inline-block'>Music</li>
              </Link>
              <Link onClick={handleMenu} to="videos" spy={true} smooth={true} duration={500} activeClass="text-brand">
                <li className='text-lg text-white font-medium duration-300 hover:text-brand block'>Videos</li>
              </Link>
              <Link onClick={handleMenu} to="press" spy={true} smooth={true} duration={500} activeClass="text-brand">
                <li className='text-lg text-white font-medium duration-300 hover:text-brand block'>Press</li>
              </Link>
              <Link onClick={handleMenu} to="merch" spy={true} smooth={true} duration={500} activeClass="text-brand">
                <li className='text-lg text-white font-medium duration-300 hover:text-brand block'>Merch</li>
              </Link>
              <Link onClick={handleMenu} to="contact" spy={true} smooth={true} duration={500}>
                <li className='text-lg text-white font-medium duration-300 hover:text-brand block'>Contact</li>
              </Link>
            </ul>
          </div>

        </nav>
      </header>
      <div className="pb-25 bg-bgDark"></div>
    </>
  )
}

export default NavBar