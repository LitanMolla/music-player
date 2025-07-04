import React from 'react'

const Footer = () => {
  return (
    <>
      <section className='bg-dark py-12 border-t-[1px] border-t-gray-500'>
        <div className="max-w-customContainer m-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center text-center md:text-left space-y-5 md:space-y-0">
            <div>
              <h5 className='text-xl font-bold text-brand mb-3'>Contact</h5>
              <p className='text-base text-white'>
                Email: <a href="#" className='hover:text-brand transition-all duration-300'>Contact@kazinama.com</a>
              </p>
              <p className='text-base text-white mt-1'>
                Phone: <a href="#" className='hover:text-brand transition-all duration-300'>(+91) 8595544847</a>
              </p>
            </div>
            <div>
              <span className='text-2xl font-bold text-brand'>Kazinama</span>
            </div>
            <div>
              <h5 className='text-xl font-bold text-brand mb-3 md:text-end'>Follow Me</h5>
              <div className="text-white text-xl space-x-3">
                <a href="#"><i className="fa-brands fa-instagram hover:text-brand duration-300 transition-all"></i></a>
                <a href="#"><i className="fa-brands fa-spotify hover:text-brand duration-300 transition-all"></i></a>
                <a href="#"><i className="fa-brands fa-youtube hover:text-brand duration-300 transition-all"></i></a>
                <a href="#"><i className="fa-brands fa-patreon hover:text-brand duration-300 transition-all"></i></a>
              </div>
            </div>
          </div>

          <hr className='border-0 bg-[#9CA3AF] h-[1px] mt-10 mb-6' />
          <footer className='text-center'>
            <p className='text-[#9CA3AF] text-base'>© 2025 <span className='text-white'>Kazinama</span>. All rights reserved.</p>
          </footer>
        </div>
      </section>
    </>
  )
}

export default Footer