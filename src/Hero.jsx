
import HeroImage from './assets/6.jpg'


const Hero = () => {
  return (
    <section id="home" className="w-screen h-screen ">
      <div className="flex justify-center items-center bg-gray-900
 h-[100vh] font-poppins pb-24">

        <div className="md:bg-gradient-to-r from-pink via-purple-800 to-blue-900 bg-gradient-to-b from-pink via-purple-800 to-blue-900 p-10 md:p-20 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 rounded-2xl shadow-sm shadow-pink/30 max-w-4xl w-full mx-20 animate-glow ">

          <div className="w-36 h-36 md:w-64 md:h-64 overflow-hidden rounded-full border-2 border-cyan shadow-sm shadow-offwhite/20 hover:shadow-md hover:shadow-offwhite/40 transition-shadow duration-100 m-auto">
            <img
              src={HeroImage}
              alt="Ryan Tresmanio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:px-5 sm:ml-10 lg:ml-0">
            <p className="text-offwhite mt-8">Hi! I'm</p>
            <h1 className="text-8xl lg:text-[10rem] font-bold text-cyan m-auto">TRES</h1>
            <p className="text-offwhite mt-8">An aspiring Web Developer</p>
          </div>
        </div>

        <a href="#about" className="absolute bottom-6 text-offwhite hover:text-pink transition duration-300">
        <div className="flex flex-col items-center animate-discover">
            <span className="text-sm tracking-wider mb-1">Discover More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        </a>

      </div>
    </section>
  )
}

export default Hero
