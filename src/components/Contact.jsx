import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <section className='bg-[#121212] py-20 box-border' id='contact'>
                <div className="max-w-customContainer m-auto px-4 md:px-6 lg:px-8">
                    <h3 className="text-white text-center text-4xl font-bold mb-12">
                        <span className="text-brand">Connect </span> With Me
                    </h3>
                    <div className="flex justify-center md:justify-between gap-6 flex-wrap">
                        {/* Social Item 01 */}
                        <Link to={'https://www.facebook.com/LITANMOLLA09'}>
                        <div className="bg-dark text-center p-6 rounded-lg flex-1 duration-300 transition-all hover:bg-darkHover w-74">
                            <div className="w-16 h-16 mx-auto items-center justify-center flex rounded-full bg-[#514927] text-4xl text-brand">
                                <i class="fa-brands fa-patreon"></i>
                            </div>
                                <h4 className='text-xl text-white font-bold mt-4 mb-2'>Patreon</h4>
                                <p className='text-base text-[#9CA3AF]'>Get exclusive content</p>
                        </div>
                        </Link>
                        {/* Social Item 01 */}
                        <Link to={'https://www.facebook.com/LITANMOLLA09'}>
                        <div className="bg-dark text-center p-6 rounded-lg flex-1 duration-300 transition-all hover:bg-darkHover w-74">
                            <div className="w-16 h-16 mx-auto items-center justify-center flex rounded-full bg-[#514927] text-4xl text-brand">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                                <h4 className='text-xl text-white font-bold mt-4 mb-2'>Instagram</h4>
                                <p className='text-base text-[#9CA3AF]'>Follow my journey</p>
                        </div>
                        </Link>
                        {/* Social Item 01 */}
                        <Link to={'https://www.facebook.com/LITANMOLLA09'}>
                        <div className="bg-dark text-center p-6 rounded-lg flex-1 duration-300 transition-all hover:bg-darkHover w-74">
                            <div className="w-16 h-16 mx-auto items-center justify-center flex rounded-full bg-[#514927] text-4xl text-brand">
                                <i class="fa-brands fa-spotify"></i>
                            </div>
                                <h4 className='text-xl text-white font-bold mt-4 mb-2'>Spotify</h4>
                                <p className='text-base text-[#9CA3AF]'>Listen to my music</p>
                        </div>
                        </Link>
                        {/* Social Item 01 */}
                        <Link to={'https://www.facebook.com/LITANMOLLA09'}>
                        <div className="bg-dark text-center p-6 rounded-lg flex-1 duration-300 transition-all hover:bg-darkHover w-74">
                            <div className="w-16 h-16 mx-auto items-center justify-center flex rounded-full bg-[#514927] text-4xl text-brand">
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                                <h4 className='text-xl text-white font-bold mt-4 mb-2'>Youtube</h4>
                                <p className='text-base text-[#9CA3AF]'>Watch my videos</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact